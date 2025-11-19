import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function NotFound(): JSX.Element {
  return (
    <Layout title="Page Not Found">
      <main style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}>
        <div style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h1 style={{
            fontSize: '8rem',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, var(--sci-fi-accent-1), var(--sci-fi-accent-2))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
          }}>
            404
          </h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Page Not Found
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: 'var(--ifm-color-emphasis-700)',
            marginBottom: '2rem',
          }}>
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="button-primary">
            Go Back Home
          </Link>
        </div>
      </main>
    </Layout>
  );
}

