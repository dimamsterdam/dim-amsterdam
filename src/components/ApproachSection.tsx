import { useState, useRef } from "react";
import AnimatedSection from "./AnimatedSection";
interface ApproachStep {
  title: string;
  description: string;
  icon: string;
}
const ApproachSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const approachSteps: ApproachStep[] = [{
    title: "Discover",
    description: "We begin with a comprehensive cultural assessment to understand your current state, challenges, and aspirations.",
    icon: "🔍"
  }, {
    title: "Design",
    description: "Together, we design a tailored approach to cultural transformation that aligns with your strategic objectives.",
    icon: "✏️"
  }, {
    title: "Develop",
    description: "We build capability across your organization through targeted workshops, coaching, and learning journeys.",
    icon: "🌱"
  }, {
    title: "Deploy",
    description: "Implementation of new practices and behaviors through intentional change management and leadership actions.",
    icon: "🚀"
  }, {
    title: "Sustain",
    description: "We establish measurement frameworks and feedback loops to ensure lasting cultural change and continuous improvement.",
    icon: "♻️"
  }];
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
  return <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-0 w-96 h-96 rounded-full bg-accent/20 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm px-3 py-1 rounded-full bg-primary/10 text-primary font-medium mb-4">Waar we voor staan</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            A systematic journey to cultural excellence
          </h2>
          <p className="text-lg text-muted-foreground">
            Our proven methodology adapts to your unique context while ensuring consistent, measurable results.
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="mb-16">
          <div ref={timelineRef} className="flex space-x-4 md:space-x-0 md:justify-between overflow-x-auto md:overflow-visible py-6 md:px-8 -mx-4 md:mx-0 scrollbar-hide">
            {approachSteps.map((step, index) => <button key={index} onClick={() => handleStepClick(index)} className={`timeline-step flex flex-col items-center flex-shrink-0 w-28 md:w-auto px-2 transition-all duration-300 ${selectedIndex === index ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}>
                <div className={`relative z-10 w-14 h-14 flex items-center justify-center rounded-full mb-3 text-lg transition-all duration-300 ${selectedIndex === index ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-accent text-accent-foreground'}`}>
                  <span>{step.icon}</span>
                </div>
                
                <p className={`font-medium text-sm md:text-base transition-colors duration-300 ${selectedIndex === index ? 'text-primary' : 'text-muted-foreground'}`}>
                  {step.title}
                </p>
                
                {/* Connection line - visible only on md screens and up */}
                {index < approachSteps.length - 1 && <div className="hidden md:block absolute h-[2px] bg-border top-6 left-[calc(50%+2rem)] right-[calc(50%+2rem)] -z-0">
                    <div className="absolute h-full bg-primary transition-all duration-500 ease-out" style={{
                width: selectedIndex > index ? '100%' : '0%',
                left: 0
              }}></div>
                  </div>}
              </button>)}
          </div>
        </div>

        {/* Selected step details */}
        <AnimatedSection key={selectedIndex} className="max-w-3xl mx-auto bg-accent/30 rounded-xl p-8 md:p-10 border border-accent" animation="scale-in">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-16 h-16 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
              {approachSteps[selectedIndex].icon}
            </div>
            <div>
              <h3 className="text-2xl font-display font-semibold mb-4">{approachSteps[selectedIndex].title}</h3>
              <p className="text-muted-foreground text-lg">{approachSteps[selectedIndex].description}</p>
              
              {selectedIndex === 0 && <div className="mt-6 space-y-3">
                  <p className="font-medium">Key activities include:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Cultural diagnostic assessment</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Leadership interviews and alignment workshops</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Employee focus groups and engagement analysis</span>
                    </li>
                  </ul>
                </div>}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>;
};
export default ApproachSection;