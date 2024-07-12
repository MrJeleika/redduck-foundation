import { Suspense, memo } from 'react';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from '@/components/common/header';
import { PageLoader } from '@/components/page-loader/page-loader';
import { Toaster } from '@/components/ui/toaster';
import Providers from '@/providers/Providers';

const DefaultLayout = memo(() => {
  return (
    <Providers>
      <div className="relative">
        <img
          className="absolute -z-10 h-full w-full object-cover"
          src={'/images/top_bg.png'}
        />
        <div className="mx-auto flex min-h-screen max-w-[95%] flex-1 flex-col xl:max-w-[1375px]">
          <Header />
          <div className="font-quicksand relative">
            <Suspense fallback={<PageLoader screen />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
        <Toaster />
      </div>
    </Providers>
  );
});
DefaultLayout.displayName = 'DefaultLayout';

export default DefaultLayout;
