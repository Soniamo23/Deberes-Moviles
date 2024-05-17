import React, { ReactNode } from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

interface BasicLayoutProps {
  children: ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const items = [
    { label: 'Option 1', key: '1', icon: <PieChartOutlined /> },
    { label: 'Option 2', key: '2', icon: <DesktopOutlined /> },
    {
      label: 'User',
      key: 'sub1',
      icon: <UserOutlined />,
      children: [
        { label: 'Tom', key: '3' },
        { label: 'Bill', key: '4' },
        { label: 'Alex', key: '5' },
      ],
    },
    {
      label: 'Team',
      key: 'sub2',
      icon: <TeamOutlined />,
      children: [
        { label: 'Team 1', key: '6' },
        { label: 'Team 2', key: '8' },
      ],
    },
    { label: 'Files', key: '9', icon: <FileOutlined /> },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }} />
        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
