import { pathsToModuleNameMapper } from 'ts-jest'

import sharedConfig from '../../jest.config'

import { compilerOptions } from './tsconfig.json'

import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  ...sharedConfig,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
}

export default config
