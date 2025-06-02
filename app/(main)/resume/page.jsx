import { getResume } from "@/actions/resume"
import ResumeBuilder from "./_components/resume-builder";

const ResumePage = async () => {

    const resume = await getResume();

    return (
    <div className="container mx-auto py-6">
        <ResumeBuilder />
    </div>
  )
}

export default ResumePage