import { Link } from "react-router-dom";

const FeatureCard = ({ title, description, icon, linkTo }) => {
  return (
    <Link to={linkTo} className="bg-[#0d0d0d] rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center">
          <img src={icon} alt={title} className="w-full h-full object-contain" />
        </div>
        <div>
          <h2 className="text-white text-lg font-bold">{title}</h2>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
