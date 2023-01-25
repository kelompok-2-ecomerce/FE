import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  loading?: boolean;
}

const ButtonLogin: FC<ButtonProps> = ({ id, loading, label, ...props }) => {
  return (
    <button
      id={id}
      className={`btn border-[#029664] bg-[#029664] w-36 text-zinc-50 font-bold text-[18px] normal-case tracking-wider ${
        loading && "bg-[#029664] cursor-not-allowed"
      }`}
      disabled={loading}
      {...props}
    >
      {label}
    </button>
  );
};

export default ButtonLogin;
