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
  const [expanded, setExpanded] = useState(false);
  const navigate = (path) => { window.location.href = path; };

  // 滑鼠移入展開，移出收合
  const handleMouseEnter = () => setExpanded(true);
  const handleMouseLeave = () => setExpanded(false);

  return (
    <div
      className={`nav-float${expanded ? '' : ' collapsed'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="nav-list">
        {navItems.map(item => (
          <div
            key={item.key}
            onClick={() => navigate(item.path)}
            className={`nav-item${active === item.key ? ' active' : ''}`}
            title={item.label}
          >
            <span className="nav-icon">{item.icon}</span>
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
        <div className="nav-lang-btn">
          <GlobalOutlined />
        </div>
      </Dropdown>
    </div>
  );
} 