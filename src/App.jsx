import { RouterProvider } from 'react-router-dom';
import router from '@/router/router.jsx';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { MantineProvider } from '@mantine/core';
import LenisProvider from '@/components/layouts/LenisProvider';
import 'react-toastify/dist/ReactToastify.css';



import Construction from '@/pages/ConstructionPage';

function App() {
  return (



    // Turn This On When Site Is Live and Ready
    // <LenisProvider>
    //   <MantineProvider withGlobalStyles withNormalizeCSS>
    //     <RouterProvider router={router} />
    //     <ToastContainer position="bottom-right" autoClose={3000} />
    //   </MantineProvider>
    // </LenisProvider> 






    // Turn This On When Site Is Live and Under Construction
    <Construction/>


  );
}
export default App;
