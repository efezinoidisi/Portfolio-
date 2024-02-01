import { UseFormRegister, RegisterOptions } from 'react-hook-form';
import { FormData } from '@/types/contact';

type InputProps = {
  type?: string;
  label: string;
  id: 'from_name' | 'from_email';
  register: UseFormRegister<FormData>;
  error?: string;
  options?: RegisterOptions;
  placeholder?: string;
};

export default function Input(props: InputProps) {
  const {
    type = 'text',
    label,
    id,
    register,
    error,
    options,
    placeholder,
  } = props;
  return (
    <div className='relative py-4 w-full'>
      <input
        className={`w-full h-full
           focus:outline-none peer bg-inherit border-b  text-white placeholder-transparent border-gray focus-visible:border-purple`}
        type={type}
        id={id}
        {...register(id, options)}
        placeholder={placeholder}
        aria-invalid={error ? true : false}
      />
      <label
        htmlFor={id}
        className={`capitalize absolute left-0 transition-all peer-placeholder-shown:top-2 peer-focus:-top-3.5  duration-300 text-base peer-focus-visible:text-purple -top-3.5`}
      >
        {label}
      </label>
      {error && (
        <p role='alert' className='text-red-500 text-xs pt-1'>
          {error}
        </p>
      )}
    </div>
  );
}
