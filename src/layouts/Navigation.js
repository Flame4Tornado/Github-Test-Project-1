import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';


const list = [
    {name: "start", path: "/", exact: true},
    {name: "produkty", path: "/products",exact: true},
    {name: "kontakt", path: "/contact",exact: true},
    {name: "panel admina", path: "/admin",exact: true},
]

const Navigation = () => {
    const menu = list.map(item => (<li key={item.name}><NavLink to={item.path} activeClassName="selected" className="normal" exact={item.exact}>{item.name}</NavLink></li>))
    return ( 
    <nav className="main">
        <ul>
           {menu} 
        </ul>
    </nav>
    )
}
 
export default Navigation;