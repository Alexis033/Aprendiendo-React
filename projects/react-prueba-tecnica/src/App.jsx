import { useEffect, useState } from "react";
import "./App.css";
import { getRandomFact } from "./services/facts";
import { useRandomCatImage } from "./hooks/useRandomCatImage";

function App() {
  const [fact, setFact] = useState();
  const { imageUrl } = useRandomCatImage({ fact });

  useEffect(() => {
    getRandomFact().then((newFact) => setFact(newFact));
  }, []);

  const handleClick = async () => {
    const newFact = await getRandomFact();
    setFact(newFact);
  };
  return (
    <main>
      <h1>Cat app</h1>
      <button onClick={handleClick}>New fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image of a random cat with the first five words of the fact: ${fact}`}
        />
      )}
    </main>
  );
}

export default App;
