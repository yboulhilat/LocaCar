// eslint-disable-next-line
import React, { Component } from "react";
// import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import logo from "../logo.svg";

import { StatsCard } from "components/StatsCard/StatsCard.jsx";


class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Nombre de contrats"
                statsValue="200"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Chiffre d'affaire"
                statsValue="1,345 €"
              />
            </Col>
            <img src={logo} alt="logo_image" />
          </Row>
          
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
