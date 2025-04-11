import { Subscribe } from "@/features/student/subscribe";
import { EmptyState } from "@/components/shared";
import { fetchAllSubscriptions } from "@/queries";

export default async function SubscriptionPage() {
  try {
    const response = await fetchAllSubscriptions();

    if (!response?.success) {
      return (
        <div className="grid h-full w-full place-items-center">
          <EmptyState
            title="Failed to Load Subscriptions"
            description="We couldn't load the subscription plans. Please try again later."
            imageSize="lg"
            imageSrc="/icons/subscription-icon.png"
          />
        </div>
      );
    }

    if (response.data?.length > 0) {
      return <Subscribe data={response.data} />;
    }

    return (
      <div className="grid h-full w-full place-items-center">
        <EmptyState
          title="No Subscription Plans Available"
          description="There are currently no subscription plans to display."
          imageSize="lg"
          imageSrc="/icons/subscription-icon.png"
        />
      </div>
    );
  } catch (error) {
    console.log(error);
    return (
      <div className="grid h-full w-full place-items-center">
        <EmptyState
          title="Something Went Wrong"
          description="An unexpected error occurred while loading subscriptions."
          imageSize="lg"
          imageSrc="/icons/error-icon.png"
        />
      </div>
    );
  }
}
