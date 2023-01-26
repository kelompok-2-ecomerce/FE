import { InputHTMLAttributes } from "react";

interface ProdukEdit extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder: string;
}

function InputEditProduk({ placeholder, id, ...props }: ProdukEdit) {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="input w-full max-w-s"
      {...props}
    />
  );
}
