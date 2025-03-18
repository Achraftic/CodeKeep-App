import { cn } from "@/lib/utils";
import React from "react";
import { BiWorld } from "react-icons/bi";
import { IoIosFolderOpen } from "react-icons/io";
import { MdOutlineBolt } from "react-icons/md";

const features = [
    {
      icon: <MdOutlineBolt />,
      title: "Fast & Secure",
      description: "Lightning-fast access to your snippets with encrypted storage.",
    },
    {
      icon: <IoIosFolderOpen />,
      title: "Organized Workflow",
      description: "Create folders & tags to keep your code structured and searchable.",
    },
    {
      icon: <BiWorld />,
      title: "Access Anywhere",
      description: "Your snippets sync across all devices—desktop, mobile & cloud.",
    },
  ];
const Feature = () => {
    
    return (
        
        <div className="my-18">
            <h1 className="font-semibold text-3xl my-7">Why Choose Us ?</h1>
            <div className="grid grid-cols-3  gap-6">

          
        {features.map((feature, index) => ( 
            <FeatureCard key={index} index={index}  {...feature}  />
        ))}
            
            </div>
        </div>
    );
}

const FeatureCard=({icon,title,description,index}:{icon:React.JSX.Element,title:string,description:string,index:number})=>{
    return( <div className={cn("flex flex-col gap-1  p-4 rounded-xl",index===0 && "bg-muted-foreground/70")}>
        <span className="text-3xl mb-3 text-primary"> {icon}</span>
        <h3 className="font-semibold text-xl"> {title}</h3>
        <p className="text-foreground/60 max-w-sm">
         {description}
        </p>
      </div>)
}

export default Feature;
