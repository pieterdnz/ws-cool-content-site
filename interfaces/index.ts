// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { Post } from 'path/to/interfaces';

export interface IPost {
	id: string;
	title: string;
	excerpt: string;
	date: string;
	content: {
		html: string;
	};
	coverImage: {
		url: string;
	};
}

export interface IProfile {
	name: string;
	title: string;
	description: string;
	imageUrl: string;
}
export interface IPage {
	slug: string;
	subtitle: string;
	content: {
		html: string;
	};
	title: string;
}
