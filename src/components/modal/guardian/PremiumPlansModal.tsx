import React from "react";
import Modal from "react-modal";
import { nunito } from "@/components/shared/fonts";
import useNoScroll from "@/components/hooks/useNoScroll";

const plans = ["Monthly - #200", "Quarterly - #550", "Annually - #2000"];

const PremiumPlansModal = ({
  isOpen,
  setIsOpen,
  setSelectedPlan,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;
}) => {
  useNoScroll(isOpen);
  return (
    <Modal
      // appElement={
      //   (document.getElementById("__next") as HTMLElement) || undefined
      // }
      isOpen={isOpen}
      className="modal bg-white pb-8 pl-7 pr-16 pt-6"
      overlayClassName="backdrop"
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      contentLabel="Premium Plans Modal"
      ariaHideApp={false}
    >
      <h2 className={`${nunito.className} text-xs font-bold text-[#407BFF]`}>
        Premium Plans
      </h2>
      <div className="mt-4 flex flex-col gap-4">
        {plans.map((plan, index) => (
          <p
            key={index}
            onClick={() => (
              setSelectedPlan(plan.split("-")[0]), setIsOpen(false)
            )}
            className={`${nunito.className} cursor-pointer text-[13px] text-[rgba(27,27,27,0.60)]`}
          >
            {plan}
          </p>
        ))}
      </div>
    </Modal>
  );
};

export default PremiumPlansModal;
