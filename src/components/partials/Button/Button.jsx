import React from "react";
import styles from "./Button.module.css";

const Button = ({
  children,
  onClick,
  theme = "dark",
  disabled,
  style,
  styleClass,
  activeBtn,
}) => {
  return (
    <button
      className={`modalButton ${styles.button} ${
        styleClass ? styleClass : ""
      } ${theme === "dark" ? styles.buttonDark : styles.buttonLight} ${
        activeBtn ? styles.buttonActive : ""
      }`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
