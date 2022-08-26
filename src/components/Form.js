import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('heyyy')
  }

  render() {
    return (
      <form className="container">
        <div className="double-field gap-6 grid grid-cols-2">
          <div className="flex flex-col w-full">
            <label
              className="font-bold mt-5 text-gray-500 text-lg"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="border border-slate-300 rounded-sm md:rounded-md px-2 py-2 mt-2"
              placeholder="Your First Name"
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              className="font-bold mt-5 text-gray-500 text-lg"
              htmlFor="surname"
            >
              Surname:
            </label>
            <input
              type="text"
              id="surname"
              className="border border-slate-300 rounded-sm md:rounded-md px-2 py-2 mt-2"
              placeholder="Your Last Name"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label
            className="font-bold mt-5 text-gray-500 text-lg"
            htmlFor="phone"
          >
            Phone:
          </label>
          <input
            type="text"
            pattern=""
            id="phone"
            className="border border-slate-300 rounded-sm md:rounded-md px-2 py-2 mt-2 invalid:border-red-300 valid:border-green-300 outline-none"
            placeholder="ex. +81 473 118 8692"
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            className="font-bold mt-5 text-gray-500 text-lg"
            htmlFor="name"
          >
            Email:
          </label>
          <input
            type="email"
            id="name"
            className="border border-slate-300 rounded-sm md:rounded-md px-2 py-2 mt-2"
            placeholder="your@email.com"
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            className="font-bold mt-5 text-gray-500 text-lg"
            htmlFor="website"
          >
            Website: <span className="text-sm">(optional)</span>
          </label>
          <input
            type="url"
            id="website"
            className="border border-slate-300 rounded-sm md:rounded-md px-2 py-2 mt-2"
            placeholder="https://yourwebsite.com"
          />
        </div>
        <input type="submit" value="Download PDF" className="bg-blue-400 py-5 px-3 rounded-md text-white border-blue-300 font-bold mt-7 cursor-pointer" onClick={(e) => this.handleSubmit(e)} />
      </form>
    );
  }
}

export default Form;
