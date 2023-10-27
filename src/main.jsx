import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const data = [
  {
      plan: "FREE",
      price: "$0",
      user: "Single User",
      userEnabler: true,
      storage: "5GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: false,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: false,
      subDomain: "Free Subdomain",
      subDomainEnabler: false,
      statusPlan: "Monthly Status Reports",
      statusPlanEnabler: false,

  },
  {
    plan: "PLUS",
    price: "$9",
    user: "5 User",
    userEnabler: true,
    storage: "50GB Storage",
    storageEnabler: true,
    publicProjects: "Unlimited Public Projects",
    publicProjectsEnabler: true,
    communityAccess: "Community Access",
    communityAccessEnabler: true,
    privateProjects: "Unlimited Private Projects",
    privateProjectsEnabler: true,
    phoneSupport: "Dedicated Phone Support",
    phoneSupportEnabler: true,
    subDomain: "Free Subdomain",
    subDomainEnabler: true,
    statusPlan: "Monthly Status Reports",
    statusPlanEnabler: false,
  },
  {
    plan: "PRO",
    price: "$49",
    user: "Unlimited User",
    highlight: true,
    storage: "50GB Storage",
    storageEnabler: true,
    publicProjects: "Unlimited Public Projects",
    publicProjectsEnabler: true,
    communityAccess: "Community Access",
    communityAccessEnabler: true,
    privateProjects: "Unlimited Private Projects",
    privateProjectsEnabler: true,
    phoneSupport: "Dedicated Phone Support",
    phoneSupportEnabler: true,
    subDomain: "Unlimited Free Subdomain",
    subDomainEnabler: true,
    statusPlan: "Monthly Status Reports",
    statusPlanEnabler: true,
  }
];

ReactDOM.createRoot(document.getElementById('root')).render( <App data = {data} />);
