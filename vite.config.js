import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react-native-web',
        'react-native-web/dist/apis/StyleSheet/registry'
      ]
    }
  }
})
