
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


class NewContrat extends Component {
  constructor(){
    super()
    this.state = {
      Nom : '',
      prenom : '',
      societe : '',
      adresse : '',
      codePostale : '',
      ville : '',
      phone : '',
      email : '',
      nomCond : '',
      PrenoCond : '',
      Permisn : '',
      Delivre : '',
      naissance : '',
      lieuNaiss : '',
      marque : '',
      modele : '',
      immat : '',
      type : '',
      couleur : '',
      depart : '',
      heureDep : '',
      kmDepart : '',
      retour : '',
      heureRet : '',
      kmRetour : '',
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
    }
  }
  FormValue = (event) => {
    this.setState({ [event.target.name]: event.target.value,  });
  }
  render() {
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
    couleur ,
    depart ,
    heureDep ,
    kmDepart ,
    retour ,
    heureRet ,
    kmRetour ,
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
                    <Col md={8}>
                    <Breadcrumb>
                    <Breadcrumb.Item href="#">Le Locataire</Breadcrumb.Item>
                    </Breadcrumb>
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "Nom",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Nom",
                          defaultValue: Nom,
                          name : 'Nom',
                          onChange : this.FormValue 
                        },
                        {
                          label: "Prénom",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Prénom",
                          defaultValue: prenom,
                          name : 'prenom',
                          onChange : this.FormValue 
                        },
                        {
                          label: "Société",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Société",
                          defaultValue: societe,
                          name : 'societe',
                          onChange : this.FormValue 
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "Adresse",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Adresse",
                          defaultValue: adresse,
                          name : 'adresse',
                          onChange : this.FormValue 
                        },
                        {
                          label: "Code postale",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Code postale",
                          defaultValue: codePostale,
                          name : 'codePostale',
                          onChange : this.FormValue 
                        },
                        {
                          label: "Ville",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Ville",
                          defaultValue: ville,
                          name : 'ville',
                          onChange : this.FormValue 
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "Téléphone",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Téléphone",
                          defaultValue: phone,
                          name : 'phone',
                          onChange : this.FormValue 
                        },
                        {
                          label: "Email",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Email",
                          defaultValue: email,
                          name : 'email',
                          onChange : this.FormValue 
                        }
                      ]}
                    />
                   </Col>
                   
                   <Col md={4}>
                    <Breadcrumb>
                    <Breadcrumb.Item href="#">Conducteur principale</Breadcrumb.Item>
                    </Breadcrumb>
                    <FormInputs
                      ncols={["col-md-6","col-md-6"]}
                      properties={[
                        {
                          label: "Nom",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Nom",
                          defaultValue: ""
                        },
                        {
                          label: "Prénom",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Prénom",
                          defaultValue: ""
                        }
                      ]}
                    />
                   <FormInputs
                      ncols={["col-md-6","col-md-6"]}
                      properties={[
                        {
                          label: "Numéro de permis",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Permis N°",
                          defaultValue: ""
                        },
                        {
                          label: "Délivré le :",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Date",
                          defaultValue: ""
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6","col-md-6"]}
                      properties={[
                        {
                          label: "Date de naissance",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Date",
                          defaultValue: ""
                        },
                        {
                          label: "Lieu de naissance",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Lieu de naissance",
                          defaultValue: ""
                        }
                      ]}
                    />
                   </Col>
                   <Col md={4}>
                    <Breadcrumb>
                    <Breadcrumb.Item href="#">Identification du véhicule</Breadcrumb.Item>
                    </Breadcrumb>
                    <FormInputs
                      ncols={["col-md-6","col-md-6"]}
                      properties={[
                        {
                          label: "Marque",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Marque",
                          defaultValue: ""
                        },
                        {
                          label: "Modèle",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Modèle",
                          defaultValue: ""
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6","col-md-6"]}
                      properties={[
                        {
                          label: "Immatriculation",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Immatriculation",
                          defaultValue: ""
                        },
                        {
                          label: "N° de série",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "N° de série",
                          defaultValue: ""
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6","col-md-6"]}
                      properties={[
                        {
                          label: "Type",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Type : Utilitaire, VP, 2 Roues...",
                          defaultValue: ""
                        },
                        {
                          label: "Couleur extérieur",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Couleur extérieur",
                          defaultValue: ""
                        }
                      ]}
                    />
                   
                   </Col>
                   <Col md={4}>
                    <Breadcrumb>
                    <Breadcrumb.Item href="#">Départ du véhicule</Breadcrumb.Item>
                    </Breadcrumb>
                    <FormInputs
                      ncols={["col-md-6","col-md-6"]}
                      properties={[
                        {
                          label: "Date de départ",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Date",
                          defaultValue: ""
                        },
                        {
                          label: "Heure de départ",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Heure",
                          defaultValue: ""
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6"]}
                      properties={[
                        {
                          label: "Kilométrage de départ",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Kilométrage de départ",
                          defaultValue: ""
                        },
                      ]}
                    />
                   
                   </Col>
                   <Col md={4}>
                    <Breadcrumb>
                    <Breadcrumb.Item href="#">Retour du véhicule</Breadcrumb.Item>
                    </Breadcrumb>
                    <FormInputs
                      ncols={["col-md-6","col-md-6"]}
                      properties={[
                        {
                          label: "Date du retour",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Date",
                          defaultValue: ""
                        },
                        {
                          label: "Heure du retour",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Heure",
                          defaultValue: ""
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6"]}
                      properties={[
                        {
                          label: "Kilométrage du retour",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Kilométrage du retour",
                          defaultValue: ""
                        },
                      ]}
                    />
                   
                   </Col>
                   <Col md={12}>
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
                          value: totalKm
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
                          value: franchiseTotal
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
                          value: assitanceTotal
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
                          value: carburantTotal
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
                    <Button bsStyle="danger" pullRight fill type="submit">
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
