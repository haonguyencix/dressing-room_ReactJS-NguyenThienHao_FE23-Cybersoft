import React, { Component } from "react";
import { connect } from "react-redux";

class Model extends Component {
  styles = {
    bikinitop: {
      width: "250px",
      height: "500px",
      background: 'url(./images/allbody/bikini_branew.png)',
      position: "absolute",
      top: "12%",
      left: "22%",
      zIndex: "3"
    },
    bikinibottom: {
      width: "250px",
      height: "500px",
      background: 'url("./images/allbody/bikini_pantsnew.png")',
      position: "absolute",
      top: "12%",
      left: "22%",
      zIndex: "2"
    },
    footleft: {
      width: "25px",
      height: "41px",
      background: 'url("./images/allbody/feet_high_leftnew.png")',
      position: "absolute",
      bottom: "6.5%",
      left: "40.4%",
      zIndex: "1"
    },
    footright: {
      width: "25px",
      height: "41px",
      background: 'url("./images/allbody/feet_high_rightnew.png")',
      position: "absolute",
      bottom: "6.5%",
      right: "33.3%",
      zIndex: "1"
    },
    body: {
      width: "250px",
      height: "500px",
      background: 'url("images/allbody/bodynew.png")',
      position: "absolute",
      top: "12%",
      left: "22%"
    },
    head: {
      width: "60px",
      height: "77px" ,
      background: 'url("images/model/1000new.png")',
      position: "absolute",
      top: "5%",
      left: "45.5%",
      zIndex: "1"
    },
    contain: {
      width: "460px",
      height: "590px",
      margin: "0 auto" ,
      background: 'url("images/background/background_998.jpg")',
      position: "relative"
    },
    topClothes: {
      width: "250px",
      height: "500px",
      backgroundSize: "cover",
      position: "absolute",
      top: "12%",
      left: "22%",
      zIndex: "3"
    },
    botClothes: {
      width: "250px",
      height: "500px",
      backgroundSize: "cover",
      position: "absolute",
      top: "12%",
      left: "22%",
      zIndex: "4"
    },
    shoes: {
      width: "200px",
      height: "500px",
      backgroundPosition: "center bottom",
      backgroundSize: "cover",
      position: "absolute",
      bottom: "2%",
      left: "27.5%",
      zIndex: "4"
    }
  }
  render() {
    return (
      <div style={this.styles.contain}>
        <div style={this.styles.body} />
        <div style={this.styles.head} />
        <div style={this.styles.bikinitop} />
        <div style={{...this.styles.topClothes, backgroundImage: `url(${this.props.accessories.topclothes})`}} />
        <div style={this.styles.bikinibottom} />
        <div style={{...this.styles.botClothes, backgroundImage: `url(${this.props.accessories.botclothes})`}} />
        <div style={this.styles.footleft} />
        <div style={this.styles.footright} />
        <div style={{...this.styles.shoes, backgroundImage: `url(${this.props.accessories.shoes})`}} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    accessories: state.model
  }
}

export default connect(mapStateToProps) (Model);
