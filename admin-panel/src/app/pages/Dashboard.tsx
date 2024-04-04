import { useQuery } from '@tanstack/react-query';
import { Header } from '@wa/common-ui';
import { offersList } from '../services/offers';

export const DashboardPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['dashboard'],
    queryFn: offersList,
  });

  console.log(data?.offers);

  if (isLoading) {
    return <Header>Loading...</Header>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <Header>Dashboard</Header>
      <div>
        {data?.offers &&
          data.offers.map((offer) => (
            <div key={offer.id}>
              <p>{offer.title}</p>
              <p>{offer.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
