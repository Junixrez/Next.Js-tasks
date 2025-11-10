"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function CSR() {
  const [data, setData] = useState([]);
  async function fetchData() {
    const res = await fetch("https://6912588152a60f10c8216486.mockapi.io/name");
    const names = await res.json();
    setData(names);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" grid grid-cols-4 text-center">
      {data.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
}
