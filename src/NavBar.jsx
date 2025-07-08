import React, { useState } from 'react';
import { Menu, Dropdown } from 'antd';

const navItems = [
  { key: 'home', label: '首頁', path: '/' },
  { key: 'tech', label: '科技', path: '/tech' },
  { key: 'art', label: '藝術', path: '/art' },
  { key: 'project', label: '專案', path: '/project' },
  { key: 'team', label: '人員介紹', path: '/team' },
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
    <div
      style={{
        position: 'fixed',
        top: 32,
        right: 32,
        zIndex: 200,
        background: '#fff',
        borderRadius: 24,
        boxShadow: '0 4px 24px 0 #0001',
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        minHeight: 56,
        minWidth: 320,
        gap: 8,
      }}
    >
      <Menu
        mode="horizontal"
        selectedKeys={[active]}
        items={navItems.map(item => ({
          key: item.key,
          label: (
            <span
              onClick={() => navigate(item.path)}
              style={{
                padding: '0 16px',
                fontWeight: 500,
                fontSize: 16,
                color: active === item.key ? '#111' : '#555',
                borderRadius: 12,
                background: active === item.key ? '#f2f2f7' : 'none',
                transition: 'background 0.2s, color 0.2s',
                cursor: 'pointer',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.target.style.background = '#f2f2f7';
              }}
              onMouseLeave={e => {
                e.target.style.background = active === item.key ? '#f2f2f7' : 'none';
              }}
            >{item.label}</span>
          )
        }))}
        style={{ background: 'none', borderBottom: 'none', flex: 1, minWidth: 0, justifyContent: 'flex-end' }}
      />
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
      >
        <div
          className="lang-selected"
          style={{
            background: '#f2f2f7', color: '#222', padding: '6px 18px 6px 12px', borderRadius: 12,
            fontSize: 16, display: 'flex', alignItems: 'center', marginLeft: 8,
            cursor: 'pointer', userSelect: 'none', transition: 'background 0.2s',
            fontWeight: 500
          }}
          onClick={() => setLangOpen(!langOpen)}
        >
          <span className="globe" style={{ fontSize: 20, marginRight: 6 }}>🌐</span>
          {langOptions.find(opt => opt.key === lang)?.label || '繁體中文'}
        </div>
      </Dropdown>
    </div>
  );
} 