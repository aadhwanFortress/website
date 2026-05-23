import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { useScrollToTop } from '../hooks/useScrollToTop'

export function SiteLayout() {
  useScrollToTop()

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
