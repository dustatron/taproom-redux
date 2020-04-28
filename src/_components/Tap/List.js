import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function TapList(props) {
  return (
    <div className="TapList">
      <h1 className="text-center tap-header"> TAP LIST </h1>
      {props.tapList
        .sort((a, b) => {
          return new Date(b.createAt) - new Date(a.createAt);
        })
        .map((tap, index) => (
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

TapList.propTypes = {
  tapList: PropTypes.array,
  onDetailClick: PropTypes.func,
  listAccend: PropTypes.bool
};

export default TapList;
