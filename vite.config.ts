import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig(({ command }) => {
  const isDev = command === 'serve';

  return {
    root: isDev ? 'preview' : undefined,

    plugins: [
      react(),
      libInjectCss(),
      dts({ include: ['src'], insertTypesEntry: true })
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'MyUiLibrary',
        formats: ['es', 'umd'],
        fileName: (format) => `ui-library.${format}.js`,
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
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }

});