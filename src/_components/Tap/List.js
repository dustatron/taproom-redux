import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function TapList(props) {
  return (
    <div className="TapList">
      <h1 className="text-center"> Tap List </h1>
      {props.tapList.map((tap, index) => (
        <Item
          count={index}
          id={tap.id}
          beer={tap.beer}
          brewery={tap.brewery}
          price={tap.price}
          aContent={tap.aContent}
          pints={tap.pints}
          onMinusClick={props.onMinusPintClick}
          onShowBeerDetail={props.onDetailClick}
        />
      ))}
    </div>
  );
}

export default TapList;

TapList.propTypes = {
  tapList: PropTypes.array,
  onDetailClick: PropTypes.func
};
