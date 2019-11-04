import React, { Component } from "react";
import { connect } from "react-redux";

class Tabs extends Component {
  buttonArr = [
    { tabName: "tabTopClothes", showName: "Áo", type: "topclothes" },
    { tabName: "tabBotClothes", showName: "Quần", type: "botclothes" },
    { tabName: "tabShoes", showName: "Giày dép", type: "shoes" },
    { tabName: "tabHandBags", showName: "Túi xách", type: "handbags" },
    { tabName: "tabNecklaces", showName: "Dây chuyền", type: "necklaces" },
    // { tabName: 'tabModels', showName: 'Người mẫu', type: 'models' },
    { tabName: "tabHairStyle", showName: "Kiểu tóc", type: "hairstyle" },
    { tabName: "tabBackground", showName: "Nền", type: "background" }
  ];
  
  render() {
    return (
      <div
        className="btn-pref btn-group btn-group-justified btn-group-lg"
        role="group"
        aria-label="..."
      >
        {this._renderButton(this.buttonArr)}
      </div>
    );
  }

  componentDidMount(){
    this.props.setFilterByType('topclothes')
  }

  _renderButton = (data = []) => {
    return data.map((item, i) => {
      return (
        <div key={i} className="btn-group" role="group">
          <button
            type="button"
            className={`btn ${item.type === this.props.filterByType? 'btn-primary': ''}`}
            onClick={() => this.props.setFilterByType(item.type)}
          >
            <div className="hidden-xs">{item.showName}</div>
          </button>
        </div>
      );
    });
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setFilterByType: filterByType => {
      const action = {
        type: "SET_FILTER_BY_TYPE",
        payload: filterByType
      };
      dispatch(action);
    }
  };
};

const mapStateToProps = state => {
  return {
    filterByType: state.filter.byType
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs);

// npm i -D clsx: nối chuỗi thay vì dùng string template
// syntax: import clsx from 'clsx';
// className={clsx('btn'), item.type === this.props.filterByType? 'btn-primary': ''}