import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, Users, Star, ExternalLink } from "lucide-react";

const InternshipResults = () => {
  const internships = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company: "TechStart Solutions",
      location: "Bangalore",
      type: "Remote",
      duration: "6 months",
      stipend: "₹25,000/month",
      rating: 4.8,
      skills: ["React", "Node.js", "MongoDB", "Express"],
      description: "Work on cutting-edge web applications and gain hands-on experience with modern tech stack.",
      applicants: 145,
      match: 95
    },
    {
      id: 2,
      title: "Digital Marketing Intern",
      company: "Growth Marketing Co.",
      location: "Mumbai",
      type: "Hybrid",
      duration: "4 months",
      stipend: "₹18,000/month",
      rating: 4.6,
      skills: ["SEO", "Social Media", "Analytics", "Content"],
      description: "Drive digital campaigns and learn performance marketing strategies.",
      applicants: 89,
      match: 88
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "AI Innovations Lab",
      location: "Hyderabad",
      type: "On-site",
      duration: "5 months",
      stipend: "₹22,000/month",
      rating: 4.9,
      skills: ["Python", "Machine Learning", "SQL", "Tableau"],
      description: "Work on real-world ML projects and build predictive models.",
      applicants: 203,
      match: 92
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Your Recommended Internships</h2>
          <p className="text-xl text-muted-foreground">
            Based on your preferences, here are the best matches for you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {internships.map((internship) => (
            <Card key={internship.id} className="shadow-card hover:shadow-elegant transition-all group">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge 
                    variant="secondary" 
                    className="bg-success/10 text-success hover:bg-success/20"
                  >
                    {internship.match}% Match
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{internship.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {internship.title}
                </CardTitle>
                <p className="text-lg font-semibold text-primary">{internship.company}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground line-clamp-2">
                  {internship.description}
                </p>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{internship.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span>{internship.stipend}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{internship.applicants} applied</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {internship.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-primary hover:shadow-glow transition-all">
                    Apply Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary/40">
            Load More Results
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InternshipResults;