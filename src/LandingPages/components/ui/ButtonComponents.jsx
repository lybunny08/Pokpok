import React from 'react';

function ButtonComponents({ 
  text = "Shop sale",
  onClick = () => {},
  className = "",
  borderColor = "white",
  textColor = "white",
  hoverBgColor = "white",
  hoverTextColor = "black",
  disabled = false
}) {
  const baseClasses = "rounded-full px-[42px] py-[8px] text-center text-[12px] font-medium transition-all duration-300";
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        borderColor: disabled ? '#ccc' : borderColor,
        color: disabled ? '#999' : textColor,
      }}
      className={`
        ${baseClasses}
        border
        ${disabled 
          ? 'opacity-50 cursor-not-allowed' 
          : `hover:bg-${hoverBgColor.replace('#', '')} hover:text-${hoverTextColor.replace('#', '')} cursor-pointer`
        }
        ${className}
      `}
    >
      {text}
    </button>
  );
}

export default ButtonComponents;