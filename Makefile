install:
	npm install

calc:
	npm run babel-node -- src/bin/brain-calc.js

even:
	npm run babel-node -- src/bin/brain-even.js

gcd:
	npm run babel-node -- src/bin/brain-gcd.js

publish:
	npm publish

lint:
	npm run eslint .