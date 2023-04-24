import { Link } from "react-router-dom";

export const QuizCategories = () => {
    return (
      <main className="root">
        <Link to='/'>Home</Link>
        <div>
            <h1>Countries</h1>
            <img src="https://images.unsplash.com/photo-1539768942893-daf53e448371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" />
            <h1><Link to='/quiz'>Cities</Link></h1>
            <img src="https://media.istockphoto.com/id/511665488/photo/chicago-skyline-aerial-view.jpg?s=612x612&w=0&k=20&c=Nfjoexe1-svOwqSXiGPBfMQun3t8nmvE9cYODZCT4Dc=" />
            <h1>National Parks</h1>
            <img src="https://media.istockphoto.com/id/1135715079/photo/yellowstone-national-park-wyoming-usa.jpg?s=612x612&w=0&k=20&c=ZWAnLEFlZHLSZYo7JLx2bgvPEL29jOdIk0_MRdTreB0=" />
        </div>
        <Link to='/'>Home</Link>
      </main>
    );
  };