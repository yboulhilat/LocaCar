
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Breadcrumb,
  ListGroup, ListGroupItem
} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import ReactBSAlert from "react-bootstrap-sweetalert";
import { apiBack } from "../components/config"
class NewContrat extends Component {
  constructor(){
    super()
    this.state = {
      qteJour : 0,
      prixJour : 0,
      kmSupp : 0,
      prixKm : 0,
      totalKm : 0,
      franchiseQte : 0,
      franchisePrix : 0,
      franchiseTotal : 0,
      assitanceQte : 0,
      assitancePrix : 0,
      assitanceTotal : 0,
      carburantQte : 0,
      carburantPrix: 0,
      carburantTotal: 0,
      prestationQte : 0,
      prestationPrix : 0,
      prestationTotal : 0,
      caution : 0,
      alert : null
    }
  }
  FormValue = (event) => {
    this.setState({ [event.target.name]: event.target.value,  });
  }
  // _Validation(prestationTotal, carburantTotal,assitanceTotal, franchiseTotal, TotalHTCalcule, TVA, TotalTTC){
  //   console.log(prestationTotal, carburantTotal,assitanceTotal, franchiseTotal, TotalHTCalcule, TVA, TotalTTC);
   

  //   // this.props.history.push('/admin/noueau-contrat-2', this.state)
  // }
  _Validation = (prestationTotal, carburantTotal,assitanceTotal, franchiseTotal, TotalHTCalcule, TVA, TotalTTC) =>{
    console.log(prestationTotal, carburantTotal,assitanceTotal, franchiseTotal, TotalHTCalcule, TVA, TotalTTC);
    const { Nom, prenom ,
      societe,
      adresse,
      codePostale,
      ville,
      phone,
      email ,
      nomCond ,
      PrenoCond ,
      Permisn ,
      Delivre ,
      naissance ,
      lieuNaiss ,
      marque ,
      modele ,
      immat ,
      type ,
      serie,
      couleur ,
      depart ,
      heureDep ,
      kmDepart ,
      retour ,
      heureRet ,
      kmRetour ,
      } = this.props.history.location.state;
      const {
        qteJour ,
        prixJour ,
        kmSupp ,
        prixKm ,
        franchiseQte ,
        franchisePrix ,
        assitanceQte,
        assitancePrix ,
        carburantQte ,
        carburantPrix,
        prestationQte ,
        prestationPrix ,
        caution ,
        } = this.state;
    var detailContrat = JSON.stringify({
      Nom: Nom, 
      prenom :prenom ,
      societe:societe,
      adresse:adresse,
      codePostale:codePostale,
      ville:ville,
      phone:phone,
      email :email ,
      nomCond :nomCond ,
      PrenoCond :PrenoCond,
      Permisn :Permisn ,
      Delivre :Delivre ,
      naissance :naissance ,
      lieuNaiss :lieuNaiss ,
      marque :  marque ,
      modele :modele ,
      immat :immat ,
      type :type ,
      serie: serie,
      couleur : couleur ,
      depart : depart ,
      heureDep :heureDep ,
      kmDepart :kmDepart ,
      retour :retour ,
      heureRet :heureRet ,
      kmRetour :kmRetour ,
      qteJour : qteJour ,
      prixJour : prixJour ,
      kmSupp :  kmSupp ,
      prixKm :  prixKm ,
      franchiseQte : franchiseQte ,
      franchisePrix :  franchisePrix ,
      assitanceQte:  assitanceQte,
      assitancePrix :  assitancePrix ,
      carburantQte :  carburantQte ,
      carburantPrix:  carburantPrix,
      prestationQte : prestationQte ,
      prestationPrix : prestationPrix ,
      caution : caution ,
      prestationTotal : prestationTotal, 
      carburantTotal : carburantTotal,
      assitanceTotal : assitanceTotal,
      franchiseTotal :  franchiseTotal,
      TotalHTCalcule : TotalHTCalcule,
      TVA:TVA,
      TotalTTC:TotalTTC
    });
     
      fetch(apiBack + '/new-contrat', {
        method: 'post', headers: { 'Content-Type': 'application/json' },
        body: detailContrat,
      }).then((resp) => resp.json()).then(data => {
        console.log('Enregistrement contrat ', data)
        if (!data.result) {
          this.setState({
            alert: (
              <ReactBSAlert
                warning
                style={{ display: "block" }}
                title="Warning"
                onConfirm={() => this.hideAlert()}
                onCancel={() => this.hideAlert()}
                confirmBtnBsStyle="warning"
                confirmBtnText="Modifier"
                btnSize=""
              >
                Une erreur s'est produit, merci de recommencer l'opération
            </ReactBSAlert>
            )
          });
        } else {
          this.setState({
            alert: (
              <ReactBSAlert
                success
                style={{ display: "block" }}
                title="Success"
                onConfirm={() => this.confirmAlert()}
                onCancel={() => this.confirmAlert()}
                confirmBtnBsStyle="success"
                confirmBtnText="Continuer"
                btnSize="lg"
              >
               Contrat validé
            </ReactBSAlert>
            )
          });
        }
      }).catch(error => { console.log(error); });
  }

  hideAlert = () => {
    this.setState({
      alert: null
    });
  };
  confirmAlert = () => {
    this.props.history.push("/admin/comptabilite")
  };
  render() {
    const {
    qteJour ,
    prixJour ,
    kmSupp ,
    prixKm ,
    franchiseQte ,
    franchisePrix ,
    assitanceQte,
    assitancePrix ,
    carburantQte ,
    carburantPrix,
    prestationQte ,
    prestationPrix ,
    caution ,
    alert
    } = this.state;
    var prestationTotal = prestationPrix * prestationQte
    var carburantTotal = carburantPrix * carburantQte
    var assitanceTotal = assitancePrix * assitanceQte
    var franchiseTotal = franchisePrix * franchiseQte
    var totalKm = prixKm * kmSupp
    var totalJour = prixJour * qteJour
    var TotalTTC = prestationTotal + carburantTotal + assitanceTotal + franchiseTotal + totalKm + totalJour
    var TVA = TotalTTC - (TotalTTC / 1.2)
    var TotalHTCalcule = TotalTTC - TVA;
    console.log(this.state);
    return (
      <div className="content">
        
        <Grid>
          <Row>
            <Col md={12}>
            
              <Card
                title="Nouveau contrat"
                content={
                  <form>
                   <Col md={12}>
                   {alert}
                    <Breadcrumb>
                    <Breadcrumb.Item href="#">Forfait/Tarifs</Breadcrumb.Item>
                    </Breadcrumb>
                    <FormInputs
                      ncols={["col-md-4","col-md-2","col-md-3","col-md-3"]}
                      properties={[
                        {
                          type: "text",
                          bsClass: "form-control",
                          label: "Description",
                          placeholder: "Forfait journalier",
                          defaultValue: "Jours prévus"
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          label: "Nombre de jours",
                          placeholder: "Nombre de jours",
                          name : 'qteJour',
                          onChange : this.FormValue 
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          label: "Prix/jour",
                          placeholder: "Prix/jour en TTC",
                          name : 'prixJour',
                          onChange : this.FormValue 
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Total TTC",
                          label: "Total TTC",
                          value: totalJour,
                          name : 'totalJour',
                          onChange : this.FormValue
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4","col-md-2","col-md-3","col-md-3"]}
                      properties={[
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Date",
                          defaultValue: "Kilométrage supplémentaire"
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Saisir le nombre de km supplémentaire",
                          name : 'kmSupp',
                          onChange : this.FormValue
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Prix au Km",
                          name : 'prixKm',
                          onChange : this.FormValue
                        } ,
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Total HT",
                          value: totalKm,
                          name : 'totalKm',
                          onChange : this.FormValue
                        }
                      ]}
                    />
                   </Col>
                   <Col md={12}>
                    <Breadcrumb>
                    <Breadcrumb.Item href="#">Options | Cautions </Breadcrumb.Item>
                    </Breadcrumb>
                    <FormInputs
                      ncols={["col-md-4","col-md-2","col-md-3","col-md-3"]}
                      properties={[
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Franchise et réparation",
                          defaultValue: "Franchise et réparation"
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Quantité",
                          name : 'franchiseQte',
                          onChange : this.FormValue
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Prix unitaire",
                          name : 'franchisePrix',
                          onChange : this.FormValue
                        } ,
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Total HT",
                          value: franchiseTotal,
                          name : 'franchiseTotal',
                          onChange : this.FormValue
                        }
                      ]}
                    />
                     <FormInputs
                      ncols={["col-md-4","col-md-2","col-md-3","col-md-3"]}
                      properties={[
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Assistance",
                          defaultValue: "Assistance"
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Quantité",
                          name : 'assitanceQte',
                          onChange : this.FormValue
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Prix unitaire",
                          name : 'assitancePrix',
                          onChange : this.FormValue
                        } ,
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Total HT",
                          value: assitanceTotal,
                          name : 'assitanceTotal',
                          onChange : this.FormValue
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4","col-md-2","col-md-3","col-md-3"]}
                      properties={[
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Carburant",
                          defaultValue: "Carburant"
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Quantité",
                          name : "carburantQte",
                          onChange : this.FormValue
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Prix unitaire", 
                          name : 'carburantPrix', 
                          onChange : this.FormValue
                        } ,
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Total HT", 
                          value: carburantTotal,
                          name : 'carburantTotal',
                          onChange : this.FormValue
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4","col-md-2","col-md-3","col-md-3"]}
                      properties={[
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Prestations",
                          defaultValue: "Prestations"
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Quantité",
                          name : 'prestationQte',
                          onChange : this.FormValue 
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Prix unitaire",
                          name : 'prestationPrix',
                          onChange : this.FormValue 
                        } ,
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Total HT",
                          value: prestationTotal,
                          name : 'prestationTotal',
                          onChange : this.FormValue
                          
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-2","col-md-2","col-md-3",]}
                      properties={[
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Caution",
                          defaultValue: "Caution"
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Mode de paiement de la caution",
                          defaultValue: ""
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Montant de la caution",
                          defaultValue: caution,
                          name : 'caution',
                          onChange : this.FormValue 
                        }
                      ]}
                    />
                   </Col>
                   <Col md={8}>

                   </Col>
                   <Col md={4}>
                   <ListGroup>
                    <ListGroupItem style={{textAlign:'right'}}>TOTAL HT : {TotalHTCalcule.toFixed(2)} €</ListGroupItem>
                    <ListGroupItem style={{textAlign:'right'}}>TVA (20%) : {TVA.toFixed(2)} €</ListGroupItem>
                    <ListGroupItem style={{textAlign:'right', fontWeight:'bold', fontSize:18}}>TOTAL TTC : {TotalTTC.toFixed(2)} €</ListGroupItem>
                  </ListGroup>
                  </Col>
                   <Col md={12}>
                    <Button bsStyle="danger" pullRight onClick={()=> this._Validation(prestationTotal, carburantTotal,assitanceTotal, franchiseTotal, TotalHTCalcule, TVA, TotalTTC) }>
                    Créer le contrat
                    </Button>
                    </Col>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default NewContrat;
