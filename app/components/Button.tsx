'use client';

type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  styles?: string;
  disabled?: boolean;
};

export default function Button(props: ButtonProps) {
  const {
    children,
    type = 'button',
    handleClick = () => {},
    styles = '',
    ...others
  } = props;
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${styles}`}
      {...others}
    >
      {children}
    </button>
  );
}
