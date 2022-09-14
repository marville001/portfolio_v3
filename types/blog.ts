
export interface Blog {
	title: string;
	intro: string;
	blog: string;
	tag?: string,
	cover?: string;
	slug?: string;
	id?: string;
	createdAt?: any,
	updatedAt?: any,
	draft?: boolean,
}