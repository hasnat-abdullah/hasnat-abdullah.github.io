import React from 'react';
import { skills } from '@site/src/data/skills';
import styles from './SkillsSection.module.css';

export default function SkillsSection(): JSX.Element {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <div className="section-content">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className={styles.skillsGrid}>
            {skills.map((category, idx) => (
              <div key={idx} className={styles.categoryCard}>
                <h3 className={styles.categoryTitle}>{category.category}</h3>
                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIdx) => (
                    <span key={skillIdx} className="badge">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

