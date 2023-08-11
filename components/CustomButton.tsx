import React, { ReactNode } from 'react';

interface CustomButtonProps {
  outlined?: boolean;
  children: ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ outlined, children }) => {
  // Determine the button's background color and border color based on the outlined prop
  const bgColor = outlined ? 'bg-white' : 'bg-[#75A843]';
  const borderColor = outlined ? 'border-[#75A843]' : '';

  // Common styles for the button
  const commonStyles = 'px-4 py-2 text-white rounded-[1.4rem] text-center flex items-center justify-center';

  // Combine the common styles with the background and border colors
  const buttonStyles = `${commonStyles} ${bgColor} ${borderColor}`;

  return (
    <button className={buttonStyles}>
      {children}
    </button>
  );
};

export default CustomButton;
