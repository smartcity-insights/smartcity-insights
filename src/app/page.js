// components
import ProjectCard from "@/components/shared/ProjectCard";
// shacdcn/ui
import { SidebarInset } from "@/components/ui/sidebar"

export default async function Home() {


  return (
    <>
      <SidebarInset>
        <div className="flex flex-wrap w-full px-6 gap-4">
          {
            Array.from({ length: 10 }).map((_, index) => (
              <ProjectCard
                key={index}
                photo={photos}
              />
            ))
          }
        </div>
      </SidebarInset>
    </>
  );
}
