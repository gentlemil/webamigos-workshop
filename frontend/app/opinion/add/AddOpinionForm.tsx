'use client';

import { Button, Input } from '@wa/common-ui';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { api } from '../../config/api';

const validationSchema = z.object({
  name: z.string().min(1, 'Field is required'),
  email: z.string().email('Invalid email address'),
  content: z.string().min(1).max(512),
});

type FormValues = z.infer<typeof validationSchema>;

export const AddOpinionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
  });

  const sendForm: SubmitHandler<FormValues> = (data) => {
    api.post('/api/opinions', data);
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(sendForm)}>
      <Input label="Name" {...register('name')} error={errors.name} />
      <Input label="E-mail" {...register('email')} error={errors.email} />
      <Input label="Opinion" {...register('content')} error={errors.content} />
      <Button label="Submit" type="submit" />
    </form>
  );
};
