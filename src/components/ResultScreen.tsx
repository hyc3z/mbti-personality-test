import React from 'react';
import { useTranslation } from 'react-i18next';
import { PersonalityType } from '../types';
import { mbtiCharacters, mbtiColors, mbtiTags } from '../data/mbtiCharacters';
import './ResultScreen.css';

interface ResultScreenProps {
  personalityType: PersonalityType;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  personalityType,
}) => {
  const { t } = useTranslation();
  
  const traits = personalityType.split('') as Array<'E' | 'I' | 'N' | 'S' | 'T' | 'F' | 'J' | 'P'>;
  const character = mbtiCharacters[personalityType] || '🎭';
  const colors = mbtiColors[personalityType] || { primary: '#FF6B9D', secondary: '#C8A2FF', gradient: 'linear-gradient(135deg, #FF6B9D 0%, #C8A2FF 100%)' };
  const tags = mbtiTags[personalityType] || [];

  return (
    <div className="result-screen">
      <h1>{t('result.title')}</h1>
      
      {/* SVG Banner */}
      <div className="personality-banner">
        <img 
          src={`/assets/${personalityType}.svg`} 
          alt={`${personalityType} personality banner`}
          className="banner-image"
          onError={(e) => {
            // Fallback to character showcase if SVG not found
            e.currentTarget.style.display = 'none';
            const fallback = document.querySelector('.character-showcase-fallback');
            if (fallback) {
              (fallback as HTMLElement).style.display = 'flex';
            }
          }}
        />
        {/* Fallback character showcase */}
        <div className="character-showcase-fallback" style={{ background: colors.gradient, display: 'none' }}>
          <div className="character-icon">{character}</div>
          <div className="result-type-large">{personalityType}</div>
        </div>
      </div>

      {/* 性格标签 */}
      <div className="personality-tags">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="tag"
            style={{ 
              background: colors.gradient,
              boxShadow: `0 2px 10px ${colors.primary}40`
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 性格描述 */}
      <div className="result-description">
        <h3 className="personality-name" style={{ color: colors.primary }}>
          {t(`personalities.${personalityType}.name`)}
        </h3>
        <p className="personality-desc">{t(`personalities.${personalityType}.description`)}</p>
        
        {/* 生活攻略 */}
        {t(`personalities.${personalityType}.lifeGuide`, { defaultValue: '' }) && (
          <div className="life-guide-section">
            <h3 className="section-title">📖 你的专属生活攻略</h3>
            <div className="life-guide-content">
              {t(`personalities.${personalityType}.lifeGuide`).split('\n\n').map((paragraph, index) => (
                <p key={index} className="guide-paragraph">{paragraph}</p>
              ))}
            </div>
          </div>
        )}
        
        {/* 特质详情 */}
        <div className="traits-section">
          <h3 className="section-title">{t('result.yourTraits')}</h3>
          <div className="traits-grid">
            {traits.map((trait, index) => (
              <div key={index} className="trait-card">
                <div className="trait-header">
                  <span className="trait-letter" style={{ color: colors.primary }}>{trait}</span>
                  <span className="trait-name">{t(`traits.${trait}.name`)}</span>
                </div>
                <p className="trait-desc">{t(`traits.${trait}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
