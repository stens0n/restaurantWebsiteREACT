import React from 'react';

import{
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink, 
    SidebarRoute,
    SideBtnWrap
} from './SidebarElements';

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon/>
        </Icon>
        <SidebarMenu>
            <SidebarLink to='/'>Pizzas</SidebarLink>
            <SidebarLink to='/'>Desserts</SidebarLink>
            <SidebarLink to='/'>Full Menu</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/'>Menu</SidebarRoute>
        </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar