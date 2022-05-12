const Setting = (props) => {
  const link = props.apiLink;
  const linkSetter = props.apiLinkSetter;

  return (
    <div className="mx-auto text-center my-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          From Date: &nbsp;
        </label>
        <input
          type="date"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <br />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          To Date: &nbsp;
        </label>
        <input
          type="date"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <br />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Minimum Magnitude: &nbsp;
        </label>
        <input
          type="number"
          placeholder="number between 0-9"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <br />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Maximum Magnitude: &nbsp;
        </label>
        <input
          type="number"
          placeholder="number between 0-9"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-3 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Filter
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-3 ml-3 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default Setting;
