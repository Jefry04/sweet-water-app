import React from "react";
import { useRouter } from "next/router";
import FormFactory from "components/FormFactory";
import { useFormData } from "hooks/useFormData";
import withAuth from "lib/HOC/withAuth";

const Details = ({ user }) => {
  const router = useRouter();
  const { id } = router.query;
  const formDetail = useFormData(`/id/${id}`);

  return <div>{user && <FormFactory data={formDetail?.form} />}</div>;
};

export default withAuth(Details);
