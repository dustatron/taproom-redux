import React from "react";
import Item from "./Item";

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
        />
      ))}
    </div>
  );
}

export default TapList;
