
import React from "react";
import { cn } from "@/lib/utils";

interface StepCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  number: number;
  title: React.ReactNode;
  children: React.ReactNode;
  variant?: "default" | "highlight";
}

const StepCard = ({ 
  number, 
  title, 
  children, 
  variant = "default", 
  className, 
  ...props 
}: StepCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative",
        className
      )} 
      {...props}
    >
      <div className="flex items-start gap-4">
        {/* Step number with gradient background */}
        <div 
          className={cn(
            "flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md",
            variant === "default" 
              ? "bg-gradient-to-br from-primary to-teal-400" 
              : "bg-gradient-to-br from-[#F97316] to-orange-400"
          )}
        >
          {number}
        </div>
        
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-3 pr-2" contentEditable>{title}</h3>
          <div className="text-muted-foreground" contentEditable>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
