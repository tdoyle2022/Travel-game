import { Link } from "react-router-dom";
import { CountriesList } from "./CountriesList";
import { CapitalsList } from "./CapitalsList"

export const QuizCategories = () => {
    return (
      <main className="root">
        <Link to='/'>Home</Link>
        <div>
            <h1><Link to='/countrieslist'>Countries</Link></h1>
            <img src="https://media.istockphoto.com/id/1131743616/photo/aerial-view-of-tokyo-cityscape-with-fuji-mountain-in-japan.jpg?s=612x612&w=0&k=20&c=0QcSwnyzP__YpBewnQ6_-OZkn0XDtq-mXyvLSSakjZE=" />
            <h1><Link to='/quiz'>Cities</Link></h1>
            <img src="https://media.istockphoto.com/id/511665488/photo/chicago-skyline-aerial-view.jpg?s=612x612&w=0&k=20&c=Nfjoexe1-svOwqSXiGPBfMQun3t8nmvE9cYODZCT4Dc=" />
            <h1><Link to='/capitalslist'>Capitals</Link></h1>
            <img src="https://qph.cf2.quoracdn.net/main-qimg-818fbdd4d5bb3607f25aa8851b413b59.webp" />
        </div>
        <Link to='/'>Home</Link>
      </main>
    );
  };
