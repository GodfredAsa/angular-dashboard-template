import { MainNavData, NavElement } from "../models/nav.model";


export const MainMenuElements: MainNavData[] =  [
    {
      icon: "bi bi-grid-fill",
      element: "Dashboard",
      to: "dashboard",
      news: ""
    },
    {
      icon: "bi bi-handbag-fill",
      element: "Product",
      to: "dashboard",
      news: ""
    },
    {
      icon: "bi bi-people-fill",
      element: "Customer",
      to: "dashboard",
      news: ""
    },
    {
      icon: "bi bi-file-earmark-text-fill",
      element: "Transactions",
      to: "dashboard",
      news: ""
    },
    {
      icon: "bi bi-pie-chart-fill",
      element: "Statistics",
      to: "dashboard",
      news: ""
    },

    {
      icon: "bi bi-megaphone-fill",
      element: "Campaign",
      to: "dashboard",
      news: "News"
    },
    {
      icon: "bi bi-clock-fill",
      element: "Log Activity",
      to: "dashboard",
      news: ""
    }

  ]


  export const SupportMenuElements: MainNavData[] =  [
    {
      icon: "bi bi-gear-fill",
      element: "Settings",
      to: "dashboard",
      news: ""
    },
    {
      icon: "bi bi-question-circle-fill",
      element: "Help",
      to: "dashboard",
      news: ""
    },
    {
      icon: "bi bi-moon-fill",
      element: "Dark Mode",
      to: "dashboard",
      news: ""
    }

  ]
