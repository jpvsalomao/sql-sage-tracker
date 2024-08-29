import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navigation = () => {
  const tracks = useSelector(state => state.tracks.list);
  const userProgress = useSelector(state => state.user.progress);
  const user = useSelector(state => state.user);

  const challenges = [
    { id: 1, title: "Data Manipulation Challenge", difficulty: "Easy" },
    { id: 2, title: "Complex Joins Puzzle", difficulty: "Medium" },
    { id: 3, title: "Performance Optimization Quest", difficulty: "Hard" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={user?.avatar} alt={user?.name} />
                <AvatarFallback>{user?.name?.charAt(0) || 'U'}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold">Welcome, {user?.name || 'User'}!</h1>
                <p className="text-gray-600">Level {user?.level || 1} SQL Sage</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">{user?.badgesCount || 0} Badges Earned</p>
              <div className="flex items-center mt-2">
                <Progress value={((user?.completedTracks || 0) / (user?.totalTracks || 1)) * 100} className="w-64 mr-4" />
                <span>{user?.completedTracks || 0}/{user?.totalTracks || 0} tracks completed</span>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">SQL Learning Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map(track => (
              <Link key={track.id} to={`/track/${track.id}`}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{track.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{track.description}</p>
                    <Progress value={(userProgress[track.id] || 0) * 100} className="mt-2" />
                    <p className="text-sm text-gray-600 mt-2">{Math.round((userProgress[track.id] || 0) * 100)}% complete</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">SQL Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default Navigation;
