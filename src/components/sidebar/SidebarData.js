import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
  {
    title: 'Registrar minutas',
    path: '/registrar',
    icon: <AiIcons.AiFillHome value={{ className:"iconos"}} />,
    cName: 'nav-text'
  },
  {
    title: 'Minutas',
    path: '/minutas',
    icon: <IoIcons.IoIosPaper value={{ className:"icon"}} />,
    cName: 'nav-text'
  },
  {
    title: 'Administración',
    path: '/administracion',
    icon: <FaIcons.FaCartPlus className="iconos" />,
    cName: 'nav-text'
  },
  
];