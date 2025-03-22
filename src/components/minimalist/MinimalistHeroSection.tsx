
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const MinimalistHeroSection = () => {
  const [tags, setTags] = useState([
    "Organisatieontwikkeling",
    "Leiderschaps- & Teamontwikkeling",
    "Executive coaching"
  ]);
  
  const [heading, setHeading] = useState("Samen creëren we meer maatschappelijke impact & meer werkplezier");
  const [description, setDescription] = useState("DIM ondersteunt (top-)leidinggevenden in persoonlijke, team- en organisatieontwikkeling binnen de complexe dynamiek van het publiek domein.");
  const [ctaText, setCtaText] = useState("Neem contact op");
  
  const updateTag = (index: number, newTag: string) => {
    const updatedTags = [...tags];
    updatedTags[index] = newTag;
    setTags(updatedTags);
  };

  const tagToRoute = (tag: string) => {
    if (tag === "Organisatieontwikkeling") return "/aanbod/organisatieontwikkeling";
    if (tag === "Leiderschaps- & Teamontwikkeling") return "/aanbod/leiderschapsontwikkeling";
    return "/aanbod/executive-coaching";
  };

  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center py-[44px]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className="space-y-8"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.map((tag, index) => (
                <Link key={index} to={tagToRoute(tag)} className="inline-block text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-[#F97316]">
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => updateTag(index, e.currentTarget.textContent || "")}
                    dangerouslySetInnerHTML={{ __html: tag }}
                  />
                </Link>
              ))}
            </div>

            <h1 
              className="text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-700 leading-tight"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setHeading(e.currentTarget.textContent || "")}
              dangerouslySetInnerHTML={{ __html: heading }}
            />
            
            <p 
              className="text-lg text-gray-600 max-w-lg"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setDescription(e.currentTarget.textContent || "")}
              dangerouslySetInnerHTML={{ __html: description }}
            />
            
            <div className="pt-4">
              <Link to="/contact" className="inline-flex items-center border-b-2 border-primary text-primary font-medium py-1 transition-all hover:border-primary/70 hover:text-primary/70 group">
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => setCtaText(e.currentTarget.textContent || "")}
                  dangerouslySetInnerHTML={{ __html: ctaText }}
                />
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="aspect-video rounded-lg overflow-hidden shadow-sm border border-gray-100">
              <img src="/lovable-uploads/f7236ec5-17e7-46a7-b551-7cf4b4198147.png" alt="Professional collaboration" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MinimalistHeroSection;
