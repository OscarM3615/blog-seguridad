import type Author from './author';

export default interface Frontmatter {
	title: string;
	description: string;
	date: string;
	image: string;
	author: Author;
	tags: string[];
}
