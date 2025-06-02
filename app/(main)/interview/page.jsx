import { getAssessments } from "@/actions/interview";
import StatsCards from "./_components/stats-cards";
import PerformanceChart from "./_components/performance-chart";
import QuizList from "./_components/quiz-list";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const InterviewPage = async () => {
  
  const {isOnboarded} = await getUserOnboardingStatus();
    
  if(!isOnboarded) {
    redirect("/onboarding");
  }

  const assessments = await getAssessments();
  
  return (
    <div>
      <h1 className="text-6xl font-bold gradient-title mb-5">
        Interview Preparation
      </h1>
      
      <div className="space-y-6">
        <StatsCards assessments={assessments}/>
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} />
      </div>
    </div>
  )
}

export default InterviewPage