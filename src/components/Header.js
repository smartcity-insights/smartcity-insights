// icons
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  return (
    <div className="flex p-1 items-center gap-2">
      <GiHamburgerMenu />
      <p>Smart City</p>
    </div>
  )
}
