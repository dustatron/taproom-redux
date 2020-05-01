import React from 'react';
import TapItem from './TapItem';
import PropTypes from 'prop-types';

function TapList(props) {
  return (
    <div className="TapList">
      <h1 className="text-center tap-header"> TAP LIST </h1>
      {Object.values(props.tapList)
        .sort((a, b) => {
          return new Date(b.createAt) - new Date(a.createAt);
        })
        .map((tap, index) => (
          <TapItem
            count={index}
            id={tap.id}
            beer={tap.beer}
            brewery={tap.brewery}
            price={tap.price}
            aContent={tap.aContent}
            pints={tap.pints}
            onMinusClick={props.onMinusPintClick}
            onShowBeerDetail={props.onDetailClick}
            key={tap.id}
          />
        ))}
    </div>
  );
}

TapList.propTypes = {
  tapList: PropTypes.object,
  onDetailClick: PropTypes.func,
  listAccend: PropTypes.bool
};

export default TapList;
