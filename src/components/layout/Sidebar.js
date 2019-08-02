import React from 'react';
import { NavLink,  BrowserRouter, Route, Switch } from 'react-router-dom';

const routes = [
    { path: '/statistics', name: 'Statistics', icon:'401382365'},
    { path: '/collaboration', name: 'Collaboration', icon:'401382288' },
    { path: '/backlog', name: 'Backlog', icon:'401385358' },
    { path: '/financial', name: 'Financial', icon:'401385359'},
    { path: '/files', name: 'Files', icon:'401385364'},
    { path: '/Governance', name: 'Governance', icon:'401385365' },
]

// Since this component is simple and static, there's no parent container for it.
const Sidebar = () => {
  return (
      <section className="sidebar ">
          <div className="score_section ">
              <div className="score ">
                  <img src="./assets/img/img_1.png" />
              </div>
              <div className="score ">
                  <img src="./assets/img/img_2.png" />
              </div>
              <div className="score ">
                  <img src="./assets/img/img_3.png" />
              </div>
              <div className="score ">
                  <img src="./assets/img/img_4.png" />
              </div>
              <div className="score ">
                  <img src="./assets/img/img_5.png" />
              </div>
          </div>
          <div className="menu ">
              <div className="jquery-accordion-menu">
                    {routes.map((links)=><NavLink key={links.name} to={links.path} activeClassName="active"><img src={"./assets/img/"+links.icon+".png"} />{links.name}</NavLink>)}
              </div>
          </div>
          <div className="logo_user">
              <div className="logo_sec ">
                  <img src="./assets/img/logo.png" />
              </div>
          </div>
      </section>
    );
};

export default Sidebar;
