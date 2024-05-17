import React from 'react';
import { Menu } from 'antd';

const AppMenu: React.FC = () => {
  return (
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="1">Inicio</Menu.Item>
      <Menu.Item key="2">Productos</Menu.Item>
      <Menu.Item key="3">Contacto</Menu.Item>
    </Menu>
  );
}

export default AppMenu;
