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

  // 動畫參數
  const collapsed = !expanded || isTransitioning;
  const width = collapsed ? 0 : 200;
  const height = collapsed ? 0 : 480;
  const borderRadius = collapsed ? 0 : 24;
  const blur = 18;
  const glassBg = 'rgba(255,255,255,0.22)';
  const glassBorder = '1.5px solid rgba(255,255,255,0.28)';
  const boxShadow = '0 8px 32px 0 rgba(31,38,135,0.18)';

  // 轉場動畫控制
  function handleTransition() {
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 600);
  }

  // 監聽路徑變化自動收合動畫（修正只有首頁離開動畫成功的問題）
  React.useEffect(() => {
    setIsTransitioning(false);
  }, [active]);

  return (
    <>
      {/* 收合時只顯示圓形按鈕，且展開時不顯示 */}
      {!expanded && !isTransitioning && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={() => setExpanded(true)}
          className="nav-fab"
          title="展開側邊欄"
        >
          {'>'}
        </motion.button>
      )}
      {/* 展開時顯示完整側邊欄 */}
      <AnimatePresence initial={false}>
        {expanded && !isTransitioning && (
          <motion.div
            key="nav-list"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -24 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="nav-float"
          >
            <button
              onClick={() => setExpanded(false)}
              className="nav-close-btn"
              title="收合側邊欄"
            >
              {'<'}
            </button>
            <div className="nav-list">
              {navItems.map(item => (
                <div
                  key={item.key}
                  onClick={() => { handleTransition(); setTimeout(() => navigate(item.path), 400); }}
                  className={`nav-item${active === item.key ? ' active' : ''}`}
                  title={item.label}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 