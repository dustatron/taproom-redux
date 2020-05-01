import React from 'react';
import Header from './Layout/Navbar';
import TapList from './Tap/TapList';
import KegAdd from './Keg/KegAdd';
import KegDetails from './Keg/KegDetails';
import KegEdit from './Keg/KegEdit';
import DeleteConfirm from './Keg/DeleteConfirm';
//redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//bootstrap styling
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function App(props) {
  const handleShowAddKey = () => {
    this.setState({ toolView: 0 });
  };

  const handleShowBeerDetail = (id) => {
    const thisKeg = this.props.kegs.filter((keg) => keg.id === id);
    this.setState({ currentKeg: thisKeg[0], toolView: 1 });
  };

  const handleMinuPint = (index) => {
    const allKegs = this.props.kegs;
    if (allKegs[index].pints > 0) {
      allKegs[index].pints -= 1;
      this.setState({ kegs: allKegs });
    }
  };

  const handleNewKeg = (newKeg) => {
    const newKegList = this.props.kegs.concat(newKeg);
    this.setState({ kegs: newKegList });
  };

  const handleFormEdit = (updatedKeg) => {
    const editedKegsList = this.props.kegs
      .filter((keg) => {
        return keg.id !== this.props.currentKeg.id;
      })
      .concat(updatedKeg);
    this.setState({ kegs: editedKegsList, toolView: 0 });
  };

  const handleDeleteKeg = () => {
    const trimmedKegList = this.props.kegs.filter((keg) => {
      return keg.id !== this.props.currentKeg.id;
    });

    this.setState({ kegs: trimmedKegList, toolView: 0 });
  };

  const handleShowEdit = () => {
    this.setState({ toolView: 2 });
  };

  const handleClose = () => {
    this.setState({ showModel: false });
  };
  const handleShow = () => {
    this.setState({ showModel: true });
  };

  let toolView;

  if (props.toolView === 0) {
    toolView = <KegAdd formSubmissionconstHandler={handleNewKeg} />;
  } else if (props.toolView === 1) {
    toolView = (
      <KegDetails
        keg={props.currentKeg}
        onAddKegClick={handleShowAddKey}
        onEditClick={handleShowEdit}
        onDeleteClick={handleShow}
      />
    );
  } else if (props.toolView === 2) {
    toolView = <KegEdit onformEditClick={handleFormEdit} keg={props.currentKeg} onAddKegClick={handleShowAddKey} />;
  }

  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <TapList
              tapList={props.kegs}
              onMinusPintClick={handleMinuPint}
              onDetailClick={handleShowBeerDetail}
              listAccend={props.listOrder}
            />
          </Col>
          <Col xs={12} md={4}>
            {toolView}
          </Col>
        </Row>
      </Container>
      <DeleteConfirm
        onDeleteClick={handleDeleteKeg}
        onClose={handleClose}
        show={props.showModel}
        beer={props.currentKeg.beer}
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
    selectedKeg: state.selectedKegReducer,
    kegList: state.kegListReducer,
    showModal: state.showModalReducer,
    toolView: state.toolViewReducer
  };
};
// eslint-disable-next-line
App = connect(mapStateToProps)(App);
export default App;
