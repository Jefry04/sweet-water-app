import React from "react";
import FormList from "./FormList";
import withAuth from "lib/HOC/withAuth";

const FormsListView = ({ user }) => {
  return <>{user && <FormList />}</>;
};

export default withAuth(FormsListView);
