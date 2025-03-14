// data
import { sidebarMenu } from "@/assets/staticData"
// general
import Link from "next/link"

export default function Sidebar() {
  const sidebarContent = sidebarMenu.map(({ desc, path }, index) => {
    return (
      <Link
        key={index}
        href={path}
        className="p-2 bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-accent rounded flex justify-center m-0 transition duration-500"
      >
        {desc}
      </Link>
    )
  })

  return (
    <div className="fixed flex flex-col h-screen gap-3 w-[15%] py-2 bg-gray-900 text-gray-100">
      {sidebarContent}
    </div>
  )
}