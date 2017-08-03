import {Category} from './category';

export class Project {
	id: number;
    title: string;
    name: string;
	descriptionShort: string;
    descriptionLong: string;
    images: {
        icon: string;
        poster: string;
    };
    categories: Category[];
    links: [{
        url: string;
        description: string;
    }];
}