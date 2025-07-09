import React, { useState } from 'react';
import { Menu, Dropdown } from 'antd';
import { HomeOutlined, RocketOutlined, PictureOutlined, ProjectOutlined, TeamOutlined, BookOutlined, GlobalOutlined } from '@ant-design/icons';
import { LANGS } from './i18n';
import { motion, AnimatePresence } from 'framer-motion';

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

  // 動畫參數
  const collapsed = !expanded || isTransitioning;
  const width = collapsed ? 320 : 200;
  const height = collapsed ? 64 : 480;
  const borderRadius = collapsed ? 48 : 24;
  const blur = 18;
  const glassBg = 'rgba(255,255,255,0.22)';
  const glassBorder = '1.5px solid rgba(255,255,255,0.28)';
  const boxShadow = '0 8px 32px 0 rgba(31,38,135,0.18)';

  // 轉場動畫控制
  function handleTransition() {
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 600);
  }

  // 監聽父層頁面切換時的動畫（可由 props 傳入或 context 實現，這裡簡單用 setTimeout 模擬）
  // 實際可由 App.jsx 傳入 isPageTransitioning 來精準控制

  return (
    <motion.div
      initial={false}
      animate={{
        width,
        height,
        borderRadius,
        backdropFilter: `blur(${blur}px) saturate(1.5)`,
        WebkitBackdropFilter: `blur(${blur}px) saturate(1.5)`
      }}
      transition={{ duration: 0.5, type: 'spring', bounce: 0.18 }}
      style={{
        position: 'fixed',
        top: 32,
        left: 32,
        zIndex: 200,
        background: glassBg,
        border: glassBorder,
        boxShadow,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        overflow: 'hidden',
        padding: 0,
        justifyContent: 'flex-start',
        transition: 'box-shadow 0.2s',
      }}
    >
      <button
        onClick={() => setExpanded(e => !e)}
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          background: 'rgba(255,255,255,0.7)',
          color: '#0071e3',
          border: '2px solid #0071e3',
          margin: '16px 0 12px 16px',
          alignSelf: 'flex-start',
          cursor: 'pointer',
          fontSize: 20,
          boxShadow: '0 2px 8px #0071e322',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s, border 0.2s',
        }}
        title={expanded ? '收合側邊欄' : '展開側邊欄'}
      >
        {expanded ? '<' : '>'}
      </button>
      <AnimatePresence initial={false}>
        {expanded && !isTransitioning && (
          <motion.div
            key="nav-list"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35 }}
            style={{ width: '100%' }}
          >
            <div style={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, padding: '0 0 0 8px' }}>
              {navItems.map(item => (
                <div
                  key={item.key}
                  onClick={() => { handleTransition(); setTimeout(() => navigate(item.path), 400); }}
                  style={{
                    width: 180,
                    height: 48,
                    margin: '0 0',
                    borderRadius: 16,
                    background: active === item.key ? '#f2f2f7' : 'none',
                    color: active === item.key ? '#0071e3' : '#222',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    fontWeight: 500,
                    fontSize: 15,
                    cursor: 'pointer',
                    transition: 'background 0.2s, color 0.2s, width 0.3s',
                    boxShadow: active === item.key ? '0 2px 8px #0071e322' : 'none',
                    paddingLeft: 18,
                    gap: 12,
                  }}
                  title={item.label}
                >
                  <span style={{ fontSize: 22, marginBottom: 2 }}>{item.icon}</span>
                  <span style={{ fontSize: 15 }}>{item.label}</span>
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
              <div style={{ width: 48, height: 48, borderRadius: 16, background: 'rgba(255,255,255,0.7)', color: '#0071e3', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '16px 0 24px 16px', cursor: 'pointer', fontSize: 22 }}>
                <GlobalOutlined />
              </div>
            </Dropdown>
          </motion.div>
        )}
        {collapsed && (
          <motion.div
            key="nav-ellipse"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
            style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <span style={{ fontSize: 32, color: '#0071e3', margin: '0 auto' }}><HomeOutlined /></span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 