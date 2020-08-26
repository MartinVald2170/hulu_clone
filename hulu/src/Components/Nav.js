import React from "react";
import "./Nav.css";
import request from "./request";

function Nav({ setSelectedOption }) {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedOption(request.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setSelectedOption(request.fetchTopRated)}>
        Top Rated
      </h2>
      <h2>Action</h2>
      <h2>Comedy</h2>
      <h2>Horror</h2>
      <h2>Romance</h2>
      <h2>Mystery</h2>
      <h2>Sci-f</h2>
      <h2>Western</h2>
      <h2>Animation</h2>
      <h2>Movie</h2>
    </div>
  );
}

export default Nav;
