import useRandomQuotes from "./useRandomQuotes";

function App() {
  const joke = useRandomQuotes();
  const generateJoke = (e) => {};

  return (
    <div className="App h-screen flex items-center justify-center">
      <div className="card w-full text-center lg:mx-72 md:mx-22 mx-5 p-20 relative">
        <form>
          <p className="font-bold text-gray-600 text-3xl">{joke.content}</p>
          <p className="italic text-right pt-5 font-extralight text-white">
            {`'${joke.author}'`}
          </p>
          <span className="quote">
            <i class="fa-solid fa-quote-right fa-2x"></i>
          </span>
          <input type="text" className="hidden" />
          <button
            onClick={generateJoke}
            type="submit"
            className="App py-2 px-10 rounded-full font-semibold mt-10"
          >
            Generate
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
