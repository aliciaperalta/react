import { useState, useEffect } from "react";

export function Usuarios() {
  const users = [
    { id: 1, name: "Yogur", image: "https://robohash.org/user1" },
    { id: 2, name: "Maria", image: "https://robohash.org/user2" },
  ];
  useEffect(() =>
    console.log('HI'), {}
  )
  return (
    <div>
      {
        users.map(e => {
          return (
            <>
              <p>{e.name}</p>
              <img src={e.image} />
            </>
          )
        })
      }
    </div>
  )
}