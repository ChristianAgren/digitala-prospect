import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/digitala-prospekt/',
  plugins: [reactRefresh()],
  server: {
    watch: {
      usePolling: true,
    },
    origin: 'http://localhost:3000',
    host: true,
    open: true,
    fs: {
      strict: true,
    },
  },
});
