import { useEffect, useState } from "react";
import "./App.css";

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`;
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${}`;

function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
        const fiveWords = fact.split(" ", 5).join(" ");
        setImageUrl(`https://cataas.com/cat/says/${fiveWords}`);

        //   // fetch(`https://cataas.com/cat/says/${fiveWords}`)
        //   //   .then((res) => res.json())
        //   //   .then((blob) => {
        //   //     console.log(blob);

        //   //     const imageUrl = URL.createObjectURL(blob);
        //   //     setImageUrl(imageUrl);
        //   //   });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <h1>Cat app</h1>
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
