import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      insertTypesEntry: true,
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/globals.css',
          dest: '.'
        }
      ]
    })
  ],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, "src/index.ts"),
        helpers: path.resolve(__dirname, "src/@helpers/index.ts"),
        patterns: path.resolve(__dirname, "src/@patterns/index.ts"),
        ui: path.resolve(__dirname, "src/@ui/index.ts"),
      },
      name: 'PortfolioUI',
      formats: ["es", "cjs"],
      // Corrected fileName to output .es.js and .cjs.js
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      // Adjusted alias to match tsconfig
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

