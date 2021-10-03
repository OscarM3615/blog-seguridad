import type Frontmatter from './frontmatter';

export default interface Post {
	slug: string;
	data: Frontmatter;
	content?: string;
}
