import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { changeEmail } from "../redux/slices/userSlice";

export const Email = () => {
  //LO COMENTADO ES LO IDEAL PERO NO FUNCIONA PORQUE NO SE ACCEDE A STORE DESDE FUERA DEL INPUT O ALGO ASÍ
  //   const email = useAppSelector((state) => {
  //     state.user.email;
  //   });
  const dispatch = useAppDispatch();
  const handleChange = (e) => {
    dispatch(changeEmail(e.target.value));
  };

  return (
    <input
      type="email"
      //   value={email}
      value={useAppSelector((state) => state.user.email)}
      placeholder="Email"
      onChange={handleChange}
    />
  );
};
