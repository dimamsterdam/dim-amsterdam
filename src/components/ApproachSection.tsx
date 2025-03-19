
import { useState, useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import { Heart, Zap, Smile } from "lucide-react";

interface ValueItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ApproachSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const values: ValueItem[] = [
    {
      title: "Positief",
      description: "We geloven in het benadrukken van sterke punten en mogelijkheden, terwijl we constructief omgaan met uitdagingen.",
      icon: <Smile className="text-white" />
    }, 
    {
      title: "Scherp",
      description: "We streven naar duidelijkheid en precisie, door complexe situaties te analyseren en tot de kern te komen.",
      icon: <Zap className="text-white" />
    }, 
    {
      title: "Betrokken",
      description: "We bouwen authentieke relaties op door actief te luisteren en ons volledig in te zetten voor het succes van onze klanten.",
      icon: <Heart className="text-white" />
    }
  ];

  const handleStepClick = (index: number) => {
    setSelectedIndex(index);

    // Smooth scroll on mobile to ensure the selected step is visible
    if (window.innerWidth < 768 && timelineRef.current) {
      const stepElements = timelineRef.current.querySelectorAll('.timeline-step');
      if (stepElements[index]) {
        timelineRef.current.scrollLeft = stepElements[index].getBoundingClientRect().left + timelineRef.current.scrollLeft - timelineRef.current.getBoundingClientRect().left - window.innerWidth / 2 + stepElements[index].getBoundingClientRect().width / 2;
      }
    }
  };

  return <section className="section-padding bg-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-0 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm px-3 py-1 rounded-full bg-primary/10 text-primary font-medium mb-4">Waar we voor staan</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Positief. Scherp. Betrokken.</h2>
          <p className="text-lg text-muted-foreground">"Een traject is geslaagd als gezamenlijke doelen helder zijn en spanningen op een positieve manier bespreekbaar worden gemaakt. Als er gelachen wordt zonder confrontatie uit de weg te gaan kan iedereen groeien. En worden de mooiste resultaten geboekt."</p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="mb-16 flex justify-center">
          <div ref={timelineRef} className="flex space-x-12 md:space-x-24 overflow-x-auto md:overflow-visible py-6 px-8 scrollbar-hide max-w-3xl mx-auto">
            {values.map((value, index) => (
              <button 
                key={index} 
                onClick={() => handleStepClick(index)} 
                className={`timeline-step flex flex-col items-center flex-shrink-0 w-28 md:w-auto px-2 transition-all duration-300 ${selectedIndex === index ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
              >
                <div className={`relative z-10 w-14 h-14 flex items-center justify-center rounded-full mb-3 text-lg transition-all duration-300 ${selectedIndex === index ? 'bg-[#F97316] text-white shadow-lg shadow-[#F97316]/20' : 'bg-gray-300 text-gray-600'}`}>
                  {value.icon}
                </div>
                
                <p className={`font-medium text-sm md:text-base transition-colors duration-300 ${selectedIndex === index ? 'text-[#F97316]' : 'text-gray-600'}`}>
                  {value.title}
                </p>
                
                {/* Connection line - visible only on md screens and up */}
                {index < values.length - 1 && (
                  <div className="hidden md:block absolute h-[2px] bg-gray-200 top-6 left-[calc(50%+3rem)] right-[calc(50%+3rem)] -z-0">
                    <div 
                      className="absolute h-full bg-[#F97316] transition-all duration-500 ease-out" 
                      style={{
                        width: selectedIndex > index ? '100%' : '0%',
                        left: 0
                      }}
                    ></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Selected value details */}
        <AnimatedSection key={selectedIndex} className="max-w-3xl mx-auto bg-accent/30 rounded-xl p-8 md:p-10 border border-accent" animation="scale-in">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-16 h-16 flex-shrink-0 rounded-full bg-[#F97316] flex items-center justify-center text-white text-2xl">
              {values[selectedIndex].icon}
            </div>
            <div>
              <h3 className="text-2xl font-display font-semibold mb-4">{values[selectedIndex].title}</h3>
              <p className="text-muted-foreground text-lg">{values[selectedIndex].description}</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>;
};

export default ApproachSection;
