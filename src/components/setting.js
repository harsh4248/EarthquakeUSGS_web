//import { useState } from "react";

const Setting = (props) => {
  let link = props.apiLink;
  const linkSetter = props.apiLinkSetter;
  const baseLink = props.baseApi;
  const states = props.stateFilter;
  var newLink = "" + link;
  //console.table(states);
  return (
    <div className="mx-auto text-center my-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className="block text-gray-700 text-sm font-bold mb-2">
          From Date: &nbsp;
        </label>
        <input
          type="date"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(event) => {
            const fun = states.fromSetter;
            fun(event.target.value);
            // setFromDate(event.target.value);
            // console.log(event.target.value);
          }}
          value={states.from}
        />
        <br />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          To Date: &nbsp;
        </label>
        <input
          type="date"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(event) => {
            console.log(event.target.value);
            const fun = states.toSetter;
            fun(event.target.value);
          }}
          value={states.to}
        />
        <br />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Minimum Magnitude: &nbsp;
        </label>
        <input
          type="number"
          required
          placeholder="number between 0-9"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(event) => {
            const fun = states.minMagSetter;
            fun(event.target.value);
          }}
          value={states.minMag}
        />
        <br />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Maximum Magnitude: &nbsp;
        </label>
        <input
          type="number"
          required
          placeholder="number between 0-9"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(event) => {
            const fun = states.maxMagSetter;
            fun(event.target.value);
          }}
          value={states.maxMag}
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-3 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          aria-required
          onSubmit={() => {
            //states
            //if(states.from !== '' && )
            //e.preventDefault();
          }}
          onClick={() => {
            var fromDate = new Date(states.from);
            console.log(fromDate.toString());
            var toDate = new Date(states.to);
            console.log(toDate.toString());

            if (fromDate.getTime() <= toDate.getTime()) {
              if (states.minMag <= states.maxMag) {
                newLink +=
                  "&starttime=" + states.from + "&endtime=" + states.to;
                newLink +=
                  "&minmagnitude=" +
                  states.minMag +
                  "&maxmagnitude=" +
                  states.maxMag;
                console.log(newLink);
                linkSetter(newLink);
                props.logSetter(false);
                setTimeout(() => {
                  props.logSetter(true);
                }, 50);
              }
            }
          }}
        >
          Filter
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-3 ml-3 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => {
            let fun = states.toSetter;
            fun("");
            fun = states.fromSetter;
            fun("");
            fun = states.minMagSetter;
            fun("");
            fun = states.maxMagSetter;
            fun("");
            linkSetter(baseLink);
            props.logSetter(false);
            setTimeout(() => {
              props.logSetter(true);
            }, 50);
            console.log(baseLink);
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default Setting;
