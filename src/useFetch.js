import { useState, useEffect } from "react";

// custom hooks måste börja med use
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        // finns det en error?
        if (!res.ok) {
          throw Error("Kunde inte hämta datan");
        }
        return res.json();
      })
      .then((data) => {
        // när values är hämtade så ändras isPending från sant till falsk
        setIsPending(false);
        setData(data);
        // så err försvinner om man vid senare tillfälle lyckas hämta
        setError(null);
      })
      .catch((err) => {
        // för att se till att err msg går fram sålänge det inte är pga abortcontroller
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          // så den inte visar Laddar om error
          setIsPending(false);
          // err state updateras så den syns med error message
          setError(err.message);
        }
      });
    // så att man inte får error för att man försäker ändra state på en unmountad component
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};
export default useFetch;
