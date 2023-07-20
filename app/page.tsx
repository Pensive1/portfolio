import { getProjects } from "@/sanity/sanity-utils"

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      {!projects && <p>Loading...</p>}

      {projects && projects.map((project) => (
        <div key={project._id}>
          {project.name}
        </div>
        )
      )}
    </div>
  )
}
