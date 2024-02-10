import { UseFormRegister, RegisterOptions } from 'react-hook-form';
import { FormData } from '@/types/contact';

type Props = {
  label: string;
  id: 'message';
  register: UseFormRegister<FormData>;
  error?: string;
  options?: RegisterOptions;
  placeholder: string;
};

export default function TextArea(props: Props) {
  const { label, id, register, error, options, placeholder } = props;
  return (
    <div className='relative'>
      <textarea
        id={id}
        {...register(id, options)}
        className='w-full bg-inherit border outline-none peer placeholder-transparent placeholder-shown:mt-0 mt-2 text-white border-gray focus-visible:border-purple p-2'
        placeholder={placeholder}
      ></textarea>
      <label
        htmlFor={id}
        className={`capitalize absolute left-2 transition-all peer-placeholder-shown:top-2 peer-focus:-top-3.5  duration-300 text-base -top-3.5 bg-body peer-focus-visible:text-purple`}
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
