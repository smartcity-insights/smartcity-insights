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
        className="p-2 bg-black text-white hover:bg-gray-800 rounded flex justify-center m-0 transition duration-500"
      >
        {desc}
      </Link>
    )
  })

  return (
    <div className="fixed flex flex-col  h-screen  gap-3 w-[15%] bg-black py-2">
      {sidebarContent}
    </div>
  )
}