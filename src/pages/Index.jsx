import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  // Mock data (replace with actual data from your backend)
  const studentName = "John Doe";
  const completedTracks = 3;
  const totalTracks = 10;
  const badgesCount = 5;

  const sqlLearningTracks = [
    { id: 1, title: "SQL Basics", progress: 80 },
    { id: 2, title: "Advanced Queries", progress: 50 },
    { id: 3, title: "Database Design", progress: 30 },
  ];

  const challenges = [
    { id: 1, title: "Data Manipulation Challenge", difficulty: "Easy" },
    { id: 2, title: "Complex Joins Puzzle", difficulty: "Medium" },
    { id: 3, title: "Performance Optimization Quest", difficulty: "Hard" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome, {studentName}!</h1>
          <div className="flex items-center space-x-4">
            <Progress value={(completedTracks / totalTracks) * 100} className="w-64" />
            <span>{completedTracks}/{totalTracks} tracks completed</span>
            <Badge variant="secondary">{badgesCount} Badges Earned</Badge>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">SQL Learning Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sqlLearningTracks.map((track) => (
              <Card key={track.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{track.title}</CardTitle>
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
          <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {challenges.map((challenge) => (
              <Card key={challenge.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{challenge.title}</CardTitle>
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
