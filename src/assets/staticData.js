// icons
import {
  Calendar,
  Home,
  Inbox,
  Search,
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"



// sidebar menu content
const sidebarMenu = [
  {
    desc: "儀錶板",
    path: "/dashboard",
    icon: Home,
  },
  {
    desc: "我的行程",
    path: "/schedule",
    icon: Inbox,
  },
  {
    desc: "人員管理",
    path: "/member",
    icon: Calendar,
  },
  {
    desc: "任務中心",
    path: "/mission-center",
    icon: Search,
  },
];

// team switching content
const teamSwithcerData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Greenfield Complex",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "我的最愛",
          url: "#",
        },
        {
          title: "規劃設計",
          url: "#",
        },
        {
          title: "BIM協作",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "儀錶板",
      url: "/dashboard",
      icon: Frame,
    },
    {
      name: "我的行程",
      url: "/schedule",
      icon: PieChart,
    },
    {
      name: "人員管理",
      url: "/member",
      icon: Map,
    },
    {
      name: "任務中心",
      url: "/mission-center",
      icon: AudioWaveform,
    },
  ],
}


export { sidebarMenu, teamSwithcerData }  