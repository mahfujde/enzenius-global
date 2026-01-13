
export interface OfficeLocation {
  country: string;
  address: string;
  phone: string;
  email: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Destination {
  name: string;
  imageUrl: string;
}

export interface BlogPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media_url?: string;
  link: string;
  categories_names?: string[];
}
