import React from "react";

function ContactForm() {
  function sendMessageHandler(event: React.FormEvent) {
    event.preventDefault();

    console.log("submitted");
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
            <input className="p-2" type="email" id="email" required />
          </div>
          <div className="flex flex-col gap-3 w-[90%] md:w-[45%]">
            <label htmlFor="name">Your Name</label>
            <input className="p-2" type="text" id="name" required />
          </div>
        </div>

        <div className="flex flex-col gap-3 w-[90%] md:w-[80%]">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows={5}></textarea>
        </div>

        <div>
          <button className="bg-gray-800 active:bg-gray-600 py-2 px-4 rounded-md text-white">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
