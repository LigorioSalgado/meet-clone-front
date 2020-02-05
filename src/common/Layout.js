import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <>
      {" "}
      {/* React Fragament  */}
      <Navbar />
      <main className="container">
          {props.children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
