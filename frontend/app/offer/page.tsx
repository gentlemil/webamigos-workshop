import { Header } from '@wa/common-ui';
import db from '@wa/prisma';
import Link from 'next/link';

export default async function Offer() {
  const offers = await db.jobOffer.findMany({
    where: { is_active: true },
    orderBy: { created_at: 'desc' },
    include: { Company: true },
  });

  return (
    <div>
      <Header>Offer</Header>
      <ul>
        {offers.map((offer) => (
          <li key={offer.id} className="border-b hover:bg-gray-100">
            <Link href={`/offer/${offer.id}`}>
              <p>{offer.Company?.name}</p>
              {offer.title} - {offer.description}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
