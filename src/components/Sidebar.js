// data
import { sidebarMenu } from "@/assets/staticData"
// general
import Link from "next/link"

export default function Sidebar() {
  const sidebarContent = sidebarMenu.map(({ desc, path }, index) => {
    return (
      <Link key={index} href={path} className="p-2 hover:bg-gray-200 rounded flex justify-center">
        {desc}
      </Link>
    )
  })

  return (
    <div className="fixed flex flex-col  bg-gray-100 h-screen p-4 gap-3 w-[15%]">
      {sidebarContent}
    </div>
  )
}