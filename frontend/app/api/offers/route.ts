import { NextResponse } from 'next/server';
import { Currency } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import db from '@wa/prisma';

type FormValues = {
  title: string;
  description: string;
  salary_from: number;
  salary_to: number;
  email: string;
  salary_currency: Currency;
};

export async function POST(request: Request) {
  // const data = request.body;
  const data: FormValues = await request.json();

  const offer = await db.jobOffer.create({
    data: {
      title: data.title,
      description: data.description,
      salary_from: data.salary_from,
      salary_to: data.salary_to,
      salary_currency: 'EUR',
    },
  });
  revalidatePath('/offer', 'page');

  return NextResponse.json(offer);
}
