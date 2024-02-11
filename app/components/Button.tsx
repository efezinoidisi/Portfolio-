'use client';

import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  styles?: string;
  disabled?: boolean;
};

export default function Button(props: ButtonProps) {
  const { children, handleClick = () => {}, styles = '', ...others } = props;
  return (
    <button onClick={handleClick} className={`${styles}`} {...others}>
      {children}
    </button>
  );
}
