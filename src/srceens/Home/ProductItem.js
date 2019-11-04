import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItem extends Component {
  render() {
    const { imgSrc_jpg, name, imgSrc_png, type } = this.props.prod;
    return (
      <div className="card">
        <img alt="clothes" src={imgSrc_jpg} style={{ width: "100%", height: 130 }} />
        <p>{name}</p>
        <button className="btn btn-info" onClick={() => this.props.setAccessories(imgSrc_png, type)}>
          Thử
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setAccessories: (accessories, type) => {
      dispatch({
        type: "SET_ACCESSORIES",
        payload: {
          accessories, type
        }
      });
    }
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(ProductItem);
