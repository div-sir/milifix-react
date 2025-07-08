import React from 'react';
import { Layout, Typography, ConfigProvider } from 'antd';
import NavBar from './NavBar';

const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export default function Project() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0071e3',
          fontFamily: "'Montserrat', 'Orbitron', Arial, sans-serif"
        }
      }}
    >
      <div style={{ minHeight: '100vh', background: '#f9f9f9' }}>
        <NavBar active="project" />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '2vw' }}>
          <div style={{ background: '#fff', borderRadius: 24, boxShadow: '0 4px 24px 0 #0001', padding: 36, maxWidth: 700, width: '100%', margin: '48px 0' }}>
            <Title level={1} style={{ color: '#222', textAlign: 'center', fontFamily: 'Orbitron, Arial, sans-serif' }}>專案</Title>
            <Paragraph strong style={{ color: '#333', textAlign: 'center' }}>
              這裡是 MILIFIX 專案頁面，請依需求補充內容。
            </Paragraph>
          </div>
        </div>
        <div style={{ background: '#fff', color: '#888', textAlign: 'center', width: '100%', padding: '24px 0', fontSize: 16, borderTop: '1px solid #eee', marginTop: 48 }}>
          &copy; 2024 MILIFIX 集團 | Unlock the Extraordinary<br/>
          聯絡信箱：info@milifix.org ｜ 地址：台北市信義區未來路88號 ｜ 服務專線：02-1234-5678<br/>
          <span style={{ color: '#bbb', fontSize: 14 }}>本網站僅供展示，所有資料僅供參考，未經授權請勿轉載。</span>
        </div>
      </div>
    </ConfigProvider>
  );
} 