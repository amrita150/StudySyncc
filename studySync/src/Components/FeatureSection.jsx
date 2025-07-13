import aiAssistantIcon from "../assets/icons/ai-assistant.png";
import notesIcon from "../assets/icons/notes.png";
import FeatureCard from "./FeatureCard";

const FeatureSection = () => {
    const features = [
  {
    id: 1,
    title: "AI Doubt Assistant",
    description: "Get instant answers to study questions using AI",
    icon: aiAssistantIcon,
    linkTo: "/ai-doubt",
  },
  {
    id: 2,
    title: "Notes & PYQs Hub",
    description: "Access and share class notes & previous year questions",
    icon: notesIcon,
    linkTo:  "/notes",
  }
]; 
   return (
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              
              {features.map((feature) => (
                <FeatureCard 
                    key = {feature.id}
                    title = {feature.title}
                    description = {feature.description}
                    icon = {feature.icon}
                    linkTo = {feature.linkTo}
                />
              ))}
       </div>
    );
}

export default FeatureSection;
