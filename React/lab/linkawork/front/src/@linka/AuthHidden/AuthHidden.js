import { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_USER } from "queries";

function AuthHidden(props) {
  const {
    data: { user }
  } = useQuery(GET_USER);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (user) {
      setAuth(false);
      if (user && props.name && user.auths.indexOf(props.name) >= 0)
        setAuth(true);
      if (user && !props.name) setAuth(true);
    }
  }, [user, props.name]);

  return auth && props.children;
}

export default AuthHidden;
