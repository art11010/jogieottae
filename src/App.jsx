import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

// style
import CommonStyle from './style/Common.style';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CommonStyle />
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
