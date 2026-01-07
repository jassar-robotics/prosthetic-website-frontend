import PageConatiner from '@/components/layouts/PageContainer.jsx';
import SEOMeta from '@/components/layouts/SEOMeta.jsx';

function HomePage() {
  return (
    <>
      <SEOMeta
        title="Page Not Found | PROJECT_NAME"
        description="Oops! The page you are looking for is missing. Browse our treks and tours to find your next adventure."
        canonical="https://PROJECT_NAME.com"
      />
      <PageConatiner>
        Home Page
      </PageConatiner>
    </>
  );
}

export default HomePage;
