import { useState, useEffect } from "react";
import { getRandomFact } from "../services/facts";

export function useCatFact() {
  const [fact, setFact] = useState();

  const getNewFact = () => {
    getRandomFact().then((newFact) => setFact(newFact));
  };

  useEffect(getNewFact, []);
  return { fact, getNewFact };
}
