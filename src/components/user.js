import React, { useState } from "react";

export default function User({ data }) {
  const [classChange, setClassChange] = useState(false);
  function handleOnClick() {
    setClassChange(!classChange);
  }
  return (
    <div
      className={classChange ? "cardClicked" : "card"}
      onClick={handleOnClick}
    >
      <div className="title">{data.name.title}</div>
      <div className="first">
        {data.name.first + " "}
        {data.name.last}
      </div>
      <div className="nat">{data.nat}</div>
      <div className="imgWrap">
        <div
          className="img"
          style={{ backgroundImage: `url(${data.picture.medium})` }}
        ></div>
      </div>

      <div
        className="genderLabel"
        style={{ display: classChange ? "flex" : "none" }}
      >
        Sex
      </div>
      <div
        className="gender"
        style={{ display: classChange ? "flex" : "none" }}
      >
        {data.gender}
      </div>
      <div
        className="ageLabel"
        style={{ display: classChange ? "flex" : "none" }}
      >
        Age
      </div>
      <div className="age" style={{ display: classChange ? "flex" : "none" }}>
        {data.dob.age}
      </div>
      <div
        className="dateLabel"
        style={{ display: classChange ? "flex" : "none" }}
      >
        Born
      </div>
      <div className="date" style={{ display: classChange ? "flex" : "none" }}>
        {data.dob.date.slice(0, 10)}
      </div>
      <div
        className="contact"
        style={{ display: classChange ? "flex" : "none" }}
      >
        Contact
      </div>
      <div className="cell" style={{ display: classChange ? "flex" : "none" }}>
        {data.cell}
        <br></br>
        {data.phone}
      </div>

      <div className="email" style={{ display: classChange ? "flex" : "none" }}>
        {data.email}
      </div>
      <div
        className="adress"
        style={{ display: classChange ? "flex" : "none" }}
      >
        Adress
      </div>
      <div
        className="street"
        style={{ display: classChange ? "flex" : "none" }}
      >
        {data.location.street.name + " " + data.location.street.number}
        <br></br>
        {data.location.postcode + " " + data.location.city}
      </div>
      <div className="city" style={{ display: classChange ? "flex" : "none" }}>
        {data.location.state + ", " + data.location.country}
      </div>

      <div className="arrowWrap">
        <div className={classChange ? "arrowClicked" : "arrow"}></div>
      </div>
    </div>
  );
}
