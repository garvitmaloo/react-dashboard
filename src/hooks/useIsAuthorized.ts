import { useSelector } from "react-redux";

export default function useIsAuthorized(user: string): boolean {
  const loggedInUser = useSelector((state: any) => state.user);

  return (
    loggedInUser &&
    (loggedInUser.role === "Admin" || loggedInUser.role === user)
  );
}
