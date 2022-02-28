import { useContext, useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";
import { UserContext } from "../context/UserContext";

const fetcher = (url) =>
  fetch(url, {
    credentials: "include",
  })
    .then((r) => r.json())
    .then((data) => {
      return { user: data?.user || null };
    });

export function useUser({ redirectTo } = {}) {
  const { user: userCtx, setUser: setUserCtx } = useContext(UserContext);
  const { data, error } = useSWR(userCtx ? null : "http://localhost:3001/api/user/session", fetcher);

  const user = data?.user;
  const finished = Boolean(data);
  const hasUser = Boolean(user);

  useEffect(() => {
    if (!redirectTo || !finished || userCtx) return;
    // If redirectTo is set, redirect if the user was not found.
    if (redirectTo && !hasUser) {
      Router.push(redirectTo);
    }
    if (hasUser && !userCtx) {
      setUserCtx(user);
    }
  }, [redirectTo, finished, hasUser, userCtx, setUserCtx, user]);

  if (userCtx) {
    return userCtx;
  }

  // TODO: Later, when we fetch the user, we should then store it in the context so we only fetch once per session.
  return error ? null : user;
}
