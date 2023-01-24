import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder: string;
}

const Input = ({ placeholder, id, ...props }: Props) => {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="input w-full max-w-xs"
      {...props}
    />
  );
};

export default Input;
