import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
<<<<<<< HEAD
  base: '/<test>/',  // 添加這行，替換 <repository-name> 為你的 GitHub repo 名稱
=======
>>>>>>> 400f59d57a57e3e4552f3e6c6e9eb713b5915ef9
});
