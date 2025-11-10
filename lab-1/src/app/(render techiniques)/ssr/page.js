import React from "react";

async function fetchData() {
  const res = await fetch("https://6912588152a60f10c8216486.mockapi.io/name", {
    cache: "no-store",
  });
  return await res.json();
}

export default async function SSR() {
  const names = await fetchData();
  return (
    <div className=" grid grid-cols-4 text-center">
      {names.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
}
