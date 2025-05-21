import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({title, description, Icon, bgColor, linkTo}) => {
    return (
       <div className="p-4 rounded-xl shadow-md" style={{ backgroundColor: bgColor }}>
            <Link to = {linkTo} className="flex item-center gap-2">
                <div className="bg-white p-3 rounded-full w-fit">
                     {Icon && <Icon className="w-6 h-6 text-indigo-600" />}</div>
                <div>
                     <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
                </div>
            </Link>
       </div>
    )
};

export default FeatureCard;