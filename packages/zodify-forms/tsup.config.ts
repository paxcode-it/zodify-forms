import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.ts'],
  dts: true,
  shims: true,
  clean: true,
  skipNodeModulesBundle: true,
  tsconfig: './tsconfig.json',
  outDir: 'lib',
  target: 'es2022',
  treeshake: true,
  format: ['esm'],
})
