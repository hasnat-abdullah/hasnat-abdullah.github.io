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
    // Load latest blog posts
    const loadPosts = async () => {
      try {
        // Try to load real blog posts from Docusaurus blog archive
        let blogArchive: any = null;
        try {
          // @ts-ignore - Generated file, may not exist during dev
          // Import all available blog archive files
          const archiveFiles = [
            'blog-archive-f05.json',
            // Add more potential archive file names if needed
          ];

          for (const fileName of archiveFiles) {
            try {
              blogArchive = await import(`@generated/docusaurus-plugin-content-blog/default/p/${fileName}`);
              break;
            } catch (e) {
              // Try next file
            }
          }
        } catch (e) {
          // Module not available yet, will use fallback
        }

        if (blogArchive && blogArchive.archive && blogArchive.archive.blogPosts && Array.isArray(blogArchive.archive.blogPosts) && blogArchive.archive.blogPosts.length > 0) {
          // Map Docusaurus blog posts to our format
          const mappedPosts = blogArchive.archive.blogPosts
            .slice(0, POSTS_TO_SHOW)
            .map((item: any) => {
              const postDate = item.metadata?.date || new Date().toISOString();
              const formattedDate = item.metadata?.formattedDate ||
                new Date(postDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                });

              return {
                id: item.id || item.metadata?.permalink || Math.random().toString(),
                metadata: {
                  permalink: item.metadata?.permalink || '/blog',
                  title: item.metadata?.title || 'Untitled',
                  description: item.metadata?.description || '',
                  date: postDate,
                  formattedDate: formattedDate,
                  readingTime: item.metadata?.readingTime || 1,
                }
              };
            })
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

