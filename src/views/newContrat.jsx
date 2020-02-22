
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Breadcrumb,
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
      serie : '',
      couleur : '',
      depart : '',
      heureDep : '',
      kmDepart : '',
      retour : '',
      heureRet : '',
      kmRetour : '',
     
    }
  }
  FormValue = (event) => {
    this.setState({ [event.target.name]: event.target.value,  });
  }
  _Suivant(){
    console.log(this.state);
    this.props.history.push('/admin/noueau-contrat-2', this.state)
  }
  render() {
 
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
                          defaultValue: this.state.Nom,
                          name : 'Nom',
                          onChange : this.FormValue 
                        },
                        {
                          label: "Prénom",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Prénom",
                          defaultValue: this.state.prenom,
                          name : 'prenom',
                          onChange : this.FormValue 
                        },
                        {
                          label: "Société",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Société",
                          defaultValue: this.state.societe,
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
                          defaultValue: this.state.adresse,
                          name : 'adresse',
                          onChange : this.FormValue 
                        },
                        {
                          label: "Code postale",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Code postale",
                          defaultValue: this.state.codePostale,
                          name : 'codePostale',
                          onChange : this.FormValue 
                        },
                        {
                          label: "Ville",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Ville",
                          defaultValue: this.state.ville,
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
                          defaultValue: this.state.phone,
                          name : 'phone',
                          onChange : this.FormValue 
                        },
                        {
                          label: "Email",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Email",
                          defaultValue: this.state.email,
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
                          defaultValue:this.state.nomCond,
                          name : "nomCond",
                          onChange : this.FormValue 
                        },
                        {
                          label: "Prénom",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Prénom",
                          defaultValue:this.state.PrenoCond,
                          name : "PrenoCond",
                          onChange : this.FormValue
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
                          defaultValue:this.state.Permisn,
                          name : "Permisn",
                          onChange : this.FormValue
                        },
                        {
                          label: "Délivré le :",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Date",
                          defaultValue:this.state.Delivre,
                          name : "Delivre",
                          onChange : this.FormValue
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
                          defaultValue:this.state.naissance,
                          name : "naissance",
                          onChange : this.FormValue
                        },
                        {
                          label: "Lieu de naissance",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Lieu de naissance",
                          defaultValue:this.state.lieuNaiss,
                          name : "lieuNaiss",
                          onChange : this.FormValue
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
                          defaultValue:this.state.marque,
                          name : "marque",
                          onChange : this.FormValue
                        },
                        {
                          label: "Modèle",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Modèle",
                          defaultValue:this.state.modele,
                          name : "modele",
                          onChange : this.FormValue
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
                          defaultValue:this.state.immat,
                          name : "immat",
                          onChange : this.FormValue
                        },
                        {
                          label: "N° de série",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "N° de série",
                          defaultValue:this.state.serie,
                          name : "serie",
                          onChange : this.FormValue
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
                          defaultValue:this.state.type,
                          name : "type",
                          onChange : this.FormValue
                        },
                        {
                          label: "Couleur extérieur",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Couleur extérieur",
                          defaultValue:this.state.couleur,
                          name : "couleur",
                          onChange : this.FormValue
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
                          defaultValue:this.state.depart,
                          name : "depart",
                          onChange : this.FormValue
                        },
                        {
                          label: "Heure de départ",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Heure",
                          defaultValue:this.state.heureDep,
                          name : "heureDep",
                          onChange : this.FormValue
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
                          defaultValue:this.state.kmDepart,
                          name : "kmDepart",
                          onChange : this.FormValue
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
                          defaultValue:this.state.retour,
                          name : "retour",
                          onChange : this.FormValue
                        },
                        {
                          label: "Heure du retour",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Heure",
                          defaultValue:this.state.heureRet,
                          name : "heureRet",
                          onChange : this.FormValue
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
                          defaultValue:this.state.kmRetour,
                          name : "kmRetour",
                          onChange : this.FormValue
                        },
                      ]}
                    />
                   
                   </Col>
                   <Col md={12}>
                    <Button bsStyle="danger" pullRight onClick={()=> this._Suivant() }>
                      Suivant
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
