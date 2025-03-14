// components
import ProjectCard from "@/components/shared/ProjectCard";
// shacdcn/ui
import { SidebarInset } from "@/components/ui/sidebar"

export default async function Home() {


  return (
    <>
      <SidebarInset>
        <h1 className="font-bold">孿生城市</h1>
        <div className="flex flex-wrap w-full px-6 gap-4">
          {
            Array.from({ length: 10 }).map((_, index) => (
              <ProjectCard
                key={index}
              />
            ))
          }
        </div>
      </SidebarInset>
    </>
  );
}
