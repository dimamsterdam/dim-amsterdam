
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  color: string;
}

const TestimonialsGallery = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "DIM's cultural transformation program has been a game-changer for our organization. Our employee engagement scores have increased by 32% and we've seen tangible improvements in collaboration across departments.",
      author: "Sarah Johnson",
      role: "Chief People Officer",
      company: "TechVision Inc.",
      initials: "SJ",
      color: "bg-blue-500/20"
    },
    {
      quote: "Working with DIM has transformed how our leadership team operates. We're more aligned, more effective, and more purpose-driven than ever before. The impact on our business results has been remarkable.",
      author: "Michael Chen",
      role: "CEO",
      company: "Ascend Group",
      initials: "MC",
      color: "bg-emerald-500/20"
    },
    {
      quote: "The insights and frameworks DIM brought to our organization have fundamentally changed how we approach culture. They didn't just provide recommendations – they partnered with us every step of the way.",
      author: "Emma Williams",
      role: "VP of Organizational Development",
      company: "Horizon Healthcare",
      initials: "EW",
      color: "bg-indigo-500/20"
    },
    {
      quote: "The team at DIM helped us navigate a complex merger with empathy and precision. Their cultural integration roadmap became our north star, and we couldn't be happier with the results.",
      author: "Thomas Rodriguez",
      role: "Director of HR",
      company: "Global Systems",
      initials: "TR",
      color: "bg-purple-500/20"
    },
    {
      quote: "We were facing a retention crisis before DIM stepped in. Their diagnostic approach helped us identify blind spots in our culture, and their actionable recommendations have transformed our workplace.",
      author: "Aisha Patel",
      role: "COO",
      company: "Innovate Digital",
      initials: "AP",
      color: "bg-amber-500/20"
    }
  ];

  const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="h-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 md:p-8 shadow-lg h-full flex flex-col relative"
      >
        <Quote className="h-10 w-10 text-primary/60 mb-4" />
        
        <blockquote className="text-lg md:text-xl font-medium text-zinc-200 flex-grow mb-6 leading-relaxed relative" contentEditable>
          <span className="relative z-10">"{testimonial.quote}"</span>
          <div className="absolute -left-6 -top-6 w-12 h-12 bg-primary/10 rounded-full opacity-30 -z-10"></div>
        </blockquote>
        
        <div className="flex items-center mt-auto">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-primary ${testimonial.color} mr-4`}>
            <span className="text-lg font-bold">{testimonial.initials}</span>
          </div>
          <div>
            <p className="font-semibold text-white">{testimonial.author}</p>
            <p className="text-zinc-400">{testimonial.role}, {testimonial.company}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div className="w-full px-4 md:px-0">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3">
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="flex justify-end gap-2 mt-6">
          <CarouselPrevious className="relative static left-0 right-auto translate-y-0 bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white" />
          <CarouselNext className="relative static right-0 left-auto translate-y-0 bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white" />
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialsGallery;
