import { motion } from 'framer-motion'
import { CalendarDays, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { pageTransition } from '../animations/variants'
import { blogPosts } from '../components/siteData'
import { InnerHero } from '../components/ui/InnerHero'

export default function BlogDetailsPage() {
  const post = blogPosts[3]

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <InnerHero title="Blog Details" />
      <article className="blog-detail-page">
        <div className="site-container blog-detail-grid">
          <div className="blog-detail-main">
            <img src={post.image} alt={post.title} />
            <div className="blog-detail-meta">
              <span>
                <UserRound size={16} /> Aadhwan Fortress Research
              </span>
              <span>
                <CalendarDays size={16} /> 12 May 2026
              </span>
              <span>{post.category}</span>
            </div>
            <h1>{post.title}</h1>
            <p>
              A useful security baseline gives growing organizations a way to reduce risk without turning every decision
              into a heavy program. The goal is not to buy every tool at once. It is to make the most important controls
              visible, owned, measured, and repeatable.
            </p>
            <p>
              Start with the fundamentals that change outcomes quickly: asset inventory, phishing-resistant MFA, endpoint
              hardening, cloud logging, privileged access review, tested backups, and a simple incident response path.
              From there, security leaders can prioritize improvements by business impact instead of tool pressure.
            </p>
            <blockquote>
              The best security baseline is one your team can explain, operate, and prove under pressure.
            </blockquote>
            <p>
              As the environment grows, the baseline should mature into continuous exposure management, detection
              engineering, vendor risk reviews, and audit-ready reporting. That progression keeps cybersecurity aligned
              with the pace of the business instead of trailing behind it.
            </p>
          </div>
          <aside className="blog-sidebar">
            <h2>Recent Posts</h2>
            {blogPosts.slice(0, 4).map((item) => (
              <Link to="/blog-details" key={item.title} className="recent-post">
                <img src={item.image} alt="" />
                <span>{item.title}</span>
              </Link>
            ))}
          </aside>
        </div>
      </article>
    </motion.div>
  )
}
