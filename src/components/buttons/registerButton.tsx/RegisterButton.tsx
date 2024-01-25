import React, { MouseEventHandler } from 'react';

type ButtonProps = {
  type?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

function RegisterButton({ type, onClick, children }: ButtonProps) {
  return (
    <button
      type={type}
      className="h-50 w-full text-center bg-green rounded-[5px] text-[17px] text-white"
      onClick={onClick}>
      {children}
    </button>
  );
}
export default RegisterButton;
