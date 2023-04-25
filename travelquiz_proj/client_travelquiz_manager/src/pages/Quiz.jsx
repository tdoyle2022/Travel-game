import { Body } from "../components/Body";
import { Link } from "react-router-dom";

export const Quiz = () => {
  return (
    <main className="root">
      <Link to='/'>Home</Link>
      <Body />
      <Link to='/'>Home</Link>
    </main>
  );
};