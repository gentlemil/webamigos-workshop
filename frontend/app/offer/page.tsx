import db from '@wa/prisma';

export default async function Offer() {
  const offers = await db.jobOffer.findMany({
    orderBy: { created_at: 'desc' },
  });

  return (
    <div>
      <h1>Offer</h1>
      <ul>
        {offers.map((offer) => (
          <li key={offer.id}>
            {offer.title} - {offer.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
