import React, { useState } from 'react';

function App() {
  let data = [
    {
      plan: "FREE",
      price: 0,
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
      support: "Dedicated Phone Support",
      supportEnabler: false,
      subDomain: "Free Subdomain",
      subDomainEnabler: false,
      reports: "Monthly Status Reports",
      reportsEnabler: false
    },
    {
      plan: "PLUS",
      price: 9,
      user: "5 Users",
      userEnabler: true,
      storage: "50GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      support: "Dedicated Phone Support",
      supportEnabler: true,
      subDomain: "Free Subdomain",
      subDomainEnabler: true,
      reports: "Monthly Status Reports",
      reportsEnabler: false
    },
    {
      plan: "PRO",
      price: 49,
      user: "Unlimited Users",
      userEnabler: true,
      storage: "150GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      support: "Dedicated Phone Support",
      supportEnabler: true,
      subDomain: "Free Subdomains",
      subDomainEnabler: true,
      reports: "Monthly Status Reports",
      reportsEnabler: true
    }
  ];

  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {data.map((plan, i) => (
              <div key={i} className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{plan.plan}</h5>
                    <h6 className="card-price text-center">${plan.price}<span className="period">/month</span></h6>
                    <hr/>
                    <ul className="fa-ul">
                      <li className={plan.userEnabler ? "" : "text-muted"}><span className="fa-li"><i className={plan.userEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{plan.user}</li>
                      <li className={plan.storageEnabler ? "" : "text-muted"}><span className="fa-li"><i className={plan.storageEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{plan.storage}</li>
                      <li className={plan.publicProjectsEnabler ? "" : "text-muted"}><span className="fa-li"><i className={plan.publicProjectsEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{plan.publicProjects}</li>
                      <li className={plan.communityAccessEnabler ? "" : "text-muted"}><span className="fa-li"><i className={plan.communityAccessEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{plan.communityAccess}</li>
                      <li className={plan.privateProjectsEnabler ? "" : "text-muted"}><span className="fa-li"><i className={plan.privateProjectsEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{plan.privateProjects}</li>
                      <li className={plan.supportEnabler ? "" : "text-muted"}><span className="fa-li"><i className={plan.supportEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{plan.support}</li>
                      <li className={plan.subDomainEnabler ? "" : "text-muted"}><span className="fa-li"><i className={plan.subDomainEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{plan.subDomain}</li>
                      <li className={plan.reportsEnabler ? "" : "text-muted"}><span className="fa-li"><i className={plan.reportsEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{plan.reports}</li>
                    </ul>
                    <div className="d-grid">
                      <a href="#" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
