import React, { useEffect, useState } from "react";
import EventItem from "./eventItem";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const EventsList = () => {
  const [events, setEvents] = useState([]);

  //handling searchbar
  const [searchValue,setSearchValue]=useState("")
  const [filteredEvents, setFilteredEvents] = useState([]);
    //search parameter is the title
    const handleSearch = () => {
      console.log("search button clicked")
       const filteredEvents=events.filter((event) =>
        event.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredEvents(filteredEvents);
    }; 
  

  // get all events
  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="bg-https://images.unsplash.com/photo-1637625854255-d893202554f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80"
      style={{
        backgroundImage:`url('https://images.unsplash.com/photo-1637625854255-d893202554f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80')`
      }}>
    <div className="w-3/4 m-auto p-4 flex flex-col gap-4 min-h-screen">
      <div className="flex gap-2 text-4xl items-center py-5 mx-auto">
        <div className="h-24 w-24 rounded-full bg-rose-600 text-white flex items-center justify-center">
          <i className="fa-solid fa-heart"></i>
        </div>
        <h1 className="text-gray-700 border-b-2 border-rose-600 font-bold">
          UPCOMING EVENTS
        </h1>
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="border px-4 py-2 rounded-full flex-1 mr-10 flex justify-between items-center">
          <Searchbar setSearchValue={setSearchValue} handleSearch={handleSearch}/>
          <button onClick={handleSearch}>SEARCH</button>
          <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
        </div>
        <Link to="/addEvent">
          <button className="bg-rose-600 hover:bg-opacity-80 text-white px-4 py-2 rounded-lg">
            + Add event
          </button>
        </Link>
      </div>

      <div className="flex flex-wrap  gap-4 ">
        {/* {Array(20)
          .fill(0)
          .map((e) => (
            <EventItem key={Math.random()} />
          ))} */}
        {/*events.map((event) => (
          <EventItem key={event.id} {...event} />
        ))*/}
        {filteredEvents.length > 0
          ? filteredEvents.map((event) => (
              <EventItem key={event.id} {...event} />
            ))
          : events.map((event) => <EventItem key={event.id} {...event} />)}
      </div>
    </div>
    </div>
  );
};
export default EventsList;