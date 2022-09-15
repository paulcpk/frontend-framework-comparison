module.exports = {
	transform: {
	  '^.+\\.svelte$': 'svelte-jester',
	  '^.+\\.js$': 'babel-jest',
	},
	moduleFileExtensions: ['js', 'svelte'],
	testPathIgnorePatterns: ['<rootDir>/tests/e2e/', '<rootDir>/node_modules/'],
  }