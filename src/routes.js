/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Accueil from "views/Dashboard.jsx";
import ContraPage from "views/newContrat";
import Contrats from "views/TableList.jsx";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Accueil",
    icon: "pe-7s-graph",
    component: Accueil,
    layout: "/admin"
  },
  {
    path: "/noueau-contrat",
    name: "Nouveau contrat",
    icon: "pe-7s-note",
    component: ContraPage,
    layout: "/admin"
  },
  {
    path: "/contrats",
    name: "Contrats",
    icon: "pe-7s-car",
    component: Contrats,
    layout: "/admin"
  },
  {
    path: "/nouvel-facture",
    name: "Nouvelle facture",
    icon: "pe-7s-note",
    component: ContraPage,
    layout: "/admin"
  },
  {
    path: "/factures",
    name: "Factures",
    icon: "pe-7s-note2",
    component: Contrats,
    layout: "/admin"
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "pe-7s-news-paper",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "pe-7s-science",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "pe-7s-map-marker",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: Upgrade,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
