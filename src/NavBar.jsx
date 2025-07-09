import React, { useState } from 'react';
import { Menu, Dropdown } from 'antd';
import { HomeOutlined, RocketOutlined, PictureOutlined, ProjectOutlined, TeamOutlined, BookOutlined, GlobalOutlined } from '@ant-design/icons';

const navItems = [
  { key: 'home', label: '首頁', path: '/', icon: <HomeOutlined /> },
  { key: 'tech', label: '科技', path: '/tech', icon: <RocketOutlined /> },
  { key: 'art', label: '藝術', path: '/art', icon: <PictureOutlined /> },
  { key: 'project', label: '專案', path: '/project', icon: <ProjectOutlined /> },
  { key: 'team', label: '人員介紹', path: '/team', icon: <TeamOutlined /> },
  { key: 'story', label: '品牌故事', path: '/story', icon: <BookOutlined /> },
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
    <aside
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: 72,
        background: 'rgba(255,255,255,0.92)',
        boxShadow: '2px 0 16px 0 #0001',
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '24px 0 0 0',
        borderTopRightRadius: 24,
        borderBottomRightRadius: 24,
        gap: 8,
      }}
    >
      <div style={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        {navItems.map(item => (
          <div
            key={item.key}
            onClick={() => navigate(item.path)}
            style={{
              width: 56,
              height: 56,
              margin: '0 auto',
              borderRadius: 16,
              background: active === item.key ? '#f2f2f7' : 'none',
              color: active === item.key ? '#0071e3' : '#222',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 500,
              fontSize: 13,
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s',
              boxShadow: active === item.key ? '0 2px 8px #0071e322' : 'none',
            }}
            title={item.label}
          >
            <span style={{ fontSize: 22, marginBottom: 2 }}>{item.icon}</span>
            <span style={{ fontSize: 12 }}>{item.label}</span>
          </div>
        ))}
      </div>
      <Dropdown
        open={langOpen}
        onOpenChange={setLangOpen}
        menu={{
          items: langOptions.map(opt => ({
            key: opt.key,
            label: (
              <span
                style={{ padding: '8px 18px', display: 'block', color: lang === opt.key ? '#0071e3' : '#222', fontWeight: lang === opt.key ? 700 : 400 }}
                onClick={() => { setLangOpen(false); onLangChange && onLangChange(opt.key); }}
              >{opt.label}</span>
            )
          }))
        }}
        placement="rightTop"
      >
        <div style={{ width: 56, height: 56, borderRadius: 16, background: '#f2f2f7', color: '#0071e3', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', cursor: 'pointer', fontSize: 22 }}>
          <GlobalOutlined />
        </div>
      </Dropdown>
    </aside>
  );
} 