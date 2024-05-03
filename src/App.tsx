import "./App.css";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { useAppDispatch } from "./hooks/redux";
import { addUser } from "./redux/slices/userSlice";
import { Email } from "./components/Email";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/2")
      .then((response) => response.json())
      .then((data) => dispatch(addUser(data)))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Header />
      <Email />
    </>
  );
}

export default App;
