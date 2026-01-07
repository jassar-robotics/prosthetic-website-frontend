import Lottie from 'lottie-react';
import { useState } from 'react';
function BasicInfoButton(icon, heading, description) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="rounded-xl flex gap-3  items-center justify-start"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && (
        <div className="min-w-10 max-w-10 aspect-square">
          <Lottie animationData={icon} className="w-full h-full" loop={isHovered} />
        </div>
      )}

      <div className="flex flex-col justify-start items-start">
        <div className="text-xs text-N500 font-semibold text-start">{heading}</div>
        <div className="text-sm text-N800 font-semibold text-start">{description}</div>
      </div>
    </div>
  );
}

export default BasicInfoButton;
