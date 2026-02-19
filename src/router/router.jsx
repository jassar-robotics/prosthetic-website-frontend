import Loader from '@/data/Loader.json';
import PageLayoutWrapper from '@/router/PageLayoutWrapper.jsx';
import Lottie from 'lottie-react';
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const SuspenseWrapper = ({ children }) => (
  <Suspense
    fallback={
      <div className="w-full h-[100vh] bg-zinc-950 flex items-center justify-center fixed inset-0 z-50">
        <div className="w-40 h-40">
          <Lottie animationData={Loader} className="w-full h-full" loop={true} />
        </div>
      </div>
    }
  >
    {children}
  </Suspense>
);

const Home = lazy(() => import('@/pages/HomePage.jsx'));
const Projects = lazy(() => import('@/pages/ProjectsPage.jsx'));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetailPage.jsx'));
const Contributors = lazy(() => import('@/pages/ContributorsPage.jsx'));
const ContributorProfile = lazy(() => import('@/pages/ContributorProfilePage.jsx'));
const About = lazy(() => import('@/pages/AboutUsPage.jsx'));
const Contact = lazy(() => import('@/pages/ContactUsPage.jsx'));
const Policies = lazy(() => import('@/pages/PoliciesPage.jsx'));
const AskAI = lazy(() => import('@/pages/AskAIPage.jsx'));
const NotFound = lazy(() => import('@/pages/NotFoundPage.jsx'));

const router = createBrowserRouter([
  {
    element: (
      <SuspenseWrapper>
        <PageLayoutWrapper />
      </SuspenseWrapper>
    ),
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects', element: <Projects /> },
      { path: '/projects/:id', element: <ProjectDetail /> },
      { path: '/contributors', element: <Contributors /> },
      { path: '/contributors/:id', element: <ContributorProfile /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/policies', element: <Policies /> },
      { path: '/ask', element: <AskAI /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;