// shacdcn/ui
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// general
import Image from "next/image"


export default function ProjectCard() {
  return (
    <Card className="w-72">
      <Image
        src="https://loremflickr.com/320/240/building"
        alt="Card Image"
        width={300}
        height={50}
        className="object-cover w-full h-48 rounded-t-lg"
        style={{ aspectRatio: "500/300", objectFit: "cover" }}
      />
      <CardContent className="p-4">
        <CardTitle className="text-2xl font-bold">Stunning Card</CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400 mt-2">
          This is a stunning card with an image, title, description, and tags. It's designed to be visually
          appealing and provide additional context.
        </CardDescription>
        <div className="flex justify-evenly">
          <Button variant="default" className="mt-4">Detail</Button>
          <Button variant="default" className="mt-4">Detail</Button>
        </div>
      </CardContent>
    </Card>
  )
}
