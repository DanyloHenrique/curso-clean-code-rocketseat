import { ReactNode } from "react";

/*  
    INPUT com 4 configurações criadas: label, leftIcon, icon e errorMessage
    São coisas que podem ser ou não passadas por parametro
*/

interface InputProps {
  label?: string;
  leftIcon?: ReactNode;
  icon?: ReactNode;
  errorMessage?: string;
}

export default function InputOld({
  label,
  icon = null,
  leftIcon = null,
  errorMessage,
}: InputProps) {
  return (
    <div>
      {label ? <label>{label}</label> : null}
      {leftIcon}
      <input type="text" />
      {icon}

      {errorMessage ? <p>{errorMessage}</p> : null}
    </div>
  );
}
