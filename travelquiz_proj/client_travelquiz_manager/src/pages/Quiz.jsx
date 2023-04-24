import { Body } from "../components/Body";
import { PhotoComp } from "../components/PhotoComp";
import ReactDOM from "react-dom";
import React, { Fragment, useEffect, useState } from "react";
import { createApi } from "unsplash-js";
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