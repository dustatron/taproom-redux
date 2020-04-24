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
      kegs: [
        { beer: "Dirty Dan Ale", brewery: "Mnt Brewery", price: 4, aContent: 9, pints: 124, id: 1 },
        { beer: "Cream Ale", brewery: "Pelican Brewery", price: 7, aContent: 7, pints: 124, id: 2 },
        { beer: "Golden Girls Pale Ale", brewery: "St. Olaf Brewery", price: 4, aContent: 2, pints: 124, id: 3 }
      ]
    };
  }

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
    return (
      <div className="App">
        <Header />
        <Container>
          <Row>
            <Col xs={12} md={7}>
              <TapList tapList={this.state.kegs} onMinusPintClick={this.handleMinuPint} />
            </Col>
            <Col xs={6} md={5}>
              <KegAdd formSubmissionHandler={this.handleNewKeg} />
              {/* <KegDetails />
              <KegEdit /> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
