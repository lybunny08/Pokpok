import React from 'react';

function ButtonComponents({ 
  text = "Shop sale",
  onClick = () => {},
  className = "",
  bgColor = "white",
  borderColor = "white",
  textColor = "black",
  hoverBgColor = "black",
  hoverTextColor = "white",
  disabled = false
}) {
  // Styles inline pour les couleurs personnalisées
  const inlineStyles = {
    backgroundColor: disabled ? '#e5e7eb' : bgColor,
    borderColor: disabled ? '#d1d5db' : borderColor,
    color: disabled ? '#9ca3af' : textColor,
    borderWidth: '1px',
    borderStyle: 'solid'
  };

  // Classes Tailwind fixes
  const baseClasses = `
    rounded-full py-[16px] px-[42px] lg:py-[8px] text-center lg:text-[12px] 
    font-medium transition-all duration-300 border
    ${disabled 
      ? 'opacity-70 cursor-not-allowed' 
      : 'cursor-pointer hover:opacity-90 active:scale-95'
    }
    ${className}
  `;

  // Gestionnaire de clic avec prévention si désactivé
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      style={inlineStyles}
      className={baseClasses.trim()}
      aria-disabled={disabled}
    >
      {text}
    </button>
  );
}

export default ButtonComponents;