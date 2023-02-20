import { useState, useEffect } from "react";

export function useRandomCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;
    const fiveWords = fact.split(" ", 5).join(" ");
    setImageUrl(`https://cataas.com/cat/says/${fiveWords}`);

    // fetch(`https://cataas.com/cat/says/${fiveWords}`)
    //   .then((res) => res.blob())
    //   .then((blob) => {
    //     console.log(blob);

    //     const imageUrl = URL.createObjectURL(blob);
    //     setImageUrl(imageUrl);
    //   });
  }, [fact]);

  return { imageUrl };
}
