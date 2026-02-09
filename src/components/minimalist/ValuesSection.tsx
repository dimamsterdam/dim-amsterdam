
import { Smile, Zap, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useEffect, useRef } from "react";

const ValuesSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.5 }
    );
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    const startAnimation = () => {
      const title = titleRef.current;
      if (!title) return;
      
      // Split the title into individual words
      const words = title.textContent?.split(". ") || [];
      
      // Clear the original text content
      title.textContent = "";
      
      // Create spans for each word
      const wordSpans: HTMLSpanElement[] = [];
      words.forEach((word, index) => {
        const wordSpan = document.createElement("span");
        wordSpan.textContent = word + (index < words.length - 1 ? ". " : "");
        wordSpan.className = "transition-colors duration-500 inline-block";
        wordSpan.style.opacity = "1";
        title.appendChild(wordSpan);
        wordSpans.push(wordSpan);
      });
      
      // Highlight each word one at a time
      wordSpans.forEach((span, index) => {
        setTimeout(() => {
          // Reset previous word color
          if (index > 0) {
            wordSpans[index - 1].style.color = "";
          }
          
          // Highlight current word
          span.style.color = "#F97316";
          
          // Reset last word after all words have been highlighted
          if (index === wordSpans.length - 1) {
            setTimeout(() => {
              span.style.color = "";
            }, 800);
          }
        }, 500 + index * 800);
      });
    };
    
    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fade-in">
          <h2 ref={titleRef} className="text-3xl font-bold mb-4">Positief. Scherp. Betrokken.</h2>
          <p className="text-gray-600">Een traject is geslaagd als gezamenlijke doelen helder zijn en spanningen op een positieve manier bespreekbaar worden gemaakt.</p>
        </AnimatedSection>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-stretch gap-6">
            <AnimatedSection className="flex flex-1 bg-white p-6 rounded-lg border border-gray-100" animation="fade-in" delay={0}>
              <div className="flex">
                <Smile className="h-5 w-5 text-[#F97316] flex-shrink-0 mr-3 mt-1" />
                <div>
                  <h4 className="text-gray-800 mb-2 font-bold">Positief</h4>
                  <p className="text-gray-700">Veranderen en ontwikkelen begint bij weten en waarderen wat goed gaat. Vanuit zelfvertrouwen ontstaat ruimte om ook kritisch te kijken naar wat beter kan en wat beter moet.</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="flex flex-1 bg-white p-6 rounded-lg border border-gray-100" animation="fade-in" delay={0.1}>
              <div className="flex">
                <Zap className="h-5 w-5 text-[#F97316] flex-shrink-0 mr-3 mt-1" />
                <div>
                  <h4 className="text-gray-800 mb-2 font-bold">Scherp</h4>
                  <p className="text-gray-700">Leren en ontwikkelen vraagt ander gedrag en het doorbreken van bestaande patronen. Met ruim 25 jaar ervaring weten wij spanningen snel te herkennen en effectief bespreekbaar te maken.</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="flex flex-1 bg-white p-6 rounded-lg border border-gray-100" animation="fade-in" delay={0.2}>
              <div className="flex">
                <Heart className="h-5 w-5 text-[#F97316] flex-shrink-0 mr-3 mt-1" />
                <div>
                  <h4 className="text-gray-800 mb-2 font-bold">Betrokken</h4>
                  <p className="text-gray-700">Wij werken aan ontwikkelingen waar we in geloven, met vooruitstrevende collega's en opdrachtgevers waar we een klik mee hebben. Dit geeft energie om ook weerbarstige processen te doorbreken.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>;
};

export default ValuesSection;
