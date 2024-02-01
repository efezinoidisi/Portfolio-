'use client';
import { useForm } from 'react-hook-form';
import Input from '../form/Input';
import { FormData } from '@/types/contact';
import TextArea from '../form/TextArea';
import Button from '../Button';
import toast from 'react-hot-toast';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AiOutlineSend } from 'react-icons/ai';
import Loader from '../loader/Loader';

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string;

export default function ContactForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      from_name: '',
      from_email: '',
      message: '',
    },
  });

  const formRef = useRef<null | HTMLFormElement>(null);

  const [isSending, setIsSending] = useState<boolean>(false);

  const onSubmit = handleSubmit(async () => {
    setIsSending(true);
    try {
      const res = await emailjs.sendForm(
        serviceId,
        templateId,
        //@ts-ignore
        formRef.current,
        publicKey
      );
      if (res.status === 200) {
        reset();
        toast.success('Message sent!', {
          position: 'top-center',
        });
      } else {
        toast.error('Failed to send', { position: 'top-center' });
      }
    } catch (error) {
      toast.error('Failed to send', { position: 'top-center' });
    } finally {
      setIsSending(false);
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      ref={formRef}
      className={`w-full flex flex-col gap-2 md:w-1/2 ${
        isSending ? 'opacity-50 ' : ''
      } relative`}
    >
      <Input
        id='from_name'
        register={register}
        label='full Name'
        options={{
          required: {
            value: true,
            message: 'please provide your full name',
          },
          minLength: {
            value: 3,
            message: 'must be at least 3 characters',
          },
        }}
        error={errors?.from_name?.message}
        placeholder='John Smith'
      />

      <Input
        id='from_email'
        register={register}
        label='email'
        options={{
          required: {
            value: true,
            message: 'email is required',
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'please provide a valid email',
          },
        }}
        type='email'
        error={errors?.from_email?.message}
        placeholder='user@example.com'
      />
      <TextArea
        id='message'
        register={register}
        label='message'
        options={{
          required: {
            value: true,
            message: 'message cannot be empty',
          },
          minLength: {
            value: 10,
            message: 'message must be greater than 10 characters',
          },
        }}
        error={errors?.message?.message}
        placeholder={'hello Efezino, I would...'}
      />
      <Button
        styles='flex gap-2 capitalize text-lg border py-2 px-4 w-fit mt-2 items-center btn border-purple rounded-lg disabled:border-gray'
        type='submit'
      >
        send
        <AiOutlineSend />
      </Button>

      {isSending && (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Loader className={'text-9xl animate-spin text-purple'} />
        </div>
      )}
    </form>
  );
}
