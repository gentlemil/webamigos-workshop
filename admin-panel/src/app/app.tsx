import { Menu, MenuItem } from '@wa/common-ui';
import { Route, Routes, Link } from 'react-router-dom';
import { DashboardPage } from './pages/Dashboard';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create a client
const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <div className="bg-slate-900 text-white py-2">
          <div className="container mx-auto">
            <div role="navigation">
              <Menu>
                <MenuItem>
                  <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/page-2">Page 2</Link>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route
              path="/page-2"
              element={
                <div>
                  <Link to="/">Click here to go back to root page.</Link>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
