import CreateNewFormView from "./CreateNewFormView";
import { NoAccessView } from "components/NoAccessView";
import withAuth from "lib/HOC/withAuth";

export const newForm = ({ user }) => {
  return <>{user.isAdmin ? <CreateNewFormView /> : <NoAccessView />}</>;
};

export default withAuth(newForm);
