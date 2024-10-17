import { db } from "@/db";
import { eq } from "drizzle-orm";
import { projects as dbProjects } from "@/db/schema";
import Link from "next/link";
import { Globe, ChevronLeft, Code } from 'lucide-react';
import Table from "@/components/table";
import { Button } from "@/components/ui/button";
import SummarizeButton from "@/components/SummarizeButton"; // Import the client component

const page = async ({ params }: {
  params: {
    projectId: string
  }
}) => {
  if (!params.projectId) return (<div>Invalid Project ID</div>);

  const projects = await db.query.projects.findMany({
    where: (eq(dbProjects.id, parseInt(params.projectId))),
    with: {
      feedbacks: true
    }
  });

  const project = projects[0];

  return (
    <div>
      <div>
        <Link href="/dashboard" className="flex items-center text-indigo-700 mb-5 w-fit"><ChevronLeft className="h-5 w-5 mr-1" /><span className="text-lg"><Button>Back to projects</Button></span></Link>
      </div>
      <div className="flex justify-between items-start">
        <div className="proj-info">
          <h1 className="text-3xl font-bold mb-3">{project.name}</h1>
          <h2 className="text-primary-background text-xl mb-2">{project.description}</h2>
        </div>
        <div className="flex flex-col">
          {project.url ? (
            <Link href={project.url} className="w-fit">
              <Button className="flex items-center">
                <Globe className="h-5 w-5 mr-1" />
                <span className="text-lg">Visit your website</span>
              </Button>
            </Link>
          ) : null}
          <Link href={`/projects/${params.projectId}/instructions`} className="flex items-center mt-2">
            <Button className="flex items-center">
              <Code className="h-5 w-5 mr-1" />
              <span className="text-lg">Embed Code</span>
            </Button>
          </Link>
        </div>
      </div>
      <div>

        <Table data={project.feedbacks} />
        <SummarizeButton projectId={params.projectId} />
      </div>
    </div>
  )
}

export default page;
