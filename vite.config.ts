import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      API_URL: process.env.API_URL,
      API_KEY: process.env.API_KEY
    }
  }
});
