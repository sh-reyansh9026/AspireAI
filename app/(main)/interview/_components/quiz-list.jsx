"use client";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Dialog, DialogTitle, DialogHeader, DialogContent } from "@/components/ui/dialog";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useState } from "react";
import QuizResult from "./quiz-result";


const QuizList = ({assessments}) => {
  
  const router = useRouter();
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <div>
            <CardTitle className="gradient-title text-3xl md:text-4xl">Recent Quizzes</CardTitle>
            <CardDescription>Review your past quiz performance</CardDescription>
          </div>
            <Button onClick={() => router.push('interview/mock')}>
              Take a Mock Quiz
            </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {assessments.map((assessment, i) => (
              <Card className="cursor-pointer hover:bg-muted/50 transition-colors" onClick={() => setSelectedQuiz(assessment)} key={assessment.id} >
                <CardHeader>  
                  <CardTitle className="gradient-title text-3xl md:text-4xl">Quiz {i+1}</CardTitle>
                  <CardDescription className="flex justify-between w-full">
                    <div>Score: {assessment.quizScore.toFixed(1)}%</div>
                    <div>
                      {format(new Date(assessment.createdAt), 'MM dd, yyyy HH:mm')}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {assessment.improvementTip}
                  </p>
                </CardContent>
                </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={!!selectedQuiz} onOpenChange={() => setSelectedQuiz(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>title</DialogTitle>
          </DialogHeader>
          <QuizResult result={selectedQuiz} onStartNew={() => router.push("/interview/mock")} hideStartNew/>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default QuizList