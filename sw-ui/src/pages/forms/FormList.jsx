import React from "react";
import Link from "next/link";
import withAuth from "lib/HOC/withAuth";
import { useFormData } from "hooks/useFormData";

const FormsList = ({ user }) => {
  const formList = useFormData(`/roles?q=${user.roles}`);

  return (
    <div>
      <h1>FORMULARIOS:</h1>
      <ul>
        {formList?.forms?.map((items) => (
          <li key={items._id}>
            <Link href={`${"forms/"}${items._id}`}>{items.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withAuth(FormsList);
