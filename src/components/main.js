import React from "react";
import User from "./user";

export default function Main({ users }) {
  const cards = users.map((each) => {
    return <User data={each} key={each.id.value} />;
  });
  return <div className="main">{cards}</div>;
}
