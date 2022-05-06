export interface Project{
	_id: string;
	image: { _key: string, _type: string, asset: { _ref: string, _type: string } }[];
	name: string;
	slug: { _type: string, current: string };
	tags: string[];
	url: string;
	github: string;
	_createdAt: Date;
	_updatedAt: Date;
}