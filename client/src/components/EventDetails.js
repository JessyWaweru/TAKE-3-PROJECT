import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import formatDate from "../utilities/formatdate";
import { useAuthContext } from "../providers/Auth.provider";

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState("");
  const [isbooked, setIsbooked] = useState(false);
  const auth = useAuthContext();

  // handle book ticket
  function handleBookTicket() {
    setIsbooked(!isbooked);
  }

  // get all events
  useEffect(() => {
    fetch(`https://event-manager-1mtv.onrender.com/events/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEvent(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  // handle delete
  const handleDelete = () => {
    fetch(`https://event-manager-1mtv.onrender.com/events/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        window.location.reload();
        window.location.href = "/events";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="mb-10">
      {/* heading */}
      <div className="bg-gray-700">
        <h1 className="uppercase py-8 text-rose-100 text-4xl font-semibold text-center">
          {event.title}
        </h1>
        <p className="text-white text-center pb-5 italic font-thin">
          {formatDate(event.date)}
        </p>
      </div>
      {/* body */}
      <div className="w-3/4 flex justify-between m-auto mt-8">
        <div className="flex flex-col w-3/4">
          {/* image */}
          <div>
            <img
              src={event.image || "/assets/pexels-luis-quintero-2774556.jpg"}
              alt="eventDetails"
              className="h-96 w-3/4 m-auto rounded-lg"
            />
          </div>
          {/* about */}
          <div>
            <div className="flex gap-2 text-3xl items-center py-5">
              <div className="h-16 w-16 rounded-full bg-rose-600 text-white flex items-center justify-center">
                <i className="fa-solid fa-star"></i>
              </div>
              <h3 className="text-gray-700 border-b-2 border-rose-600 font-bold uppercase">
                About the event
              </h3>
            </div>
            <p>{event.description}</p>
          </div>
          {/* speakers */}
          <div>
            <div className="flex gap-2 text-3xl items-center py-5">
              <div className="h-16 w-16 rounded-full bg-rose-600 text-white flex items-center justify-center">
                <i className="fa-solid fa-users"></i>
              </div>
              <h3 className="text-gray-700 border-b-2 border-rose-600 font-bold uppercase">
                speakers
              </h3>
            </div>
            <div className="flex justify-evenly items-center">
              {/* ...speakers code */}
            </div>
          </div>
        </div>
        {/* aside */}
        <div className="border p-2 flex flex-col gap-5 h-fit rounded-lg">
          <div className="flex gap-2">
            <p>Location:</p>
            <p className="font-bold">{event.location}</p>
          </div>
          <div className="flex gap-2">
            <p>Date:</p>
            <p className="font-bold">{formatDate(event.date)}</p>
          </div>
          <div className="flex gap-2">
            <p>Age limit:</p>
            <p className="font-bold">{event.age_limit}</p>
          </div>
          <div className="flex gap-2">
            <p>Capacity:</p>
            <p className="font-bold">{event.capacity}</p>
          </div>
          {/* Event planner */}
          {event && event.user && (
            <>
              <div className="flex gap-2">
                <p>Event Planner:</p>
                <p className="font-bold">{event.user.username}</p>
              </div>
              <div className="flex gap-2">
                <p>Contact:</p>
                <p className="font-bold">{event.user.email}</p>
              </div>
            </>
          )}
          <button
            onClick={handleBookTicket}
            className="bg-rose-600 rounded-lg w-48 p2 text-white hover:opacity-80"
          >
            <i className="fa-solid fa-ticket mr-2"></i>
            {!isbooked ? "Get Ticket" : "Booked"}
          </button>
          {auth?.user?.user?.id === event?.user?.id && (
            <div className="flex justify-between w-full border-t py-2">
              <Link to={`/updateEvent/${id}`}>
                <button className="bg-gray-600 rounded-lg w-48 text-white hover:opacity-80 p-2 mr-2">
                  Update
                </button>
              </Link>
              <button
                onClick={handleDelete}
                className="bg-gray-600 rounded-lg w-48 text-white hover:opacity-80 p-2"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
