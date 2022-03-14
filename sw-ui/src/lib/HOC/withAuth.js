const { useUser } = require("hooks/useUser");

const withAuth = (Component) => {
  const Wrapped = (props) => {
    const user = useUser({ redirectTo: "/login" });
    return <>{user && <Component {...props} user={user} />}</>;
  };

  return Wrapped;
};

export default withAuth;
