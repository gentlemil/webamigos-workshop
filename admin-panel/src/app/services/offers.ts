import { JobOffer } from '@prisma/client';
import { api } from './config';

export const offersList = async () => {
  try {
    console.log('Fetching offers');

    const response = await api.get<{ offers: JobOffer[] }>('/offers');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching offers');
  }
};

export const activateOffer = async (id: string) => {
  return await api.patch(`/offers/${id}/activate`);
};
