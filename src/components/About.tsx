import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
  <div className="space-y-4 text-lg text-muted-foreground">
  <p>
    Hi, I’m <span className="text-primary font-semibold">Amit Kumar</span> —  a passionate Frontend & Webflow Developer with over 4 years of experience crafting digital experiences that are both user-friendly and results-driven.
  </p>
  <p>
    I specialize in design tools like <strong>Figma</strong> and <strong>Webflow</strong>, and also bring websites to life using <strong>WordPress</strong>, <strong>Wix</strong>, <strong>React</strong>, and <strong>Next.js</strong>. From no-code builds to fully custom applications, I bridge the gap between design and development.
  </p>
  <p>
    Whether it's creating intuitive interfaces or developing high-performance web apps, I’m passionate about delivering end-to-end solutions. Outside of work, I love exploring new tech, staying ahead of design trends, and mentoring aspiring creatives.
  </p>
</div>


            {/* <Button variant="hero" size="lg" className="mt-8">
              {/* <Download className="h-4 w-4 mr-2" />
              Download Resume 
            </Button> */}
          </div>
          
          <div className="space-y-6">
            <Card className="group border-0 bg-gradient-card backdrop-blur-xl hover:shadow-premium transition-all duration-500 hover:scale-105 cursor-pointer">
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
                  <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Projects Completed</div>
                </div>
                <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />
              </CardContent>
            </Card>
            
            <Card className="group border-0 bg-gradient-card backdrop-blur-xl hover:shadow-premium transition-all duration-500 hover:scale-105 cursor-pointer">
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">4+</div>
                  <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Years Experience</div>
                </div>
                <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-accent rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />
              </CardContent>
            </Card>
            
            <Card className="group border-0 bg-gradient-card backdrop-blur-xl hover:shadow-premium transition-all duration-500 hover:scale-105 cursor-pointer">
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">20+</div>
                  <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Happy Clients</div>
                </div>
                <div className="absolute top-2 right-2 w-16 h-16 bg-gradient-hero rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;