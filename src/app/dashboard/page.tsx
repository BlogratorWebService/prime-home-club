import Link from "next/link";
import { ArrowRight, BadgePercent, Award, Clock, Star } from "lucide-react";

import { mockUser, mockMember } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

// In a real app, you would get the user from an auth session
const user = mockMember; // Change to `mockUser` to see the non-member view

const MemberDashboard = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-headline">Welcome back, {user.name?.split(" ")[0]}!</h1>
          <p className="text-muted-foreground mt-1">Here's your PrimeHome Club dashboard.</p>
        </div>
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5 text-yellow-500" />
          <span className="font-semibold text-lg">Club Member</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Lifetime Savings</CardTitle>
            <BadgePercent className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$482.50</div>
            <p className="text-xs text-muted-foreground">You're saving big with your membership!</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Services Used</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">in the last 12 months</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Membership Status</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
             <div className="text-2xl font-bold">Active</div>
            <p className="text-xs text-muted-foreground">Renews on Dec 12, {new Date().getFullYear()}</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Mocked upcoming appointment */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg">
                <div className="mb-4 sm:mb-0">
                    <p className="font-semibold">AC Tune-Up</p>
                    <p className="text-sm text-muted-foreground">Tomorrow, June 25, 2024 at 10:00 AM</p>
                    <p className="text-sm text-muted-foreground">Technician: Mike R.</p>
                </div>
                <Button variant="outline">Reschedule or Cancel</Button>
            </div>
             <p className="text-center text-muted-foreground mt-6">No other appointments scheduled. <Link href="/#services" className="text-primary underline">Book a new service</Link>.</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

const NonMemberDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full">
        <Card className="max-w-2xl">
            <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                    <Award className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-3xl">Upgrade to a PrimeHome Club Membership</CardTitle>
                <CardDescription className="text-lg pt-2">
                    You're missing out on exclusive savings and priority service.
                </CardDescription>
            </CardHeader>
            <CardContent className="text-left space-y-3">
                <p>By joining the club, you'll get:</p>
                 <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><span className="font-semibold text-foreground">Up to 20% off</span> all home services</li>
                    <li><span className="font-semibold text-foreground">Priority scheduling</span> to get help faster</li>
                    <li>An <span className="font-semibold text-foreground">annual home safety inspection</span> on us</li>
                    <li>And much more!</li>
                </ul>
                <div className="pt-4">
                     <Button asChild size="lg" className="w-full bg-destructive hover:bg-destructive/90">
                        <Link href="/join-club">
                            Join Now & Start Saving!
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    </div>
  );
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 min-h-[calc(100vh-15rem)] flex flex-col">
      {user.isMember ? <MemberDashboard /> : <NonMemberDashboard />}
    </div>
  );
}
