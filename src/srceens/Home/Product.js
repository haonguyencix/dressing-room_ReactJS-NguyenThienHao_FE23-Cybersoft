import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";

class Product extends Component {
  
  _renderProductItem = (data = [])=> {
    const filterData = data.filter( item => item.type === this.props.filterByType)
    return filterData.map((prod, i) => (
      <div className="col-3">
        <ProductItem key={i} prod={prod} />
      </div>
    ));
  };

  render() {
    // this.props.products
    return (
      <div className="container-fluid">
        <div className="row">
          {this._renderProductItem(this.props.products)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    filterByType: state.filter.byType
  };
};

export default connect(mapStateToProps)(Product); // Này là HOC
