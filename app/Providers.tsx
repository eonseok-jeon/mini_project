'use client';

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        gcTime: 1000 * 60 * 60,
        retry: 0,
      },
    },
    queryCache: new QueryCache({
      onError: () => {
        //
      },
    }),
    mutationCache: new MutationCache({
      onError: () => {
        //
      },
    }),
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default Providers;
