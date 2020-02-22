import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import { apiBack } from "../components/config"

import Card from "components/Card/Card.jsx";

class TableList extends Component {
  constructor(){
    super()
    this.state = {
      contrats : []
    }
  }
  componentDidMount(){
    fetch(apiBack + '/contrats').then((resp) => resp.json()).then(contrats => {
      this.setState({
        contrats
      })
    }).catch(error => { console.log(error); });
  }
  render() {
    var contrats = []
    for (let i = 0; i < this.state.contrats.length; i++) {
      const data = this.state.contrats[i];
      console.log(data);
      contrats.push(
                         <tr key={i}>
                          <td>{data.Numero}</td>
                          <td>{data.Nom + ' ' + data.prenom}</td>
                          <td>{data.marque}</td>
                          <td>{data.depart + ' - ' + data.heureDep}</td>
                          <td>{data.retour + ' - ' + data.heureRet}</td>
                          <td>{data.TotalTTC.toFixed(2)}</td>
                          <td>{data.caution.toFixed(2)}</td>
                          <td>Contrat</td>
                          <td>Etat des lieux</td>
                        </tr>
      )
    }
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card 
                title="Contrats"
                category="Liste de tous les contrats"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped bordered hover>
                       <thead>
                        <tr>
                          <th>N° Contrat</th>
                          <th>Nom | Prénom</th>
                          <th>Véhicule</th>
                          <th>Date et heure de départ</th>
                          <th>Date et heure du retour</th>
                          <th>Montant Total </th>
                          <th>Caution</th>
                          <th>Contrat</th>
                          <th>Etat des lieux</th>
                        </tr>
                      </thead>
                      <tbody>
                        {contrats}
                      </tbody>
                  </Table>
                }
              />
            </Col>

          </Row>
        </Grid>
      </div>
    );
  }
}

export default TableList;
