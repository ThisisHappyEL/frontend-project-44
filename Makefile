install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node games/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .