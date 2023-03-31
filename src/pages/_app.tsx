import { DefaultLayout } from '@/layouts/DefaultLayout'
import { store } from '@/store'
import { GlobalStyles } from '@/styles/global'
import { defaultTheme } from '@/styles/themes/default'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <GlobalStyles />
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
