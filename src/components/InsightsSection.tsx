import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
interface InsightCard {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  slug: string;
  date: string;
}
const InsightsSection = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const insights: InsightCard[] = [{
    title: "How purpose-driven cultures drive innovation and market growth",
    excerpt: "Discover how organizations with strong purpose-driven cultures outperform their competitors in innovation and market share.",
    category: "Klant case",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3",
    slug: "/insights/purpose-driven-cultures",
    date: "May 12, 2023"
  }, {
    title: "The leadership behaviors that transform organizational culture",
    excerpt: "Explore the key leadership behaviors that have the greatest impact on shaping culture and driving performance.",
    category: "Klant case",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3",
    slug: "/insights/leadership-behaviors",
    date: "July 23, 2023"
  }, {
    title: "Measuring cultural transformation: Key metrics and frameworks",
    excerpt: "Learn how to effectively measure and track cultural change using proven metrics and comprehensive frameworks.",
    category: "Klant case",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3",
    slug: "/insights/measuring-cultural-transformation",
    date: "September 5, 2023"
  }];
  return <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Thought leadership & insights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our latest thinking on cultural transformation, leadership development, and organizational excellence.
            </p>
          </div>
          <Link to="/insights" className="group hidden md:flex items-center text-primary font-medium mt-6 md:mt-0 hover:text-primary/80 transition-colors">
            <span>Meer klant cases</span>
            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {insights.map((insight, index) => <AnimatedSection key={index} className="relative h-full" animation="blur-in" delay={index * 0.1}>
              <Link to={insight.slug} className="block h-full" onMouseEnter={() => setHoverIndex(index)} onMouseLeave={() => setHoverIndex(null)}>
                <div className={`h-full rounded-xl overflow-hidden border transition-all duration-300 ${hoverIndex === index ? 'border-primary shadow-lg' : 'border-border'}`}>
                  <div className="aspect-video overflow-hidden">
                    <img src={insight.image} alt={insight.title} className={`w-full h-full object-cover transition-transform duration-700 ${hoverIndex === index ? 'scale-110' : 'scale-100'}`} />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground font-medium">
                        {insight.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {insight.date}
                      </span>
                    </div>
                    <h3 className={`text-xl font-display font-semibold mb-3 transition-colors duration-300 ${hoverIndex === index ? 'text-primary' : ''}`}>
                      {insight.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {insight.excerpt}
                    </p>
                    <div className={`flex items-center mt-4 text-primary transition-all duration-300 ${hoverIndex === index ? 'opacity-100' : 'opacity-70'}`}>
                      <span className="font-medium">Read more</span>
                      <ArrowRight className={`ml-2 w-4 h-4 transition-transform duration-300 ${hoverIndex === index ? 'translate-x-1' : ''}`} />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>)}
        </div>

        <div className="flex justify-center mt-10 md:hidden">
          <Link to="/insights" className="btn-primary">
            View All Insights
          </Link>
        </div>
      </div>
    </section>;
};
export default InsightsSection;