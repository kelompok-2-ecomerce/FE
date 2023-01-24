import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  loading?: boolean;
}

const ButtonRegister: FC<ButtonProps> = ({ id, loading, label, ...props }) => {
  return (
    <button
      id={id}
      className="btn bg-[#F5DBC4] border-2 border-[#029664] w-36 text-[#029664] font-bold text-[18px] normal-case tracking-wider "
      // ${
      //   loading && "bg-[#029664] cursor-not-allowed"
      // } `}
      // disabled={loading}
      // {...props}
    >
      {label}
    </button>
  );
};

export default ButtonRegister;
