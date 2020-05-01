import React from 'react';
import Header from './Layout/Navbar';
import TapList from './Tap/TapList';
import KegAdd from './Keg/KegAdd';
import KegDetails from './Keg/KegDetails';
import KegEdit from './Keg/KegEdit';
import DeleteConfirm from './Keg/DeleteConfirm';
import * as actions from '../actions';

//redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//bootstrap styling
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function App(props) {
  // loading dispatch
  const { dispatch } = props;

  ///////////////////////////////////////////
  //------------ change tool view -------- //
  //////////////////////////////////////////
  const handleViewKegAdd = () => {
    dispatch(actions.viewKegAdd());
  };

  const handleViewKegDetails = (id) => {
    const selectKeg = props.kegList[id];
    dispatch(actions.viewKegDetails(id));
    dispatch(actions.changeSelected(selectKeg));
  };

  const handleViewKegEdit = (id) => {
    dispatch(actions.viewKegEdit(id));
  };
  //////////////////////////////////////
  //------------ Keg Actions -------- //
  //////////////////////////////////////
  const handleSellPint = (id) => {
    dispatch(actions.sellPint(id));
  };

  const handleAddKeg = (newKeg) => {
    dispatch(actions.addKeg(newKeg));
  };

  const handleEditKeg = (updatedKeg) => {
    dispatch(actions.addKeg(updatedKeg));
  };

  const handleDeleteKeg = () => {
    dispatch(actions.deleteKeg(props.selectedKeg.id));
    dispatch(actions.viewKegAdd());
  };

  const toggleModal = () => {
    dispatch(actions.toggleModal());
  };

  //////////////////////////////////////////////////
  //------------ checking tool view state ------ //
  // ----------- and render tool state -------- //
  ///////////////////////////////////////////////

  let toolView;

  if (props.toolView === 0) {
    //show add keg form
    toolView = <KegAdd formSubmissionHandler={handleAddKeg} />;
  } else if (props.toolView === 1) {
    //show details
    toolView = (
      <KegDetails
        keg={props.selectedKeg}
        onAddKegClick={handleViewKegAdd}
        onEditClick={handleViewKegEdit}
        onDeleteClick={toggleModal}
      />
    );
  } else if (props.toolView === 2) {
    //show edit form
    toolView = <KegEdit onformEditClick={handleEditKeg} keg={props.selectedKeg} onAddKegClick={handleViewKegAdd} />;
  }

  return (
    <div className="App">
      <Header />
      {/* //////////////////////////////////////////
      //------------   Main Page  -------------- //
      ///////////////////////////////////////// */}
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <TapList
              tapList={props.kegList}
              onMinusPintClick={handleSellPint}
              onDetailClick={handleViewKegDetails}
              listAccend={props.listOrder}
            />
          </Col>

          <Col xs={12} md={4}>
            {toolView}
          </Col>
        </Row>
      </Container>

      {/* //////////////////////////////////////
      //------------   Modal  -------------- //
      ////////////////////////////////////// */}
      <DeleteConfirm
        onDeleteClick={handleDeleteKeg}
        onClose={toggleModal}
        show={props.showModal}
        beer={props.selectedKeg.beer}
      />
    </div>
  );
}

App.propTypes = {
  selectedKeg: PropTypes.object,
  KegList: PropTypes.object,
  showModal: PropTypes.bool,
  toolView: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    selectedKeg: state.selectedKeg,
    kegList: state.kegList,
    showModal: state.showModal,
    toolView: state.toolView
  };
};
// eslint-disable-next-line
App = connect(mapStateToProps)(App);
export default App;
