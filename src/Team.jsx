import React from 'react';
import { Typography, ConfigProvider } from 'antd';
import NavBar from './NavBar';

const { Title, Paragraph } = Typography;

export default function Team({ lang = 'zh', i18n }) {
  const team = i18n.team;
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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', padding: '2vw', flexWrap: 'wrap', gap: 32 }}>
          {team.members && team.members.map((member, idx) => (
            <div key={idx} style={{ borderRadius: 24, boxShadow: '0 4px 24px 0 #0001', padding: 36, maxWidth: 700, width: 340, margin: '24px 0', background: 'rgba(255,255,255,0.85)' }}>
              <Title level={2} style={{ color: '#222', textAlign: 'center', fontFamily: 'Orbitron, Arial, sans-serif' }}>{member.name}</Title>
              <Paragraph strong style={{ color: '#333', textAlign: 'center' }}>{member.role}</Paragraph>
              <Paragraph style={{ color: '#555', textAlign: 'center' }}>{member.desc}</Paragraph>
              <div><img src={member.img} alt={member.name} style={{ width: 120, height: 120, borderRadius: '50%', margin: '12px auto' }} /></div>
            </div>
          ))}
        </div>
        {/* Footer 移除，統一由 App.jsx 控制 */}
      </div>
    </ConfigProvider>
  );
} 