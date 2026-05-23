import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { staggerContainer, zoomIn } from '../../animations/variants'
import { blogPosts } from '../siteData'
import { CyberButton } from '../ui/CyberButton'
import { SectionHeading } from '../ui/SectionHeading'

type BlogSectionProps = {
  limit?: number
}

export function BlogSection({ limit = 3 }: BlogSectionProps) {
  const posts = blogPosts.slice(0, limit)

  return (
    <section className="blog-section">
      <div className="site-container">
        <SectionHeading title="Blog & News" />
        <motion.div
          className="blog-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {posts.map((post) => (
            <motion.article key={post.title} className="blog-card" variants={zoomIn}>
              <Link to="/blog-details" className="blog-image">
                <img src={post.image} alt={post.title} />
                <span>{post.category}</span>
              </Link>
              <div className="blog-body">
                <h3>
                  <Link to="/blog-details">{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
                <CyberButton to="/blog-details" className="!px-8">
                  Read Insight
                </CyberButton>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
