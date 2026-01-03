import React from 'react';

const button_Variants = {
  primary:
    "bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl cursor-pointer mt-4 transition-all duration-200 active:scale-95",

  secondary:
    "bg-white hover:bg-green-50 text-green-700 font-semibold py-2 px-4 cursor-pointer mt-4 border border-green-600 rounded-xl transition-all duration-200 active:scale-95",

  tertiary:
    "bg-transparent hover:bg-green-600 text-green-700 hover:text-white font-semibold py-2 px-4 border border-green-600 hover:border-green-600 rounded-xl cursor-pointer mt-4 transition-all duration-200 active:scale-95",

  danger:
    "bg-transparent hover:bg-red-600 text-red-600 hover:text-white font-semibold py-2 px-4 border border-red-600 hover:border-red-600 rounded-xl cursor-pointer mt-4 transition-all duration-200 active:scale-95",
};

const button_sizes = {
  small: "text-sm px-3 py-1.5",
  medium: "text-base px-4 py-2",
  large: "text-lg px-6 py-3",
};

function Button({
  title,
  variant = "primary",
  size = "medium",
  onClick = () => {},
}) {
  return (
    <button
      onClick={onClick}
      className={`${button_Variants[variant]} ${button_sizes[size]}`}
    >
      {title}
    </button>
  );
}

export default Button;
