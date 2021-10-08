import React from 'react';
import { SidebarData } from './SidebarData'
import { useHistory } from 'react-router-dom';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import "./SideNavMenu.css"
//import './SideNavMenu.css'
export default function SideNavMenu() {

    const history = useHistory();
    return (
        <div style={{ flex: "2" }}>
            <SideNav className="sideNav" onSelect={(selected) => {
                history.push(selected);
            }}>
                <SideNav.Toggle className="sideNavToggle" />
                <SideNav.Nav defaultSelected="/" >
                    {SidebarData.map((item, index) => {
                        return (
                            <NavItem eventKey={item.path} key={index}>
                                <NavIcon>
                                    {item.icon}
                                </NavIcon>
                                <NavText >
                                    <span className={item.cName}>
                                        {item.title}
                                    </span>
                                </NavText>
                            </NavItem>
                        )
                    })}
                </SideNav.Nav>
            </SideNav>
        </div>
    );
}
