import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "./skeleton"

export function SpeakerSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-0">
        <Skeleton className="h-6 w-2/3" />
      </CardHeader>
      <CardContent className="pb-4">
        <Skeleton className="h-48 w-full mb-4" />
        <Skeleton className="h-4 w-1/2 mb-2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full mt-1" />
      </CardContent>
    </Card>
  )
}

