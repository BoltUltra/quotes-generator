import { useEffect, useState } from "react";

const useRandomQuotes = () => {
  const [joke, setJoke] = useState("");
  useEffect(() => {
    const fetchJoke = async () =>
      await fetch("https://api.quotable.io/random")
        .then((res) => res.json())
        .then((data) => {
          console.log(data.content);
          setJoke(data);
        });
    fetchJoke();
  }, []);

  return joke;
};

export default useRandomQuotes;
