import { useQuery } from '@tanstack/react-query';
import { Button, Header } from '@wa/common-ui';
import { offersList, activateOffer } from '../services/offers';

export const DashboardPage = () => {
  const { data, error, isLoading, refetch } = useQuery({
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

  const handleActivate =
    (id: string) => async (_event: React.MouseEvent<HTMLButtonElement>) => {
      await activateOffer(id);
      await refetch();
    };

  return (
    <div>
      <Header>Dashboard</Header>
      <div>
        {data?.offers &&
          data.offers.map((offer) => (
            <div key={offer.id}>
              <p>{offer.title}</p>
              <p>{offer.description}</p>
              <p>is active: {offer.is_active ? 'yes' : 'no'}</p>
              <Button
                label="Confirm"
                onClick={handleActivate(offer.id)}
              ></Button>
              <Button label="Remove"></Button>
            </div>
          ))}
      </div>
    </div>
  );
};
