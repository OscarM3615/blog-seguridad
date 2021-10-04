const fs = require('fs');
const path = require('path');

if (process.argv.length !== 3) {
	console.log('Syntax: yarn new-post <name>');
	process.exit();
}

try {
	fs.copyFileSync(
		path.join('src', 'post-template.md'),
		path.join('posts', `${process.argv[process.argv.length - 1]}.md`)
	);

	console.log('Successfully created new post.');
} catch (err) {
	console.error(err);
}
