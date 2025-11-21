import React from 'react';
import { projects } from '@site/src/data/projects';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection(): JSX.Element {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <div className="section-content">
          <h2 className="section-title">Projects</h2>
          
          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <>
              <h3 className={styles.subheading}>Featured Projects</h3>
              <div className={styles.projectsGrid}>
                {featuredProjects.map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))}
              </div>
            </>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <>
              <h3 className={styles.subheading}>Other Projects</h3>
              <div className={styles.otherProjectsCard}>
                <ul className={styles.otherProjectsList}>
                  {otherProjects.map((project, idx) => (
                    <li key={idx} className={styles.otherProjectItem}>
                      <div className={styles.projectInfo}>
                        <span className={styles.otherProjectTitle}>{project.title}</span>
                        <div className={styles.otherProjectTech}>
                          {project.technologies.map((tech, techIdx) => (
                            <span key={techIdx} className="badge">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className={styles.projectCard}>
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

