import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/HsyTrailer/', // gh pages base config
  plugins: [react()],
});

