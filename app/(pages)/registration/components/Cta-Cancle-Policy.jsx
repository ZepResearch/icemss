import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTACancle() {
  return (
    <div className="py-12 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <Alert className="bg-blue-50 border-primary">
          <AlertCircle className="h-4 w-4 text-primary" />
          <AlertTitle className="text-primary font-semibold text-3xl">
            Cancellation Policy
          </AlertTitle>
          <AlertDescription className="mt-2 text-foreground">
            <p className="mb-4">
              We understand that plans can change. Our cancellation policy is
              designed to be fair and flexible:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Full refund if cancelled 30+ days before the event</li>
              <li>50% refund if cancelled 15-29 days before the event</li>
              <li>No refund if cancelled 14 days or less before the event</li>
            </ul>
            <p className="mb-6">
              All cancellations must be made in writing. Transfer of tickets to
              another person is allowed up to 7 days before the event.
            </p>
            <div className="flex justify-start">
              <Link href={'/cancellation-policy'}>
              <Button
                variant="outline"
                className="bg-background text-primary hover:bg-primary hover:text-primary-foreground"
                >
                Read Full Policy
              </Button>
                </Link>
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
