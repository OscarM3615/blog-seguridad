import type Post from 'shared/models/post';

export const sortPosts = (a: Post, b: Post): number => {
	return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
};
