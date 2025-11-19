import React from 'react';
import { experiences } from '@site/src/data/experience';
import styles from './ExperienceSection.module.css';

export default function ExperienceSection(): JSX.Element {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        <div className="section-content">
          <h2 className="section-title">Experience</h2>
          <div className={styles.timeline}>
            {experiences.map((exp, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <div>
                      <h3 className={styles.jobTitle}>{exp.title}</h3>
                      <span> @ </span>
                      <h4 className={styles.company}>{exp.company}</h4>
                    </div>
                    <div className={styles.timelineMeta}>
                      <span className={styles.period}>{exp.period}</span>
                      <span>|</span>
                      <span className={styles.location}>{exp.location}</span>
                    </div>
                  </div>
                  <p className={styles.description}>{exp.description}</p>
                  <div className={styles.technologies}>
                    {exp.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

