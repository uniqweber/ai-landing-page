import React from "react";
import ButtonSvg from "../../assets/images/svg/ButtonSvg";
import ButtonGradient from "../../assets/images/svg/ButtonGradient";

const Button = ({className, href, onClick, children, px, white}) => {
  const classes = `button relative  items-center justify-center h-11 transition-colors hover:text-1 ${px || "px-7"} ${
    white ? "text-n-8" : "text-n-1"
  } ${className && className}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
