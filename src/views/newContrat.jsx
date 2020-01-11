
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Breadcrumb,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";

class NewContrat extends Component {
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
                          defaultValue: ""
                        },
                        {
                          label: "Prénom",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Prénom",
                          defaultValue: ""
                        },
                        {
                          label: "Société",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Société",
                          defaultValue: ""
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
                          defaultValue: ""
                        },
                        {
                          label: "Code postale",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Code postale",
                          defaultValue: ""
                        },
                        {
                          label: "Ville",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Ville",
                          defaultValue: ""
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
                          defaultValue: ""
                        },
                        {
                          label: "Email",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Email",
                          defaultValue: ""
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
                          placeholder: "Forfait journalier",
                          defaultValue: "Jours prévus"
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Nombre de jours",
                          defaultValue: ""
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Prix/jour",
                          defaultValue: ""
                        } ,
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Total HT",
                          defaultValue: "1499"
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
                          defaultValue: ""
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Prix au Km",
                          defaultValue: ""
                        } ,
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Total HT",
                          defaultValue: "1499"
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
                          defaultValue: ""
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Prix unitaire",
                          defaultValue: ""
                        } ,
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Total HT",
                          defaultValue: "1499"
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
                          defaultValue: ""
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Prix unitaire",
                          defaultValue: ""
                        } ,
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Total HT",
                          defaultValue: "1499"
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
                          defaultValue: ""
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Prix unitaire",
                          defaultValue: ""
                        } ,
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Total HT",
                          defaultValue: "1499"
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
                          defaultValue: ""
                        },
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Prix unitaire",
                          defaultValue: ""
                        } ,
                        {
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Total HT",
                          defaultValue: "1499"
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
                          defaultValue: ""
                        }
                      ]}
                    />
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
