export interface IBookNote{
	id?: string;
	image: string;
	name: string;
	subtitle: string;
	intro: string;
	description: string;
	slug: string;
	createdAt?: any,
	updatedAt?: any,
	draft?: boolean,
}