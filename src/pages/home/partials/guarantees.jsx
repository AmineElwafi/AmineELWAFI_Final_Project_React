import React from 'react';
import { Instagram } from 'lucide-react';

const FeatureItem = ({ title, description }) => (
  <div className="flex-1 px-8 text-center">
    <h3 className="text-lg font-medium text-gray-800 mb-2 uppercase tracking-wide">
      {title}
    </h3>
    <p className="text-sm text-gray-500 italic font-light">
      {description}
    </p>
  </div>
);

const VerticalDivider = () => (
  <div className="hidden md:block w-px h-24 bg-gray-200 self-center" />
);

const Guarantees = () => {
  const features = [
    {
      title: "Free Delivery Worldwide",
      description: "Mirum est notare quam littera gothica"
    },
    {
      title: "30 Days Return",
      description: "Simply return it within 30 days for an exchange."
    },
    {
      title: "Store Opening",
      description: "Shop open from Monday to Sunday"
    }
  ];

  return (
    <div className="w-full bg-white py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto text-center mb-24">
        <div className="flex items-center justify-center gap-2 group cursor-pointer">
          <Instagram className="w-6 h-6 text-gray-900" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-tighter">
            Follow us on Instagram
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-stretch gap-8 md:gap-0">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <FeatureItem 
              title={feature.title} 
              description={feature.description} 
            />
            {index < features.length - 1 && <VerticalDivider />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Guarantees;