
export interface Blog {
	title: string;
	intro: string;
	blog: string;
	tags?: string[],
	cover?: string;
	slug?: string;
	id?: string;
	createdAt?: any,
	updatedAt?: any,
	draft?: boolean,
	published?: boolean;
	publishedAt?: any,
}