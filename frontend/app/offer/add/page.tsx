import { Input } from '@wa/common-ui';

export default async function AddOffer() {
  return (
    <div>
      <h1>Add Offer</h1>
      <form>
        <Input label="Title" />
        <Input label="Description" />
        <Input label="E-mail" type="email" />
      </form>
    </div>
  );
}
