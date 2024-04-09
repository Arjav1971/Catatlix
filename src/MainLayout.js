import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, Button ,Divider} from 'antd';
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import boxLogo from "./Assets/Box 3block.svg";
import homeLogo from "./Assets/Homehome.svg";
import activitiesLogo from "./Assets/Timeractivities.svg";
import analyticsLogo from "./Assets/Chartanalytics.svg";
import transformationLogo from "./Assets/Rockettransformation.svg";
import libraryLogo from "./Assets/Layerslibrary.svg";
import logoSettings from "./Assets/Settingssettings.svg";
import logoLogout from  "./Assets/Logoutlogout.svg";

import { Outlet,useNavigate } from 'react-router-dom';

import "./MainLayout.css";
const { Header, Sider, Content } = Layout;


const MainLayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  // Assigning default values for demonstration
  const colorBgContainer = '#FFFFFF';
  const borderRadiusLG = '5px';

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
      
        <div className="logo-wrapper">
          <div className="logo">
            <Button className="logo-button" type="text" icon={collapsed ? < IoChevronForwardCircleOutline className='menu-icon' /> : < IoChevronBackCircleOutline className='menu-icon' />} onClick={() => setCollapsed(!collapsed)} style={{fontSize: '40px'}} />
          
          </div>
          <div className='brand'>
            <img src={boxLogo} className='brand-logo'/>
            {!collapsed && <div className='brand-name'>Catalix</div>}

          </div>
        
        </div>

        <Menu className="menu-1" mode="inline" defaultSelectedKeys={['/']}
                    onClick={({ key }) => {
                        if (key === "signout") { }
                        else {
                            navigate(key);
                        }
                    }}>
                    <Menu.Item key='/' icon={<img src={homeLogo} alt="" className='symbols' />}>Home</Menu.Item>
                    <Menu.Item key='activities' icon={<img src={activitiesLogo} alt="" className='symbols' />}>Activities</Menu.Item>
                    <Menu.Item key='analytics' icon={<img src={analyticsLogo} alt="" className='symbols' />}>Analytics</Menu.Item>
                    <Menu.Item key='transformation' icon={<img src={transformationLogo} alt="" className='symbols' />}>Transformation</Menu.Item>
                    <Menu.Item key='library' icon={<img src={libraryLogo} alt="" className='symbols' />}>Library</Menu.Item>
                    <Divider className="menu-div" />

                    <Menu.Item key='settings' icon={<img src={logoSettings} alt="" className='symbols' />} >Settings</Menu.Item>
                    <Menu.Item key='logout' icon={<img src={logoLogout} alt="" className='symbols' />}>Logout</Menu.Item>

                </Menu>
      </Sider>
      <Layout>
        
        <Content style={{margin: '0px 24px',}}>

          <Outlet />
          
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
