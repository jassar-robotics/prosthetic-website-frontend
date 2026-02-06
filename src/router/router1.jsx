import Loader from '@/data/Loader.json';
import PageLayoutWrapper from '@/router/PageLayoutWrapper.jsx';
import Lottie from 'lottie-react';
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const SuspenseWrapper = ({ children }) => (
  <Suspense
    fallback={
      <div className="p-10 w-full h-[100vh] bg-white flex items-center justify-center fixed inset-0 z-50 text-center">
        <div className="min-w-80 max-w-80 aspect-square">
          <Lottie animationData={Loader} className="w-full h-full" loop={true} />
        </div>
      </div>
    }
  >
    {children}
  </Suspense>
);

const Home = lazy(() => import('@/pages/HomePage.jsx'));
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
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;
