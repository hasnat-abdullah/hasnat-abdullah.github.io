import React from 'react';
import { projects } from '@site/src/data/projects';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection(): JSX.Element {
  const Projects = projects;

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <div className="section-content">
          <h2 className="section-title">Projects</h2>
          {Projects.length > 0 && (
            <>
              <div className={styles.projectsGrid}>
                {Projects.map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured = false }) {
  return (
    <div className={`${styles.projectCard} ${featured ? styles.featured : ''}`}>
      <h4 className={styles.projectTitle}>{project.title}</h4>
      <p className={styles.projectDescription}>{project.description}</p>
      <div className={styles.projectTech}>
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="badge">
            {tech}
          </span>
        ))}
      </div>
      {(project.github || project.demo) && (
        <div className={styles.projectLinks}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              GitHub →
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              Live Demo →
            </a>
          )}
        </div>
      )}
    </div>
  );
}

