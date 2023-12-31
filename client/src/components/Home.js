import React from "react";
import Highlights from "./Highlights";
import { Link } from "react-router-dom";
import EventsHome from "./EventsHome";
import { useAuthContext } from "../providers/Auth.provider";

function Home() {
  const auth = useAuthContext();
  const isAuth = auth?.user;
  return (
    <div>
      <div className="h-screen">
        <div className="relative h-[98%] flex items-center w-full justify-end pr-40 bg-[url(https://img.freepik.com/free-photo/blue-designed-grunge-concrete-texture-vintage-background-with-space-text-image_1258-108928.jpg)] bg-cover">
          <video autoPlay muted loop className="h-5/6">
            <source
              src="https://www.zohowebstatic.com/sites/zweb/images/backstage/home/banner-intro.webm"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="text-white text-xl flex flex-col pl-40 justify-center gap-6 absolute top-20 bg-white/30 h-full w-full">
          <h1 className="text-6xl font-semibold uppercase">
            You are welcomed to <br />
            <span className="text-rose-600">MIMI-KENYA</span> events.
          </h1>
          <p>
            Whether you're looking to learn something new,
            <br /> connect with like-minded individuals, or simply have a good
            time, <br />
            MIMI-KENYA has an event for you.
          </p>
          {!isAuth ? (
            <Link to="/signIn">
              <button className="bg-rose-600 rounded-lg w-48 p-2 text-white hover:opacity-80">
                Get started <i className="fa-solid fa-arrow-right ml-1"></i>
              </button>
            </Link>
          ) : (
            <Link to="/events">
              <button className="bg-rose-600 rounded-lg w-48 p-2 text-white hover:opacity-80">
                <i className="fa-solid fa-calendar-days mr-2"></i>See all Events
                <i className="fa-solid fa-arrow-right ml-1"></i>
              </button>
            </Link>
          )}
        </div>
      </div>
      <Highlights />
      <EventsHome />
    </div>
  );
}

export default Home;
