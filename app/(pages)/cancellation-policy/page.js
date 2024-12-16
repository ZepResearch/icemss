import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from 'lucide-react'

export default function CancellationPolicy() {
  const cancellationFees = [
    { period: "60+ days before the conference", refund: "100% refund" },
    { period: "30-59 days before the conference", refund: "50% refund" },
    { period: "Less than 30 days before the conference", refund: "No refund" },
  ]

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold underline underline-offset-4 decoration-blue-500 mb-8 text-center">Cancellation Policy</h1>
        
        <Card className="mb-8 border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-700">Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-900">
              We understand that circumstances can change. Our cancellation policy is designed to be fair to all participants. 
              Please read this policy carefully before registering for the International Conference on Engineering, Management and Social Sciences (ICEMSS).
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8 border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-700">Cancellation Fees</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="underline underline-offset-4 decoration-blue-500 font-extrabold text-blue-800">Cancellation Period</TableHead>
                  <TableHead className="underline underline-offset-4 decoration-blue-500 font-extrabold text-blue-800">Refund Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cancellationFees.map((fee, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-semibold text-blue-900">{fee.period}</TableCell>
                    <TableCell className="text-blue-900">{fee.refund}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="mb-8 border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl underline underline-offset-4 decoration-blue-500 font-extrabold text-blue-700">How to Cancel</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-900">To cancel your registration, please follow these steps:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2 text-blue-900">
              <li>Log in to your ICEMSS conference account</li>
              <li>Navigate to My Registrations</li>
              <li>Select the registration you wish to cancel</li>
              <li>Click on the  Cancel Registration button</li>
              <li>Follow the prompts to complete the cancellation process</li>
            </ol>
          </CardContent>
        </Card>

        <Alert className="mb-8 border-2 border-blue-300 bg-blue-100">
          <InfoIcon className="h-5 w-5 text-blue-700" />
          <AlertTitle className='font-extrabold underline underline-offset-4 decoration-blue-500 mb-4 mt-1.5 text-blue-800'>Important Note</AlertTitle>
          <AlertDescription className="text-blue-900">
            All cancellation requests must be submitted through your ICEMSS conference account. Refunds will be processed to the original form of payment within 10 business days of approval. For academic paper submissions, please note that cancelling your registration does not automatically withdraw your paper from the conference proceedings.
          </AlertDescription>
        </Alert>

        <Card className="border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-700">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-900">
              If you have any questions about our cancellation policy or need assistance, please dont hesitate to contact our support team:
            </p>
            <p className="mt-2 text-blue-900">
              <strong>Email:</strong> support@icemss.com<br />
              <strong>Phone:</strong> +65 6123 4567
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

