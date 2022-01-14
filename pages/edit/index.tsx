import type { NextPage } from 'next';

import { EditForm } from '../../components/EditForm/EditForm';

const Edit: NextPage = () => {
  return (
    <div className="p-5 flex flex-col">
      <h1 className="p-5">Create new Flat Power Template</h1>
      <EditForm />
    </div>
  );
};

export default Edit;
