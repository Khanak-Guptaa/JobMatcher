import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, MapPin, Briefcase } from "lucide-react";

const CompanyPartners = () => {
  const companies = [
    {
      name: "TechStart Solutions",
      logo: "🚀",
      industry: "Technology",
      size: "50-200",
      location: "Bangalore",
      openings: 12,
      rating: 4.8,
      description: "Leading software development company specializing in web and mobile applications."
    },
    {
      name: "Growth Marketing Co.",
      logo: "📈",
      industry: "Marketing",
      size: "20-50",
      location: "Mumbai",
      openings: 8,
      rating: 4.6,
      description: "Performance marketing agency helping brands scale their digital presence."
    },
    {
      name: "AI Innovations Lab",
      logo: "🤖",
      industry: "AI/ML",
      size: "100-500",
      location: "Hyderabad",
      openings: 15,
      rating: 4.9,
      description: "Research-focused company building next-generation AI solutions."
    },
    {
      name: "FinTech Pioneers",
      logo: "💰",
      industry: "Finance",
      size: "200-1000",
      location: "Delhi",
      openings: 20,
      rating: 4.7,
      description: "Revolutionary fintech company transforming digital payments and banking."
    },
    {
      name: "Design Studio Pro",
      logo: "🎨",
      industry: "Design",
      size: "10-50",
      location: "Pune",
      openings: 6,
      rating: 4.5,
      description: "Creative design studio crafting beautiful user experiences and brands."
    },
    {
      name: "Data Insights Corp",
      logo: "📊",
      industry: "Analytics",
      size: "50-200",
      location: "Chennai",
      openings: 10,
      rating: 4.8,
      description: "Data analytics company helping businesses make data-driven decisions."
    }
  ];

  return (
    <section id="companies" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Partner Companies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We partner with top companies across industries to bring you the best internship opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all group cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{company.logo}</div>
                    <div>
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {company.name}
                      </h3>
                      <Badge variant="outline" className="mt-1">
                        {company.industry}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{company.openings}</div>
                    <div className="text-xs text-muted-foreground">openings</div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {company.description}
                </p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{company.size} employees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{company.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-muted-foreground" />
                    <span>Rating: {company.rating}/5</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant="secondary" 
                      className="bg-success/10 text-success hover:bg-success/20"
                    >
                      <Briefcase className="h-3 w-3 mr-1" />
                      Hiring Now
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      View Openings →
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to partner with us?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              500+ Partner Companies
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              2000+ Active Internships
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              95% Success Rate
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyPartners;