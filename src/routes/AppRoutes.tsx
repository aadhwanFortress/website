import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider, useLocation, useOutlet } from 'react-router-dom'
import { RouteLoader } from '../components/RouteLoader'
import { SiteLayout } from '../layouts/SiteLayout'

const HomePage = lazy(() => import('../pages/HomePage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const ServicesPage = lazy(() => import('../pages/ServicesPage'))
const ServiceDetailsPage = lazy(() => import('../pages/ServiceDetailsPage'))
const PricingPage = lazy(() => import('../pages/PricingPage'))
const TeamPage = lazy(() => import('../pages/TeamPage'))
const BlogPage = lazy(() => import('../pages/BlogPage'))
const BlogDetailsPage = lazy(() => import('../pages/BlogDetailsPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

function AnimatedOutlet() {
  const location = useLocation()
  const outlet = useOutlet()

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<RouteLoader />}>
        <div key={location.pathname}>{outlet}</div>
      </Suspense>
    </AnimatePresence>
  )
}

const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      {
        element: <AnimatedOutlet />,
        children: [
          { path: '/', element: <HomePage /> },
          { path: '/about', element: <AboutPage /> },
          { path: '/services', element: <ServicesPage /> },
          { path: '/service-details', element: <ServiceDetailsPage /> },
          { path: '/pricing', element: <PricingPage /> },
          { path: '/team', element: <TeamPage /> },
          { path: '/blog', element: <BlogPage /> },
          { path: '/blog-details', element: <BlogDetailsPage /> },
          { path: '/contact', element: <ContactPage /> },
          { path: '*', element: <NotFoundPage /> },
        ],
      },
    ],
  },
])

export function AppRoutes() {
  return <RouterProvider router={router} />
}
