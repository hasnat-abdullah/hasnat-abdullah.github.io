import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HeroAboutSection from '@site/src/components/sections/HeroAboutSection';
import SkillsSection from '@site/src/components/sections/SkillsSection';
import ExperienceSection from '@site/src/components/sections/ExperienceSection';
import ProjectsSection from '@site/src/components/sections/ProjectsSection';
import CertificationsSection from '@site/src/components/sections/CertificationsSection';
import ResearchSection from '@site/src/components/sections/ResearchSection';
import BlogSection from '@site/src/components/sections/BlogSection';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <main>
        <HeroAboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ResearchSection />
        <BlogSection />
      </main>
    </Layout>
  );
}
