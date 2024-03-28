'use client';

import { Button, Input } from '@wa/common-ui';
import { useForm, type SubmitHandler } from 'react-hook-form';

type FormValues = {
  title: string;
  description: string;
  email: string;
};

export const AddOfferForm = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const sendForm: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(sendForm)}>
      <Input label="Title" {...register('title')} />
      <Input label="Description" {...register('description')} />
      <Input label="E-mail" type="email" {...register('email')} />
      <Button label="Submit" type="submit" />
    </form>
  );
};
