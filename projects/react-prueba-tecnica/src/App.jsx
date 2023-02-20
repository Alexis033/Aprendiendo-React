import "./App.css";
import { useCatFact } from "./hooks/useCatFact";
import { useRandomCatImage } from "./hooks/useRandomCatImage";

function App() {
  const { fact, getNewFact } = useCatFact();
  const { imageUrl } = useRandomCatImage({ fact });

  const handleClick = () => getNewFact();

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
