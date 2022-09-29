import React from "react";
import Link from "next/link";
import withAuth from "lib/HOC/withAuth";
import { useFormData } from "hooks/useFormData";

const FormsList = ({ user }) => {
  const formList = useFormData(`/roles?q=${user.roles}`);

  if (formList === null) return <div>failed to load</div>;

  return (
    <>
      <h1>FORMULARIOS:</h1>
      <ul>
        {user?.roles?.map((role, idx) => (
          <>
            <h4 key={idx}>{role}</h4>
            {formList?.forms
              ?.filter((item) => item.allowedRoles.indexOf(role) >= 0)
              .map((form) => (
                <li key={form._id}>
                  <Link href={`${"forms/"}${form._id}`}>{form.name}</Link>
                </li>
              ))}
          </>
        ))}
      </ul>
    </>
  );
};

export default withAuth(FormsList);
