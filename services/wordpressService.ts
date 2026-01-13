import { BlogPost } from '../types';

// The WordPress site URL for Enzenius Global content
const WP_SITE_ID = 'enzeniusglobal.wordpress.com';
const WP_BASE_URL = `https://public-api.wordpress.com/wp/v2/sites/${WP_SITE_ID}`;

export const fetchPosts = async (page = 1, perPage = 9): Promise<BlogPost[]> => {
  try {
    const response = await fetch(`${WP_BASE_URL}/posts?page=${page}&per_page=${perPage}&_embed`);
    
    if (!response.ok) {
      console.warn('WP API Response not OK, using local fallback logic if needed.');
      return [];
    }
    
    const data = await response.json();
    
    return data.map((post: any) => ({
      id: post.id,
      date: post.date,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      link: post.link,
      featured_media_url: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop',
      categories_names: post._embedded?.['wp:term']?.[0]?.map((term: any) => term.name) || ['Education']
    }));
  } catch (error) {
    console.error('WordPress Fetch Error:', error);
    return [];
  }
};

export const fetchPostById = async (id: number): Promise<BlogPost | null> => {
  try {
    const response = await fetch(`${WP_BASE_URL}/posts/${id}?_embed`);
    if (!response.ok) return null;
    const post = await response.json();
    
    return {
      id: post.id,
      date: post.date,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      link: post.link,
      featured_media_url: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop',
      categories_names: post._embedded?.['wp:term']?.[0]?.map((term: any) => term.name) || ['Education']
    };
  } catch (error) {
    return null;
  }
};