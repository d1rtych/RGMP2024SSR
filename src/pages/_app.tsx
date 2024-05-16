import type { AppProps } from 'next/app'
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@/services/queryClient';
import { ContainerStyled } from '@/components/AppBody/styled';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ContainerStyled>
        <Component {...pageProps} />
      </ContainerStyled>
    </QueryClientProvider>
  )
}
