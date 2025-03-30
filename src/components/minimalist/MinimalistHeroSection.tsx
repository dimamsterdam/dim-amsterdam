
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Users, Lightbulb } from "lucide-react";
import { heroContent } from "@/content/heroContent";
import { useEffect, useRef } from "react";

const MinimalistHeroSection = () => {
  const tagsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (tagsRef.current.length === 0) return;

    const tagElements = tagsRef.current.filter(Boolean) as HTMLAnchorElement[];
    
    let currentIndex = 0;
    const highlightDuration = 5000; // 5 seconds per tag

    const animateTags = () => {
      // Reset all tags
      tagElements.forEach(tag => {
        tag.style.backgroundColor = "";
        tag.style.borderColor = "";
      });

      // Highlight current tag without pulse
      if (tagElements[currentIndex]) {
        const currentTag = tagElements[currentIndex];
        currentTag.style.backgroundColor = "rgba(249, 115, 22, 0.1)";
        currentTag.style.borderColor = "#F97316";
      }

      // Increment index and loop back to start if needed
      currentIndex = (currentIndex + 1) % tagElements.length;
    };

    // Start animation and repeat
    animateTags();
    const intervalId = setInterval(animateTags, highlightDuration);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const getTagIcon = (tag: string) => {
    if (tag === "Organisatieontwikkeling") return Building2;
    if (tag === "Leiderschaps- & Teamontwikkeling") return Users;
    if (tag === "Executive coaching") return Lightbulb;
    return Building2; // Default icon
  };

  return <section className="min-h-screen pt-32 pb-20 flex items-center py-[44px]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="space-y-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {heroContent.tags.map((tag, index) => {
                let tagUrl = "";
                if (tag === "Organisatieontwikkeling") {
                  tagUrl = "/diensten/organisatieontwikkeling";
                } else if (tag === "Leiderschaps- & Teamontwikkeling") {
                  tagUrl = "/diensten/leiderschapsontwikkeling";
                } else if (tag === "Executive coaching") {
                  tagUrl = "/diensten/executive-coaching";
                }
                
                const TagIcon = getTagIcon(tag);
                
                return (
                  <Link 
                    key={index} 
                    to={tagUrl} 
                    ref={el => tagsRef.current[index] = el}
                    className="inline-flex items-center text-sm px-3 py-1 rounded-full bg-gray-50 text-gray-600 font-medium shadow-md transition-all duration-300 hover:bg-gray-100 hover:text-[#F97316] border border-gray-100"
                    style={{ 
                      textShadow: "0px 2px 1px rgba(255,255,255,1)",
                      boxShadow: "0px 2px 3px rgba(0,0,0,0.1), inset 0px 1px 0px rgba(255,255,255,1)"
                    }}
                  >
                    <TagIcon className="h-4 w-4 text-[#F97316] mr-1.5" />
                    <span contentEditable>{tag}</span>
                  </Link>
                );
              })}
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-700 leading-tight" contentEditable>
              Samen creëren we meer maatschappelijke <span className="text-[#F97316]">impact</span> &amp; meer <span className="text-[#F97316]">werkplezier</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg" contentEditable>DIM ondersteunt (top-)leidinggevenden in persoonlijke, team- en organisatieontwikkeling binnen de complexe dynamiek van het publiek domein.</p>
            
            <div className="pt-4">
              <Link to="/contact" className="inline-flex items-center border-b-2 border-primary text-primary font-medium py-1 transition-all hover:border-primary/70 hover:text-primary/70 group">
                <span contentEditable>Neem contact op</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.2,
          duration: 0.5
        }}>
            <div className="aspect-video rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <img src="/lovable-uploads/f7236ec5-17e7-46a7-b551-7cf4b4198147.png" alt="Professional collaboration" className="w-full h-full object-cover" contentEditable />
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default MinimalistHeroSection;
