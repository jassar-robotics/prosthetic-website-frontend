import PageConatiner from '@/components/layouts/PageContainer.jsx';
import UnderConstruction from '@/data/UnderConstruction.json';
import Lottie from 'lottie-react';
import SEOMeta from '@/components/layouts/SEOMeta.jsx';

function Construction() {
  return (
    <>
      <SEOMeta
        title="Page Not Found | PROJECT_NAME"
        description="Oops! The page you are looking for is missing. Browse our treks and tours to find your next adventure."
        canonical="https://PROJECT_NAME.com"
      />
      <PageConatiner>
        <div className="flex   flex-col  w-full items-center space-y-4 mt-10 gap-5">
          <div className="min-w-96 max-w-96 aspect-square">
            <Lottie animationData={UnderConstruction} className="w-full h-full" loop={true} />
          </div>
           <a
            href="https://wa.me/+9779869023901?text=text=Hello%20There%2C"
            target='_blank'
            rel='noopener noreferrer'
            className="text-G300 text-sm text-white font-medium w-fit rounded-md hover:bg-transparent hover:text-B500 border border-B500 transition-colors duration-500 py-2 px-3 bg-B500"
          >
            Contact</a>

        </div>
      </PageConatiner>
    </>
  );
}

export default Construction;
