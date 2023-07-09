import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../providers/Auth.provider";
import EventForm from "./EventForm";

export default function AddEvent() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (newEvent) => {
    try {
      console.log("add event button clicked");
      const response = await fetch("http://127.0.0.1:3000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newEvent,
          user_id:user.id,
        }),
      });
  
      if (response.ok) {
        // Form submission is successful, navigate to the desired page
        setMessage("Event created!"); // Clear error message
      } else {
        setMessage("Failed to add event. Please try again later.");
      }
  
      console.log(response.status); // Response status code
      console.log(response.statusText); // Response status text
      console.log(response.headers); // Response headers
  
      const responseBody = await response.json();
      console.log(responseBody); // Parsed response body
      console.log(responseBody.errors); // Error messages from the server
    } catch (error) {
      console.error(error);
      setMessage("Failed to add event. Please try again later.");
    }
  };

  useEffect(() => {
    if (message === "Event created!") {
      // Navigate to the desired page when message is empty (indicating successful submission)
      navigate("/events");
    }
  }, [message, navigate]);

  return <EventForm handleSubmit={handleSubmit} errorMsg={message} />;
}