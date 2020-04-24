import React from "react";
import Header from "./Layout/Navbar";
import TapList from "./Tap/List";
import KegAdd from "./Keg/Add";
import KegDetails from "./Keg/Details";
import KegEdit from "./Keg/Edit";
import DeleteConfirm from "./Keg/DeleteConfirmModal";
//bootstrap styling
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOrder: 1,
      showModel: null,
      currentKeg: {},
      toolView: 0,
      kegs: [
        {
          beer: "Dirty Dan Ale",
          brewery: "Mnt Brewery",
          price: 3,
          aContent: 9,
          pints: 4,
          id: "1",
          createAt: 1587762467285
        },
        {
          beer: "Cream Ale",
          brewery: "Pelican Brewery",
          price: 7,
          aContent: 7,
          pints: 10,
          id: "2",
          createAt: 1587762429777
        },
        {
          beer: "Golden Girls Pale Ale",
          brewery: "St. Olaf Brewery",
          price: 10,
          aContent: 2,
          pints: 124,
          id: "3",
          createAt: 1587762424204
        }
      ]
    };
  }

  hangleShowAddKey = () => {
    this.setState({ toolView: 0 });
  };

  handleShowBeerDetail = (id) => {
    const thisKeg = this.state.kegs.filter((keg) => keg.id === id);
    this.setState({ currentKeg: thisKeg[0], toolView: 1 });
  };

  handleMinuPint = (index) => {
    const allKegs = this.state.kegs;
    if (allKegs[index].pints > 0) {
      allKegs[index].pints -= 1;
      this.setState({ kegs: allKegs });
    }
  };

  handleNewKeg = (newKeg) => {
    const newKegList = this.state.kegs.concat(newKeg);
    this.setState({ kegs: newKegList });
  };

  handleFormEdit = (updatedKeg) => {
    const editedKegsList = this.state.kegs
      .filter((keg) => {
        return keg.id !== this.state.currentKeg.id;
      })
      .concat(updatedKeg);
    this.setState({ kegs: editedKegsList, toolView: 0 });
  };

  handleDeleteKeg = () => {
    const trimmedKegList = this.state.kegs.filter((keg) => {
      return keg.id !== this.state.currentKeg.id;
    });

    this.setState({ kegs: trimmedKegList, toolView: 0 });
  };

  handleShowEdit = () => {
    this.setState({ toolView: 2 });
  };

  handleClose = () => {
    this.setState({ showModel: false });
  };
  handleShow = () => {
    this.setState({ showModel: true });
  };
  render() {
    let toolView;

    if (this.state.toolView === 0) {
      toolView = <KegAdd formSubmissionHandler={this.handleNewKeg} />;
    } else if (this.state.toolView === 1) {
      toolView = (
        <KegDetails
          keg={this.state.currentKeg}
          onAddKegClick={this.hangleShowAddKey}
          onEditClick={this.handleShowEdit}
          onDeleteClick={this.handleShow}
        />
      );
    } else if (this.state.toolView === 2) {
      toolView = (
        <KegEdit
          onformEditClick={this.handleFormEdit}
          keg={this.state.currentKeg}
          onAddKegClick={this.hangleShowAddKey}
        />
      );
    }

    return (
      <div className="App">
        <Header />
        <Container>
          <Row>
            <Col xs={12} md={7}>
              <TapList
                tapList={this.state.kegs}
                onMinusPintClick={this.handleMinuPint}
                onDetailClick={this.handleShowBeerDetail}
                listAccend={this.state.listOrder}
              />
            </Col>
            <Col xs={12} md={5}>
              {toolView}
            </Col>
          </Row>
        </Container>
        <DeleteConfirm
          onDeleteClick={this.handleDeleteKeg}
          onClose={this.handleClose}
          show={this.state.showModel}
          beer={this.state.currentKeg.beer}
        />
      </div>
    );
  }
}

export default App;
