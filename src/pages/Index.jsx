import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  // Mock data (replace with actual data from your backend)
  const student = {
    name: "John Doe",
    avatar: "https://github.com/shadcn.png",
    level: 5,
    completedTracks: 3,
    totalTracks: 10,
    badgesCount: 5
  };

  const sqlLearningTracks = [
    { id: 1, title: "SQL Basics", progress: 80 },
    { id: 2, title: "Advanced Queries", progress: 50 },
    { id: 3, title: "Database Design", progress: 30 },
    { id: 4, title: "SQL Optimization", progress: 0 },
  ];

  const challenges = [
    { id: 1, title: "Data Manipulation Challenge", difficulty: "Easy" },
    { id: 2, title: "Complex Joins Puzzle", difficulty: "Medium" },
    { id: 3, title: "Performance Optimization Quest", difficulty: "Hard" },
    { id: 4, title: "Subquery Mastery", difficulty: "Medium" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={student.avatar} alt={student.name} />
                <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold">Welcome, {student.name}!</h1>
                <p className="text-gray-600">Level {student.level} SQL Sage</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">{student.badgesCount} Badges Earned</p>
              <div className="flex items-center mt-2">
                <Progress value={(student.completedTracks / student.totalTracks) * 100} className="w-64 mr-4" />
                <span>{student.completedTracks}/{student.totalTracks} tracks completed</span>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">SQL Learning Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sqlLearningTracks.map((track) => (
              <Card key={track.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{track.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={track.progress} className="mt-2" />
                  <p className="text-sm text-gray-600 mt-2">{track.progress}% complete</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">SQL Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge) => (
              <Card key={challenge.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{challenge.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant={challenge.difficulty === "Easy" ? "success" : challenge.difficulty === "Medium" ? "warning" : "destructive"}>
                    {challenge.difficulty}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
