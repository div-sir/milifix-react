import React from 'react';
import { Typography, ConfigProvider } from 'antd';
import NavBar from './NavBar';

const { Title, Paragraph } = Typography;

export default function Tech({ lang = 'zh', i18n }) {
  const tech = i18n.tech;
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0071e3',
          fontFamily: "'Montserrat', 'Orbitron', Arial, sans-serif"
        }
      }}
    >
      <div style={{ minHeight: '100vh' }}>
        {/* NavBar 移除，統一由 App.jsx 控制 */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '2vw' }}>
          <div style={{ borderRadius: 24, boxShadow: '0 4px 24px 0 #0001', padding: 36, maxWidth: 700, width: '100%', margin: '48px 0', background: 'rgba(255,255,255,0.85)' }}>
            <Title level={1} style={{ color: '#222', textAlign: 'center', fontFamily: 'Orbitron, Arial, sans-serif' }}>{tech.title}</Title>
            <Paragraph strong style={{ color: '#333', textAlign: 'center' }}>{tech.intro}</Paragraph>
            <ul style={{ color: '#0071e3', margin: '2em 0', paddingLeft: 0, listStyle: 'none' }}>
              {tech.highlights && tech.highlights.map((item, idx) => (
                <li key={idx} style={{ marginBottom: 12 }}>{item}</li>
              ))}
            </ul>
            {tech.projects && tech.projects.map((proj, idx) => (
              <div key={idx} style={{ margin: '18px 0', background: '#fff8', borderRadius: 12, padding: 16, boxShadow: '0 2px 8px #0071e311' }}>
                <b>{proj.name}</b><br/>
                <span>{proj.desc}</span>
                <div><img src={proj.img} alt={proj.name} style={{ width: '100%', maxWidth: 300, borderRadius: 8, marginTop: 8 }} /></div>
              </div>
            ))}
          </div>
        </div>
        {/* Footer 移除，統一由 App.jsx 控制 */}
      </div>
    </ConfigProvider>
  );
} 