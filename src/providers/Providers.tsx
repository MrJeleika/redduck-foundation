import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { FC, PropsWithChildren } from 'react';

import { TooltipProvider } from '@/components/ui/tooltip';

const queryClient = new QueryClient();

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <TooltipProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </TooltipProvider>
  );
};

export default Providers;
