import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const navItems = [
  { key: 'home', label: '首頁', path: '/' },
  { key: 'tech', label: '科技', path: '/tech.html' },
  { key: 'art', label: '藝術', path: '/art.html' },
  { key: 'project', label: '專案', path: '/project.html' },
  { key: 'team', label: '人員介紹', path: '/team.html' },
  { key: 'story', label: '品牌故事', path: '/story' },
];

export default function NavBar({ active }) {
  // 若未用 react-router-dom，可用 window.location 取代 useNavigate
  const navigate = (path) => { window.location.href = path; };
  return (
    <Header style={{ background: 'rgba(20,28,44,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 5vw', width: '100%' }}>
      <div className="logo" style={{ color: '#b6e0fe', fontSize: 28, fontWeight: 'bold', letterSpacing: 2, fontFamily: 'Orbitron, Arial, sans-serif', flexShrink: 0 }}>MILIFIX</div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[active]}
        items={navItems.map(item => ({
          key: item.key,
          label: <span onClick={() => navigate(item.path)}>{item.label}</span>
        }))}
        style={{ background: 'rgba(20,28,44,0.0)', fontSize: 18, flex: 1, minWidth: 0, overflowX: 'auto' }}
      />
    </Header>
  );
} 