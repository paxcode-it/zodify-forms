import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.ts'],
  dts: true,
  shims: true,
  clean: true,
  skipNodeModulesBundle: true,
  outDir: 'lib',
  target: 'esnext',
  treeshake: true,
  format: ['esm'],
})
