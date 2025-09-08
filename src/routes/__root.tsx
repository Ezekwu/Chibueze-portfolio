import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Navbar from '../components/layout/Navbar';

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen animated-gradient">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </div>
  ),
});
