import React from "react";
import Banner from "../../components/Banner/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router";
import { useEffect } from "react";
import { useLocation } from "react-router";

const Home = () => {
  const data = useLoaderData();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#books") {
      document.getElementById("books")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location]);
  return (
    <div>
      <Banner></Banner>

      <div id="books">
        <Books data={data} />
      </div>
    </div>
  );
};

export default Home;
