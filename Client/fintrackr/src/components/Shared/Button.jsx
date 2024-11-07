const Button = ({ children, variant = "primary", className = "" }) => {
  const baseStyle = "px-4 py-2 font-semibold rounded ";

  const variantStyles = {
    primary: "bg-secondary text-white hover:bg-btn-color",
    secondary: "bg-customBtn text-secondary text-white hover:bg-gray-700",
  };

  return (
    <button className={`${baseStyle} ${variantStyles[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
