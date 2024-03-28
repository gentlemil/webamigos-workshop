import { Header } from '@wa/common-ui';
import { AddOpinionForm } from './AddOpinionForm';

export default async function AddOpinion() {
  return (
    <div>
      <Header>Add Opinion</Header>
      <AddOpinionForm />
    </div>
  );
}
