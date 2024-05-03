import { useAppSelector } from "../hooks/redux";

export const Header = () => {
  const user = useAppSelector((state) => state.user);
  return (
    <header>
      <h1>Redux Toolkit Example</h1>
      <ul>
        <li>Name: {user.name}</li>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
      </ul>
    </header>
  );
};
