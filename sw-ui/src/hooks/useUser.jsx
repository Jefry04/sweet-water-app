import { useEffect, useContext } from "react";
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
  const { user: userCtx } = useContext(UserContext);

  if (userCtx) {
    return userCtx;
  }

  const { data, error } = useSWR(
    "http://localhost:3001/api/user/session",
    fetcher
  );

  const user = data?.user;
  const finished = Boolean(data);
  const hasUser = Boolean(user);

  useEffect(() => {
    if (!redirectTo || !finished) return;
    // If redirectTo is set, redirect if the user was not found.
    if (redirectTo && !hasUser) {
      Router.push(redirectTo);
    }
  }, [redirectTo, finished, hasUser]);

  return error ? null : user;
}
