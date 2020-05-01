import React from 'react';
import Header from './Layout/Navbar';
import TapList from './Tap/TapList';
import KegAdd from './Keg/KegAdd';
import KegDetails from './Keg/KegDetails';
import KegEdit from './Keg/KegEdit';
import DeleteConfirm from './Keg/DeleteConfirm';
import * as a from './../actions/index';

//redux
import { connect } from 'react-redux';

//prop-types
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
    dispatch(a.viewKegAdd());
  };

  const handleViewKegDetails = (id) => {
    const selectKeg = props.kegList[id];
    dispatch(a.viewKegDetails(id));
    dispatch(a.changeSelected(selectKeg));
  };

  const handleViewKegEdit = (id) => {
    dispatch(a.viewKegEdit(id));
  };

  /////////////////////////////////////////////
  //------------ Keg CRUD methods -------- //
  //////////////////////////////////////////

  const handleSellPint = (id) => {
    dispatch(a.sellPint(id));
  };

  const handleAddKeg = (newKeg) => {
    dispatch(a.addKeg(newKeg));
  };

  const handleEditKeg = (updatedKeg) => {
    dispatch(a.addKeg(updatedKeg));
  };

  const handleDeleteKeg = () => {
    dispatch(a.deleteKeg(props.selectedKeg.id));
    dispatch(a.viewKegAdd());
  };

  // --- delete confirmation
  const toggleModal = () => {
    dispatch(a.toggleModal());
  };

  //////////////////////////////////////////////////
  //------------ checking tool view state ------ //
  // ----------- render  view tool state ------ //
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
