import React, { Component } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Tabs from "./Tabs";
import Product from "./Product";
import Model from "./Model";
import "../../assets/css/style.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="w-100 mb-4">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Tabs />
              <Product />
            </div>
            <div className="col-6">
              <Model />
            </div>
          </div>
          <div className="row">
            <div className="w-100 mt-1">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
