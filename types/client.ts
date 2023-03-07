export interface IClient {
	id?: string;
	name: string;
	description: string;
	website: string;
	image: string;
	slug: string;
	files?: string[];
	createdAt?: any,
	updatedAt?: any,
	draft?: boolean,
	featured?: boolean,
	archived?: boolean,
}