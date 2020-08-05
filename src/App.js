import React from "react";
import UsersData from "./data/users.json";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

function App() {
  var siteName = "vežbe react";
  return (
    <div className="App">
      <Header site={siteName} />
      <Main users={UsersData.results} />
      <Footer site={siteName} />
    </div>
  );
}

export default App;
