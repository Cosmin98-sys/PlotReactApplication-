import React from 'react';
import { FaHome, FaBuilding, FaHistory } from 'react-icons/fa';
import { AiFillMessage } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";


export const SidebarData = [
    {
        title: 'Acasa',
        path: '/',
        icon: <FaHome className="nav-icon"/>,
        cName: 'nav-text'
    },
    {
        title: 'Creare Mesaj',
        path: '/1',
        icon: <AiFillMessage className="nav-icon"/>,
        cName: 'nav-text'
    },
    {
        title: 'Grupuri Structuri',
        path: '/2',
        icon: <FaBuilding className="nav-icon"/>,
        cName: 'nav-text'
    },
    {
        title: 'Istoric Mesaje',
        path: '/3',
        icon: <FaHistory className="nav-icon"/>,
        cName: 'nav-text'
    },
    {
        title: 'Utilizatori',
        path: '/UtilizatorInfo',
        icon: <BsFillPeopleFill className="nav-icon"/>,
        cName: 'nav-text'
    }
]