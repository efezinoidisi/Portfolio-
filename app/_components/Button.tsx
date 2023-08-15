'use client';

type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  styles?: string;
};

export default function Button(props: ButtonProps) {
  const {
    children,
    type = 'button',
    handleClick = () => {},
    styles = '',
  } = props;
  return (
    <button type={type} onClick={handleClick} className={`${styles}`}>
      {children}
    </button>
  );
}
