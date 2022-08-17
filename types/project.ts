export interface Project{
	_id: string;
	images: string[];
	name: string;
	description: string;
	slug: { _type: string, current: string };
	tags: string[];
	url: string;
	github: string;
	_createdAt: Date;
	_updatedAt: Date;
}