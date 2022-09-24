export interface IProject{
	id?: string;
	images: string[];
	name: string;
	intro: string;
	description: string;
	slug: string;
	website: string;
	tag: string;
	github: string;
	createdAt?: any,
	updatedAt?: any,
	draft?: boolean,
	featured?: boolean,
	archived?: boolean,
}