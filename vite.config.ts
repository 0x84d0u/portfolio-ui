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
      dts({
        include: ['src'],
        insertTypesEntry: true,
        rollupTypes: true,   // 👈 single d.ts per entry (index.d.ts, ui.d.ts, etc.)
      })
    ],
    build: {
      lib: {
        entry: {
          src: path.resolve(__dirname, "src/index.ts"),
          helpers: path.resolve(__dirname, "src/@helpers/index.ts"),
          patterns: path.resolve(__dirname, "src/@patterns/index.ts"),
          ui: path.resolve(__dirname, "src/@ui/index.ts"),
        },
        name: 'PortfolioUI',
        formats: ["es", "cjs", "umd"],
        fileName: (format, entryName) => {
          if (format === "umd") {
            return `${entryName}.umd.cjs`
          }
          if (format === "cjs") {
            return `${entryName}.cjs`
          }
          return `${entryName}.js`
        },
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
        "@helpers": path.resolve(__dirname, "./src/@helpers"),
        "@patterns": path.resolve(__dirname, "./src/@patterns"),
        "@ui": path.resolve(__dirname, "./src/@ui"),
        "@src": path.resolve(__dirname, "./src"),
      },
    },
  }

});