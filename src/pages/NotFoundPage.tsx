import { Link } from "react-router-dom";
import { InnerHero } from "../components/ui/InnerHero";

export default function NotFoundPage() {
  return (
    <>
      <InnerHero title="404 Page" />
      <section className="site-container py-24 text-center">
        <h1 className="text-5xl font-bold uppercase">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          The page you are looking for is unavailable. Return home to continue
          exploring Aadhwan fortress.
        </p>
        <Link to="/" className="cyber-btn mt-8">
          <span className="relative z-10">Back Home</span>
          <span className="btn-stars" aria-hidden="true" />
        </Link>
      </section>
    </>
  );
}
