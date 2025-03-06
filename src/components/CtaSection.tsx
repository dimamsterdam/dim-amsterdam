import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
const CtaSection = () => {
  return <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-primary">
          {/* Background gradient decorations */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-t from-purple-800/20 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative z-10 px-6 py-16 md:py-24 md:px-16 text-center md:text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <AnimatedSection animation="slide-from-left">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">Meer weten over DIM?</h2>
                <p className="text-lg text-primary-foreground/80 mb-8 max-w-md">We versturen een nieuwsbrief met kennis en inzichten over verandering in moedige organisaties. </p>
                <Link to="/contact" className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors group">
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </AnimatedSection>
              
              <AnimatedSection className="hidden md:block" animation="slide-from-right">
                <div className="relative">
                  <div className="aspect-square w-full max-w-sm mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h3 className="text-xl font-semibold text-white mb-4">What you'll get:</h3>
                    <ul className="space-y-4">
                      {["A 30-minute discussion with a senior consultant", "Initial assessment of your cultural challenges", "Tailored recommendations for your situation", "Framework for measuring cultural performance"].map((item, idx) => <li key={idx} className="flex items-start text-primary-foreground/90">
                          <svg className="w-5 h-5 text-white mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>{item}</span>
                        </li>)}
                    </ul>
                  </div>
                  
                  {/* Decorative floating elements */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-accent animate-float"></div>
                  <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-purple-500/30 animate-float" style={{
                  animationDelay: "1s"
                }}></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CtaSection;