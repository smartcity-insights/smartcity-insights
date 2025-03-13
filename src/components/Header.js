// general
import Link from "next/link";
// icons
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <div className="flex p-1 items-center gap-2">
      <GiHamburgerMenu />
      <Link href="/"><p>Smart City</p></Link>
    </div>
  )
}
