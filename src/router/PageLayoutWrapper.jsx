import PageLayout from '@/components/layouts/PageLayout.jsx';
import { Outlet } from 'react-router-dom';

const PageLayoutWrapper = () => (
  <PageLayout>
    <Outlet />
  </PageLayout>
);

export default PageLayoutWrapper;
