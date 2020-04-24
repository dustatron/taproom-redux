import React from "react";
import Header from "./Layout/Navbar";
import TapList from "./Tap/List";
import KegAdd from "./Keg/Add";
import KegDetails from "./Keg/Details";
import KegEdit from "./Keg/Edit";
//bootstrap styling
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentKeg: {},
      toolView: 0,
      kegs: [
        { beer: "Dirty Dan Ale", brewery: "Mnt Brewery", price: 4, aContent: 9, pints: 124, id: "1" },
        { beer: "Cream Ale", brewery: "Pelican Brewery", price: 7, aContent: 7, pints: 124, id: "2" },
        { beer: "Golden Girls Pale Ale", brewery: "St. Olaf Brewery", price: 4, aContent: 2, pints: 124, id: "3" }
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
    allKegs[index].pints -= 1;
    this.setState({ kegs: allKegs });
  };

  handleNewKeg = (newKeg) => {
    const newKegList = this.state.kegs.concat(newKeg);
    this.setState({ kegs: newKegList });
  };

  render() {
    let toolView;

    if (this.state.toolView === 0) {
      toolView = <KegAdd formSubmissionHandler={this.handleNewKeg} />;
    } else if (this.state.toolView === 1) {
      toolView = <KegDetails keg={this.state.currentKeg} onAddKegClick={this.hangleShowAddKey} />;
    } else if (this.state.toolView === 2) {
      toolView = <KegEdit />;
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
              />
            </Col>
            <Col xs={12} md={5}>
              {toolView}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
