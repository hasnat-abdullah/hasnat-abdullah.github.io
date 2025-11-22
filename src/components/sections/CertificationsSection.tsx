import React from 'react';
import { certifications } from '@site/src/data/certifications';
import styles from './CertificationsSection.module.css';

export default function CertificationsSection() {
  return (
    <section id="certifications" className={styles.certificationsSection}>
      <div className="container">
        <div className="section-content">
          <h2 className="section-title">Certifications</h2>
          <div className={styles.certificationsGrid}>
            {certifications.map((cert, idx) => (
              <div key={idx} className={styles.certCard}>
                <h4 className={styles.certTitle}>{cert.title}</h4>
                <div className={styles.certMeta}>
                  <p className={styles.certIssuer}>{cert.issuer}</p>
                  <p className={styles.certDate}>{cert.date}</p>
                </div>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.certLink}
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

