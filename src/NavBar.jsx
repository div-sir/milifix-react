import React, { useState } from 'react';
import { Menu, Dropdown } from 'antd';
import { HomeOutlined, RocketOutlined, PictureOutlined, ProjectOutlined, TeamOutlined, BookOutlined, GlobalOutlined } from '@ant-design/icons';
import { LANGS } from './i18n';
import { motion } from 'framer-motion';

const navItems = [
  { key: 'home', label: '首頁', path: '/', icon: <HomeOutlined /> },
  { key: 'tech', label: '科技', path: '/tech', icon: <RocketOutlined /> },
  { key: 'art', label: '藝術', path: '/art', icon: <PictureOutlined /> },
  { key: 'project', label: '專案', path: '/project', icon: <ProjectOutlined /> },
  { key: 'team', label: '人員介紹', path: '/team', icon: <TeamOutlined /> },
  { key: 'story', label: '品牌故事', path: '/story', icon: <BookOutlined /> },
];

export default function NavBar({ active, onLangChange, lang = 'zh' }) {
  const [langOpen, setLangOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navigate = (path) => { window.location.href = path; };
  const width = expanded ? 200 : 72;
  return (
    <motion.aside
      initial={{ width: 72 }}
      animate={{ width }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        background: 'rgba(255,255,255,0.92)',
        boxShadow: '2px 0 16px 0 #0001',
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: expanded ? 'flex-start' : 'center',
        padding: '24px 0 0 0',
        borderTopRightRadius: 24,
        borderBottomRightRadius: 24,
        gap: 8,
        overflow: 'hidden',
        width,
      }}
    >
      <button
        onClick={() => setExpanded(e => !e)}
        style={{
          width: 40,
          height: 40,
          borderRadius: 12,
          background: '#f2f2f7',
          color: '#0071e3',
          border: 'none',
          margin: expanded ? '0 0 12px 16px' : '0 0 12px 0',
          alignSelf: expanded ? 'flex-start' : 'center',
          cursor: 'pointer',
          fontSize: 20,
          transition: 'background 0.2s',
        }}
        title={expanded ? '收合側邊欄' : '展開側邊欄'}
      >
        {expanded ? '<' : '>'}
      </button>
      <div style={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: expanded ? 'flex-start' : 'center', gap: 8 }}>
        {navItems.map(item => (
          <div
            key={item.key}
            onClick={() => navigate(item.path)}
            style={{
              width: expanded ? 180 : 56,
              height: 56,
              margin: '0 auto',
              borderRadius: 16,
              background: active === item.key ? '#f2f2f7' : 'none',
              color: active === item.key ? '#0071e3' : '#222',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: expanded ? 'flex-start' : 'center',
              fontWeight: 500,
              fontSize: 13,
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s, width 0.3s',
              boxShadow: active === item.key ? '0 2px 8px #0071e322' : 'none',
              paddingLeft: expanded ? 18 : 0,
              gap: expanded ? 12 : 0,
            }}
            title={item.label}
          >
            <span style={{ fontSize: 22, marginBottom: 2 }}>{item.icon}</span>
            {expanded && <span style={{ fontSize: 15 }}>{item.label}</span>}
          </div>
        ))}
      </div>
      <Dropdown
        open={langOpen}
        onOpenChange={setLangOpen}
        menu={{
          items: LANGS.map(opt => ({
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
        <div style={{ width: expanded ? 180 : 56, height: 56, borderRadius: 16, background: '#f2f2f7', color: '#0071e3', display: 'flex', alignItems: 'center', justifyContent: expanded ? 'flex-start' : 'center', margin: '0 auto 24px auto', cursor: 'pointer', fontSize: 22, paddingLeft: expanded ? 18 : 0, gap: expanded ? 12 : 0 }}>
          <GlobalOutlined />
          {expanded && <span style={{ fontSize: 15 }}>{LANGS.find(l => l.key === lang)?.label || '語言'}</span>}
        </div>
      </Dropdown>
    </motion.aside>
  );
} 