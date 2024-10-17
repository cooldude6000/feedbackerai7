import { auth } from "@clerk/nextjs/server";
import { db } from "@/db";
import { subscriptions } from "@/db/schema";
import { eq } from "drizzle-orm";
import ManageSubscription from "./manage-subscription";
import { clerkClient } from "@clerk/nextjs/server";
import { format, addMonths } from "date-fns";

const page = async () => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const user = await clerkClient.users.getUser(userId);
  const signupDate = new Date(user.createdAt);

  const nextPeriodDate = addMonths(signupDate, 3);

  const formattedSignupDate = format(nextPeriodDate, "MMMM d, yyyy");

  const subscription = await db.query.subscriptions.findFirst({
    where: eq(subscriptions.userId, userId)
  });

  const plan = subscription && subscription.subscribed ? 'premium' : 'free';

  return (
    <div className="p-4 border rounded-md">
      <h1 className="text-4xl mb-3">Subscription Details</h1>
      <p className="mb-2 text-lg">
        Your current plan is: <span className="text-yellow-500 animate-pulse">Premium</span> (till : {formattedSignupDate})
        {/* {plan} */}
      </p>
      <ManageSubscription />
    </div>
  );
};

export default page;
