import React, { useState } from "react";

const ContactComponent = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="bg-white min-h-[80vh] container mx-auto lg:px-36 px-4 py-16">
      <div className="flex w-full items-center justify-center flex-col gap-4">
        <h1 className="lg:text-6xl text-4xl font-bold">Let's Get Started</h1>
        <div className="py-0.5 px-7 bg-primary-200 "></div>
        <p className="text-center lg:w-[600px] w-full text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam velit
          voluptates eveniet maiores distinctio veniam quae harum recusandae
        </p>
        <form
          onSubmit={handleOnSubmit}
          className="w-full mt-8 flex flex-col gap-4"
        >
          <div className="flex lg:flex-row flex-col w-full lg:gap-8 gap-4">
            <div className="flex w-full flex-col gap-2 group">
              <label
                htmlFor="name"
                className="font-semibold group-focus-within:text-primary-200"
              >
                Your Name
              </label>
              <input
                type="text"
                className="border focus-within:border-primary-200 shadow outline-none w-full p-2 bg-slate-50 rounded"
                name="name"
                value={data.name}
                required
                onChange={handleOnChange}
                id="name"
              />
            </div>
            <div className="flex w-full flex-col gap-2 group">
              <label
                htmlFor="email"
                className="font-semibold  group-focus-within:text-primary-200"
              >
                Your Email
              </label>
              <input
                type="email"
                className="border shadow focus-within:border-primary-200 outline-none w-full p-2 bg-slate-50 rounded"
                name="email"
                required
                value={data.email}
                onChange={handleOnChange}
                id="email"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-2 group">
            <label
              htmlFor="subject"
              className="font-semibold group-focus-within:text-primary-200"
            >
              Your Subject
            </label>
            <input
              type="text"
              className="border shadow focus-within:border-primary-200 outline-none w-full p-2 bg-slate-50 rounded"
              name="subject"
              value={data.subject}
              required
              onChange={handleOnChange}
              id="subject"
            />
          </div>
          <div className="flex w-full flex-col gap-2 group">
            <label
              htmlFor="message"
              className="font-semibold group-focus-within:text-primary-200"
            >
              Your Message
            </label>
            <textarea
              name="message"
              value={data.message}
              onChange={handleOnChange}
              required
              cols={5}
              rows={5}
              id="message"
              className="border shadow focus-within:border-primary-200 outline-none w-full p-2 bg-slate-50 rounded"
            ></textarea>
          </div>
          <div className="flex lg:flex-row flex-col gap-4 lg:justify-between items-center">
            <p className="text-gray-500">
              * Rest assured.We will not spam at your inbox.
            </p>

            <button
              type="submit"
              className="bg-primary-200 hover:bg-primary-300 transition-all transform duration-300 shadow-lg shadow-gray-300 cursor-pointer flex items-center justify-center mt-2 font-semibold text-sm px-8 uppercase text-white rounded-full py-4 md:w-[180px] lg:w-[180px] w-full text-center"
            >
              <span className="">SEND MESSAGE </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactComponent;
