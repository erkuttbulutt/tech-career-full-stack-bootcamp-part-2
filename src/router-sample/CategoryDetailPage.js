import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//* bu sayfa açılırken dışarıdan bir id geliyor
function CategoryDetailPage() {
  const [detail, setdetail] = useState([]);
  //* useParams ile id aldık
  let {id} = useParams()

  useEffect(() => {
    axios
      .get(`https://northwind.vercel.app/api/categories/${id}`)
      .then((res) => setdetail(res.data));
  }, []);

  return (
    <>
      <h1>Id: {detail.id}</h1>
      <h1>Name: {detail.name}</h1>
      <h1>Description: {detail.description}</h1>
    </>
  );
}

export default CategoryDetailPage;
