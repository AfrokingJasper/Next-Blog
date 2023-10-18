import React, { useState, useEffect } from "react";
import Notification from "../ui/notification";

function ContactForm() {
  const [enteredName, setEnteredName] = useState<string>("");
  const [enteredMessage, setEnteredMessage] = useState<string>("");
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [status, setStatus] = useState<string | null>();

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  function sendMessageHandler(event: React.FormEvent) {
    event.preventDefault();
    const newMessage = {
      email: enteredEmail,
      name: enteredName,
      message: enteredMessage,
    };

    setStatus("pending");

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json();
        if (!res.ok) {
          setStatus("error");
          throw new Error("something went wrong");
        }
      })
      .then((data) => {
        setStatus("success");
        setEnteredEmail("");
        setEnteredName("");
        setEnteredMessage("");
        console.log(data);
      })
      .catch((err) => setStatus("error"));
  }

  let notification;

  if (status === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way",
    };
  }

  if (status === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (status === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: "Something went wrong!",
    };
  }

  return (
    <section className="flex flex-col gap-3 w-[80%] lg:w-[60%] mx-auto mt-10 rounded-sm p-5 bg-gray-200">
      <h1 className="font-bold text-center">How Can I help you?</h1>
      <form
        onSubmit={sendMessageHandler}
        className="flex flex-col gap-5 items-center"
      >
        <div className="flex flex-col md:flex-row justify-around items-center w-full">
          <div className="flex flex-col gap-3 w-[90%] md:w-[45%]">
            <label htmlFor="email">Your email</label>
            <input
              className="p-2"
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3 w-[90%] md:w-[45%]">
            <label htmlFor="name">Your Name</label>
            <input
              className="p-2"
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 w-[90%] md:w-[80%]">
          <label htmlFor="message">Your Message</label>
          <textarea
            className="p-2"
            id="message"
            rows={5}
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>

        <div>
          <button className="bg-gray-800 active:bg-gray-600 py-2 px-4 rounded-md text-white">
            Send Message
          </button>
        </div>
      </form>
      {status && (
        <Notification
          status={notification?.status}
          message={notification?.message}
          title={notification?.title}
        />
      )}
    </section>
  );
}

export default ContactForm;
