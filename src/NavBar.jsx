import React, { useState } from 'react';
import { Menu, Dropdown } from 'antd';
import { HomeOutlined, RocketOutlined, PictureOutlined, ProjectOutlined, TeamOutlined, BookOutlined, GlobalOutlined } from '@ant-design/icons';
import { LANGS } from './i18n';
import { motion, AnimatePresence } from 'framer-motion';
import './NavBar.css';

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
  const [expanded, setExpanded] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = (path) => { window.location.href = path; };

  // 滑鼠移入展開，移出收合
  const handleMouseEnter = () => setExpanded(true);
  const handleMouseLeave = () => setExpanded(false);

  // 動畫參數
  const blur = 18;
  const glassBg = 'rgba(255,255,255,0.38)';
  const glassBorder = '1.5px solid rgba(255,255,255,0.28)';
  const boxShadow = '0 8px 32px 0 rgba(31,38,135,0.18)';

  return (
    <div
      className="nav-float"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'fixed',
        top: 32,
        left: 32,
        width: expanded ? 220 : 72,
        height: 520,
        borderRadius: 28,
        background: glassBg,
        border: glassBorder,
        boxShadow,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        overflow: 'hidden',
        padding: 0,
        justifyContent: 'flex-start',
        zIndex: 200,
        backdropFilter: `blur(${blur}px) saturate(1.5)`,
        WebkitBackdropFilter: `blur(${blur}px) saturate(1.5)`
      }}
    >
      <div className="nav-list">
        {navItems.map(item => (
          <div
            key={item.key}
            onClick={() => navigate(item.path)}
            className={`nav-item${active === item.key ? ' active' : ''}`}
            title={item.label}
            style={{
              width: expanded ? 192 : 56,
              height: 54,
              borderRadius: 18,
              background: active === item.key ? '#f2f2f7' : 'none',
              color: active === item.key ? '#0071e3' : '#1a223a',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              fontWeight: active === item.key ? 700 : 500,
              fontSize: 20,
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s, width 0.3s',
              boxShadow: active === item.key ? '0 2px 8px #0071e322' : 'none',
              paddingLeft: expanded ? 22 : 8,
              gap: expanded ? 16 : 0,
            }}
          >
            <span className="nav-icon" style={{ fontSize: expanded ? 26 : 22 }}>{item.icon}</span>
            {expanded && <span className="nav-label">{item.label}</span>}
          </div>
        ))}
      </div>
      <div style={{ height: 24 }} />
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
        <div className="nav-lang-btn" style={{ marginLeft: expanded ? 18 : 8, width: expanded ? 52 : 40, height: expanded ? 52 : 40, fontSize: expanded ? 26 : 20 }}>
          <GlobalOutlined />
        </div>
      </Dropdown>
    </div>
  );
} 