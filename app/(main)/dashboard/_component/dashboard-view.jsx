"use client";

import { Brain, BriefcaseIcon, LineChart, TrendingDown, TrendingUp } from "lucide-react";
import {formatDistanceToNow, format} from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {ResponsiveContainer} from "recharts";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const DashboardView = ({insights}) => {

    const salaryData = insights.salaryRanges.map((range) => ({
        name: range.role,
        min: range.min/1000,
        max: range.max/1000,
        median: range.median/1000,
    }));

    const getDemandLevelColor = (level) => {
        console.log("Demand Level:", level);
        switch (level) {
            case 'HIGH':
                return 'bg-green-500';
            case 'MEDIUM':
                return 'bg-yellow-500';
            case 'LOW':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    const getMarketOutlookInfo = (outlook) => {
        console.log("Market Outlook:", outlook);
        
        switch (outlook) {
            case "POSITIVE":
                return {icon: TrendingUp, color: "text-green-500"};
            case "NEUTRAL":
                return {icon: LineChart, color: "text-yellow-500"};
            case "NEGATIVE":
                return {icon: TrendingDown, color: "text-red-500"};
            default:
                return {icon: LineChart, color: "text-gray-500"};
        }
    };

    const OutlookIcon = getMarketOutlookInfo(insights.marketOutlook).icon;
    const outlookColor = getMarketOutlookInfo(insights.marketOutlook).color;

    const lastUpdatedDate = format(new Date(insights.lastUpdated), "dd/MM/yyyy");
    const nextUpdateDistance = formatDistanceToNow(new Date(insights.nextUpdated), {
        addSuffix: true,
    });



  return (
    <div className="w-full p-4 space-y-4">
        <div className="flex justify-between items-center">
            <Badge variant="outline">Last updated: {lastUpdatedDate}</Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
                <CardHeader className="flex flex-row space-y-2 pb-2 items-center justify-between">
                    <CardTitle className="text-sm font-medium">Market Outlook</CardTitle>
                    <OutlookIcon className={`h-4 w-4 ${outlookColor}`} />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{insights.marketOutlook}</div>
                    <p className="text-xs text-muted-foreground">
                        Next Update {nextUpdateDistance}
                    </p>
                </CardContent>
            </Card>

             <Card>
                <CardHeader className="flex flex-row space-y-2 pb-2 items-center justify-between">
                    <CardTitle className="text-sm font-medium">Industy Growth</CardTitle>
                    <TrendingUp className={"h-4 w-4 text-muted-foreground"}/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{insights.growthRate.toFixed(1)}%</div>
                    <Progress value={insights.growthRate} className="mt-2" />
                </CardContent>
            </Card>

             <Card>
                <CardHeader className="flex flex-row space-y-2 pb-2 items-center justify-between">
                    <CardTitle className="text-sm font-medium">Demand Level</CardTitle>
                    <BriefcaseIcon className={`h-4 w-4 text-muted-foreground`} />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{insights.demandLevel}</div>
                    <div className={`h-2 w-full rounded-full mt-2 ${getDemandLevelColor(insights.demandLevel)}`} />
                </CardContent>
            </Card>

             <Card>
                <CardHeader className="flex flex-row space-y-2 pb-2 items-center justify-between">
                    <CardTitle className="text-sm font-medium">Top Skills</CardTitle>
                    <Brain className={`h-4 w-4 text-muted-foreground`} />
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-1">
                        {insights.topSkills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>

        </div>
        <div>
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Salary Ranges by Role</CardTitle>
                    <CardDescription>Display minimum, median and maximum salaries (in thousands)</CardDescription> 
                </CardHeader>
                <CardContent>
                    <div className="h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={salaryData}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip content={({active, payload, label}) => {
                                    if(active && payload && payload.length) {
                                        return (
                                            <div className="bg-background border rounded-lg p-2 shadow-md">
                                                <p className="font-medium">{label}</p>
                                                {
                                                    payload.map((item) => (
                                                        <p key={item.name} className="text-sm">
                                                            {item.name}: ${item.value}K
                                                        </p>
                                                    ))
                                                }
                                            </div>
                                        )
                                    }
                                    
                                    return null;
                                }}/>
                                <Bar dataKey="min" fill="#94a3b8" name="Minimum Salary" />
                                <Bar dataKey="median" fill="#64748b" name="Median Salary" />
                                <Bar dataKey="max" fill="#475569" name="Maximum Salary" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </div>

        <div className="grid gird-cols-1 md:grid-cols-2 gap-4">
            <Card>
                <CardHeader>
                    <CardTitle>Key Industry Trends</CardTitle>
                    <CardDescription>
                        Current trends shaping the industry
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {insights.keyTrends.map((trend, index) => (
                            <li key={index} className="flex items-start space-x-2">
                                <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                                <span>{trend}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Recommended Skills</CardTitle>
                    <CardDescription>
                        Skills to focus on for career growth
                    </CardDescription> 
                </CardHeader>
                <CardContent>
                    {insights.recommendedSkills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs mr-2 mb-2">
                            {skill}
                        </Badge>
                    ))}
                </CardContent>
            </Card>

        </div>
    </div>
  )
}

export default DashboardView