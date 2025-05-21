import FeatureCard from "./FeatureCard";
import { Users, Search, Bot, BookOpen, MapPin } from "lucide-react";
const FeatureSection = () => {
    const features = [
        {
            id: 1,
            title: "Virtual Study Rooms",
            description: "Create your own real-time study room with friends",
            Icon: Users,
            bgColor: "from-purple-700 via-indigo-800 to-blue-700",
            linkTo: "/studyroom",
        },
        {
            id: 2,
            title: "Study Group Matchmaking",
            description: "Join others' study rooms based on subjects & goals",
            Icon: Search ,
            bgColor: "from-pink-600 via-purple-600 to-indigo-700",
            linkTo: "/matchmaking",
        },
        {
            id: 3,
            title: "AI Doubt Assistant",
            description: "Get instant answers to study questions using AI",
            Icon: Bot,
            bgColor: "from-indigo-700 via-purple-700 to-fuchsia-600", 
            linkTo: "/ai-assistant",
        },
        {
            id: 4,
            title: "Notes & PYQs Hub",
            description: "Access and share class notes & previous year questions",
            Icon: BookOpen,
            bgColor: "from-blue-600 via-indigo-700 to-purple-700",
            linkTo: "/notes-pyqs",
        },
        {
            id: 5,
            title: "Nearby Study Buddies",
            description: "Find offline study partners or sessions near you via maps",
            Icon: MapPin,
            bgColor: "from-fuchsia-700 via-purple-700 to-indigo-800",
            linkTo: "/nearby-buddies",
        },
    ];
    
   return (
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              
              {features.map((feature) => (
                <FeatureCard 
                    key = {feature.id}
                    title = {feature.title}
                    description = {feature.description}
                    Icon = {feature.Icon}
                    bgColor = {feature.bgColor}
                    linkTo = {feature.linkTo}
                />
              ))}
       </div>
    );
}

export default FeatureSection;
