
import Accueil from "views/Dashboard.jsx";
import ContraPage from "views/newContrat";
import ContraPage2 from "views/newContrat_2.jsx";
import Contrats from "views/Contrats.jsx";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Accueil",
    icon: "pe-7s-graph",
    component: Accueil,
    visible : true,
    layout: "/admin"
  },
  {
    path: "/noueau-contrat",
    name: "Nouveau contrat",
    icon: "pe-7s-note",
    visible : true,
    component: ContraPage,
    layout: "/admin"
  },
  {
    path: "/noueau-contrat-2",
    name: "Etape 2",
    icon: "pe-7s-note",
    visible : false,
    component: ContraPage2,
    layout: "/admin"
  },
  {
    path: "/contrats",
    name: "Contrats",
    icon: "pe-7s-car",
    visible : true,
    component: Contrats,
    layout: "/admin"
  },
  {
    path: "/nouvel-facture",
    name: "Nouvelle facture",
    icon: "pe-7s-note",
    visible : true,
    component: ContraPage,
    layout: "/admin"
  },
  {
    path: "/factures",
    name: "Factures",
    visible : true,
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
