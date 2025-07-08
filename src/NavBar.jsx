import React, { useState } from 'react';
import { Layout, Menu, Dropdown } from 'antd';

const { Header } = Layout;

const navItems = [
  { key: 'home', label: '首頁', path: '/' },
  { key: 'tech', label: '科技', path: '/tech.html' },
  { key: 'art', label: '藝術', path: '/art.html' },
  { key: 'project', label: '專案', path: '/project.html' },
  { key: 'team', label: '人員介紹', path: '/team.html' },
  { key: 'story', label: '品牌故事', path: '/story' },
];

const langOptions = [
  { key: 'zh', label: '繁體中文' },
  { key: 'en', label: 'English' },
  { key: 'ja', label: '日本語' },
];

export default function NavBar({ active, onLangChange, lang = 'zh' }) {
  const [langOpen, setLangOpen] = useState(false);
  const navigate = (path) => { window.location.href = path; };
  return (
    <Header
      style={{
        width: '100%',
        padding: 0,
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(20,28,44,0.55)',
        boxShadow: '0 2px 16px 0 #0004',
        backdropFilter: 'blur(18px) saturate(1.5)',
        WebkitBackdropFilter: 'blur(18px) saturate(1.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <div
          className="logo"
          style={{
            color: '#b6e0fe', fontSize: 28, fontWeight: 'bold', letterSpacing: 2,
            fontFamily: 'Orbitron, Arial, sans-serif', flexShrink: 0, marginLeft: 32, cursor: 'pointer'
          }}
          onClick={() => navigate('/')}
        >MILIFIX</div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[active]}
          items={navItems.map(item => ({
            key: item.key,
            label: (
              <span
                onClick={() => navigate(item.path)}
                style={{
                  padding: '0 18px',
                  transition: 'color 0.2s, box-shadow 0.2s',
                  position: 'relative',
                  fontWeight: 500,
                  fontSize: 18,
                  color: active === item.key ? '#4ad' : '#eee',
                  textShadow: active === item.key ? '0 0 8px #4ad8' : 'none',
                }}
                onMouseEnter={e => {
                  e.target.style.textDecoration = 'underline';
                  e.target.style.textShadow = '0 0 8px #4ad8';
                }}
                onMouseLeave={e => {
                  e.target.style.textDecoration = 'none';
                  e.target.style.textShadow = active === item.key ? '0 0 8px #4ad8' : 'none';
                }}
              >{item.label}</span>
            )
          }))}
          style={{ background: 'none', flex: 1, minWidth: 0, marginLeft: 32, borderBottom: 'none' }}
        />
        <Dropdown
          open={langOpen}
          onOpenChange={setLangOpen}
          menu={{
            items: langOptions.map(opt => ({
              key: opt.key,
              label: (
                <span
                  style={{ padding: '8px 18px', display: 'block', color: lang === opt.key ? '#4ad' : '#b6e0fe', fontWeight: lang === opt.key ? 700 : 400 }}
                  onClick={() => { setLangOpen(false); onLangChange && onLangChange(opt.key); }}
                >{opt.label}</span>
              )
            }))
          }}
        >
          <div
            className="lang-selected"
            style={{
              background: '#222c', color: '#b6e0fe', padding: '6px 18px 6px 12px', borderRadius: 8,
              fontSize: 18, display: 'flex', alignItems: 'center', marginRight: 32, marginLeft: 24,
              cursor: 'pointer', userSelect: 'none', transition: 'background 0.2s',
            }}
            onClick={() => setLangOpen(!langOpen)}
          >
            <span className="globe" style={{ fontSize: 22, marginRight: 6 }}>🌐</span>
            {langOptions.find(opt => opt.key === lang)?.label || '繁體中文'}
            <span style={{ marginLeft: 8, fontSize: 14, transform: langOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▼</span>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
} 