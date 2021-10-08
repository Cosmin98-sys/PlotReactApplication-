import React, { Component } from 'react';
import { Container } from 'reactstrap';
import SideNavMenu from './NavBars/SideNavMenu'
export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div className="mainDiv" >
                <div className="topNavbar">
                </div>
                <div className="d-flex flex-row w-100 mainBodyDiv">
                    <SideNavMenu />
                    <div style={{ backgroundColor: "blue", flex: "14" }}>
                        {this.props.children}
                    </div>
                    <div style={{ backgroundColor: "yellow", flex: "2" }}>
                    </div>
                </div>
                <div className="footer">
                </div>
            </div>
        );
    }
}
