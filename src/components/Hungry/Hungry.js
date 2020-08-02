import React from 'react';

import './Hungry.css'

import MenuIMG from '../../images/menus.png'
import PeopleIMG from '../../images/people-connect.png'

function Hungry() {
    return (
        <div className="hungry-container">
            <section id="section-1">
                <div className="image-container">
                    <img src={MenuIMG} alt="Menus"/>
                </div>
                <div id="s1-title-text">Hundreds of Menus, thousands of Hungry Customers</div>
            </section>
            <section id="section-2">
                <div id="s2-title-text">Connecting people around the world</div>
                <div className="image-container">
                <img src={PeopleIMG} alt="People"/>
                </div>
            </section>
            <section id="section-3"></section>
            <footer></footer>
        </div>
    )
}

export default Hungry
