'use client';

import { Button, Input } from '@wa/common-ui';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { api } from '../../config/api';

const validationSchema = z
  .object({
    title: z
      .string()
      .min(3, 'Title must be at least 3 characters long')
      .max(100, 'Title must be at most 100 characters long'),
    description: z
      .string()
      .min(10, 'Description must be at least 10 characters long')
      .max(1000, 'Description must be at most 1000 characters long'),
    email: z.string().email('Invalid email address'),
    salary_from: z.number().positive('Salary from must be at least 0'),
    salary_to: z.number().positive('Salary to must be at least 0'),
    // salary_to: z.coerce.number().positive('Salary must be at least 0'),
  })
  .refine((data) => data.salary_from < data.salary_to, {
    path: ['salary_to'],
    message: 'Salary to must be greater than salary from',
  });

// type FormValues = {
//   title: string;
//   description: string;
//   email: string;
//   salary_from: number;
//   salary_to: number;
// };

type FormValues = z.infer<typeof validationSchema>;

export const AddOfferForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
  });

  const sendForm: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    api.post('/api/offers', data);
    // TODO: send data to backend
    // /api/offer
  };

  return (
    <form onSubmit={handleSubmit(sendForm)}>
      <Input label="Title" {...register('title')} error={errors.title} />
      <Input
        label="Description"
        {...register('description')}
        error={errors.description}
      />
      <Input
        label="E-mail"
        type="email"
        {...register('email')}
        error={errors.email}
      />
      <Input
        label="Salary from"
        type="number"
        {...register('salary_from', { valueAsNumber: true })}
        defaultValue={0}
        error={errors.salary_from}
      />
      <Input
        label="Salary to"
        type="number"
        {...register('salary_to', { valueAsNumber: true })}
        defaultValue={0}
        error={errors.salary_to}
      />
      <Button label="Submit" type="submit" />
    </form>
  );
};
