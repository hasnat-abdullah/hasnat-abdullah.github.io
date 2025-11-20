import React from 'react';
import { research } from '@site/src/data/research';
import styles from './ResearchSection.module.css';

export default function ResearchSection(): JSX.Element {
    return (
        <section id="research" className={styles.researchSection}>
            <div className="container">
                <div className="section-content">
                    <h2 className="section-title">Research & Publications</h2>
                    <div className={styles.researchGrid}>
                        {research.map((item, idx) => (
                            <div key={idx} className={styles.researchCard}>
                                <h4 className={styles.researchTitle}>{item.title}</h4>
                                <p className={styles.researchDate}>{item.date}</p>
                                {item.description && (
                                    <p className={styles.researchDescription}>{item.description}</p>
                                )}
                                {item.url && (
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.researchLink}
                                    >
                                        Read Paper →
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
