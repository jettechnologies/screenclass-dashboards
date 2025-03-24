"use client";

import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpSchema, OtpFormValues } from "@/utils/validators";
import { useTimer } from "react-timer-hook";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuthActions, useAuthState } from "@/store";
import { forgetPassword } from "@/mutation";
import { Response } from "@/utils/validators";

export const OTPForm = () => {
  const router = useRouter();
  const { setResetPwdState } = useAuthActions();
  const { resetPwdState } = useAuthState();
  const [state, setState] = React.useState<
    "idle" | "verifyingOtp" | "resendingOtp"
  >("idle");
  const [pin, setPin] = React.useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const toastId = crypto.randomUUID();

  // Set timer for 5 minutes
  const timeMinute = new Date();
  timeMinute.setMinutes(timeMinute.getMinutes() + 5);
  const { minutes, seconds } = useTimer({ expiryTimestamp: timeMinute });

  const userID = resetPwdState.userIdentity;

  const { control, handleSubmit, formState, setValue } = useForm<OtpFormValues>(
    {
      resolver: zodResolver(otpSchema),
      mode: "onChange",
      reValidateMode: "onChange",
      defaultValues: {
        otp: "",
      },
    },
  );

  const resendOTP = async () => {
    try {
      setState("resendingOtp");
      const request = await forgetPassword({ resetField: userID! });
      const response: Response<null> = await request?.json();
      if (request?.ok) toast.success("OTP sent successfully", { id: toastId });
      else toast.error(response.message, { id: toastId });
    } catch (error) {
      console.log(error);
      toast.error("Failed to resend OTP");
    } finally {
      setState("idle");
    }
  };

  const handleInputChange = (index: number, value: string) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    setValue("otp", newPin.join(""), { shouldValidate: true });

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (index === 5 && value) {
      handleSubmit(onSubmit)();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    if (pastedText.match(`[^0-9][5]`)) return;
    const pastedValue = pastedText.slice(0, 6);
    const newPin = Array.from({ length: 6 }, (_, i) => pastedValue[i] || "");
    setPin(newPin);
  };

  const onSubmit = (data: OtpFormValues) => {
    router.push("/reset-password");
    setResetPwdState({ otp: data.otp, userIdentity: userID! });
  };

  return (
    <>
      <div className="grid min-h-[300px] w-full max-w-[554px] place-items-center rounded-lg bg-[#EDF7FE] py-12 shadow-md">
        <Toaster richColors position="top-right" />

        <p className="mb-6 text-gray-600">
          We sent a mail to {userID}, check your inbox
        </p>

        <form>
          <div className="mb-4 flex space-x-2 rtl:space-x-reverse">
            {Array.from({ length: 6 }).map((_, index) => (
              <Controller
                key={index}
                name={"otp"}
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    maxLength={1}
                    value={pin[index] || ""}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    className="h-12 w-12 rounded-lg border border-gray-300 text-center text-lg font-bold text-black focus:border-primary-500 focus:ring-primary-500"
                    disabled={state === "verifyingOtp"}
                  />
                )}
              />
            ))}
          </div>

          {formState.errors.otp && (
            <p className="mb-4 text-sm text-red-500">
              {formState.errors.otp.message}
            </p>
          )}

          {minutes + seconds === 0 ? (
            <p className="text-gray-600">
              Did not receive a code?{" "}
              <button
                type="button"
                onClick={resendOTP}
                className="text-primary-500 hover:underline"
                disabled={state === "resendingOtp"}
              >
                Resend{" "}
                {state === "resendingOtp" && <span className="ml-2">⏳</span>}
              </button>
            </p>
          ) : (
            <p className="text-gray-600">
              Resend code in {minutes.toString().padStart(2, "0")}:
              {seconds.toString().padStart(2, "0")}
            </p>
          )}
        </form>
      </div>
    </>
  );
};
