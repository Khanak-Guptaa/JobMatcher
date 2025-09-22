import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InternshipForm from "@/components/InternshipForm";
import InternshipResults from "@/components/InternshipResults";
import CompanyPartners from "@/components/CompanyPartners";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <InternshipForm />
        <InternshipResults />
        <CompanyPartners />
      </main>
      
      <footer className="bg-muted/50 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              InternAI
            </div>
            <p className="text-muted-foreground mb-4">
              AI-powered internship recommendations for your career growth
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 InternAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;