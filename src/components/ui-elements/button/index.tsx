import { ButtonHTMLAttributes } from "react";

const Button = (
  props: IButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { className, children, ...restProps } = props;

  return (
    <button
      {...restProps}
      className={`border-slate-800 border-2 font-bold hover:text-white duration-300 ease-in-out hover:bg-slate-800 rounded-full px-2 py-1 ${
        className ?? ""
      }`}
    >
      {children}
    </button>
  );
};

interface IButtonProps {
  children: string;
}

export default Button;
