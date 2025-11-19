import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import styles from './BlogSection.module.css';

interface BlogPost {
  id: string;
  metadata: {
    permalink: string;
    title: string;
    description: string;
    date: string;
    formattedDate: string;
    tags: Array<{ label: string; permalink: string }>;
    readingTime: number;
  };
}

export default function BlogSection(): React.JSX.Element {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const POSTS_TO_SHOW = 4;

  useEffect(() => {
    // Load latest 2 blog posts
    const loadPosts = async () => {
      try {
        // Try to load real blog posts from Docusaurus
        let blogModule: any = null;
        try {
          // @ts-ignore - Generated file, may not exist during dev
          blogModule = await import('@generated/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json');
        } catch (e) {
          // Module not available yet, will use fallback
        }
        
        if (blogModule && blogModule.items && Array.isArray(blogModule.items) && blogModule.items.length > 0) {
          // Map Docusaurus blog posts to our format
          const mappedPosts = blogModule.items
            .slice(0, POSTS_TO_SHOW)
            .map((item: any) => ({
              id: item.id || item.content?.metadata?.permalink || Math.random().toString(),
              metadata: {
                permalink: item.content?.metadata?.permalink || item.permalink || '/blog',
                title: item.content?.metadata?.title || item.title || 'Untitled',
                description: item.content?.metadata?.description || item.description || '',
                date: item.content?.metadata?.date || item.date || new Date().toISOString(),
                formattedDate: item.content?.metadata?.formattedDate || item.formattedDate || new Date().toLocaleDateString(),
                tags: item.content?.metadata?.tags || item.tags || [],
                readingTime: item.content?.metadata?.readingTime || item.readingTime || 1,
              }
            }))
            .filter((post: BlogPost) => post.metadata.permalink); // Filter out invalid posts
          
          if (mappedPosts.length > 0) {
            setPosts(mappedPosts);
            setLoading(false);
            return;
          }
        }
        
        // If no posts loaded, set empty array (no fallback mock data)
        setPosts([]);
        setLoading(false);
      } catch (error) {
        console.error('Error loading blog posts:', error);
        setPosts([]);
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <section id="blog" className={styles.blogSection}>
      <div className="container">
        <div className="section-content">
          <h2 className="section-title">Latest Blog Posts</h2>

          {loading ? (
            <div className={styles.loading}>
              <div className={styles.spinner}></div>
              <p>Loading posts...</p>
            </div>
          ) : posts.length > 0 ? (
            <>
              <div className={styles.blogGrid}>
                {posts.map((post) => {
                  // Additional safety check
                  if (!post || !post.metadata || !post.metadata.permalink) {
                    return null;
                  }
                  
                  return (
                    <Link
                      key={post.id}
                      to={post.metadata.permalink}
                      className={styles.blogCard}
                    >
                      <div className={styles.blogMeta}>
                        <span className={styles.blogDate}>
                          {post.metadata.formattedDate}
                        </span>
                        <span className={styles.blogReadTime}>
                          {Math.ceil(post.metadata.readingTime)} min read
                        </span>
                      </div>
                      <h3 className={styles.blogTitle}>{post.metadata.title}</h3>
                      <p className={styles.blogDescription}>
                        {post.metadata.description}
                      </p>
                      {post.metadata.tags && post.metadata.tags.length > 0 && (
                        <div className={styles.blogTags}>
                          {post.metadata.tags.map((tag, idx) => (
                            <span key={idx} className="badge">
                              {tag.label}
                            </span>
                          ))}
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>

              <div className={styles.viewAllLink}>
                <Link to="/blog" className="button-secondary">
                  View All Posts →
                </Link>
              </div>
            </>
          ) : (
            <div className={styles.noPosts}>
              <p>No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

