import React from "react";
import { useLocation } from "react-router-dom";

function LocationSample() {
  let location = useLocation();
  //* search urlde ? sonrasına verir. Örneğin .com/test?name=erkut gibi
  let { search } = location;
  console.log("Search: ", search);

  let query = useQuery();
  console.log("Query: ", query);
  return (
    <div>
      <h1>{query.get("name")}</h1>
      <h1>{query.get("surname")}</h1>
    </div>
  );
}

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default LocationSample;
