
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchPosts, fetchPostById } from '../services/wordpressService';
import { BlogPost } from '../types';

const BlogPage: React.FC = () => {
  const { postId } = useParams<{ postId?: string }>();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [singlePost, setSinglePost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      if (postId) {
        const post = await fetchPostById(parseInt(postId));
        setSinglePost(post);
      } else {
        const data = await fetchPosts();
        setPosts(data);
      }
      setLoading(false);
    };
    loadContent();
  }, [postId]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-24">
        <div className="w-16 h-16 border-4 border-brandCTA border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-6 text-slate-400 font-black uppercase tracking-widest text-xs">Loading Insights...</p>
      </div>
    );
  }

  // Single Post Detail View
  if (selectedPostId && singlePost) {
    return (
      <div className="bg-white min-h-screen pb-24 animate-in fade-in duration-500">
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img 
            src={singlePost.featured_media_url} 
            alt={singlePost.title.rendered} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
            <div className="container mx-auto">
              <div className="flex gap-2 mb-4">
                {singlePost.categories_names?.map((cat, i) => (
                  <span key={i} className="bg-brandCTA text-white px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest">
                    {cat}
                  </span>
                ))}
              </div>
              <h1 
                className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-4"
                dangerouslySetInnerHTML={{ __html: singlePost.title.rendered }}
              />
              <p className="text-blue-200 font-bold text-sm uppercase tracking-widest">
                Published {new Date(singlePost.date).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 py-16">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg prose-slate max-w-none 
              prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-primary
              prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-primary prose-a:text-brandCTA hover:prose-a:text-primary transition-colors"
              dangerouslySetInnerHTML={{ __html: singlePost.content.rendered }}
            />
            
            <div className="mt-20 pt-10 border-t border-slate-100 flex justify-between items-center">
               <Link 
                 to="/blogs"
                 className="flex items-center gap-2 font-black uppercase tracking-widest text-xs text-primary hover:text-brandCTA transition-colors"
               >
                 <i className="fas fa-arrow-left"></i> Back to Archive
               </Link>
               <div className="flex gap-4">
                 <button className="text-slate-400 hover:text-primary transition-colors"><i className="fab fa-facebook-f"></i></button>
                 <button className="text-slate-400 hover:text-primary transition-colors"><i className="fab fa-twitter"></i></button>
                 <button className="text-slate-400 hover:text-primary transition-colors"><i className="fab fa-linkedin-in"></i></button>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Archive List View
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Banner Section */}
      <section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2000&auto=format&fit=crop')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50"></div>
        </div>
        <div className="relative h-full flex items-center px-6 md:px-12">
          <div className="container mx-auto text-center">
            <span className="text-brandCTA font-black uppercase tracking-[0.4em] text-[10px] block mb-4">The Global Insight</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-4">
              Expert Blogs & Resources
            </h1>
            <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Stay updated with the latest trends in overseas education, visa regulations, and university admissions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          {posts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-[3rem] border border-slate-100 shadow-sm">
              <i className="fas fa-newspaper text-5xl text-slate-100 mb-6"></i>
              <h3 className="text-2xl font-black text-primary uppercase tracking-tight">No posts available yet</h3>
              <p className="text-slate-400 mt-2">Check back soon for our latest educational updates.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post) => (
                <Link 
                  key={post.id} 
                  to={`/blogs/${post.id}`}
                  className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all group cursor-pointer flex flex-col h-full block"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={post.featured_media_url} 
                      alt={post.title.rendered} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-6 left-6 flex gap-2">
                       {post.categories_names?.slice(0, 1).map((cat, idx) => (
                         <span key={idx} className="bg-white/90 backdrop-blur px-3 py-1 rounded text-[9px] font-black uppercase tracking-widest text-primary shadow-sm">
                           {cat}
                         </span>
                       ))}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <p className="text-[10px] font-black text-brandCTA uppercase tracking-[0.2em] mb-4">
                      {new Date(post.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                    <h3 
                      className="text-xl font-black text-primary uppercase tracking-tight mb-4 group-hover:text-brandCTA transition-colors line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <div 
                      className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-8 flex-grow"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary group-hover:gap-2 flex items-center gap-1 transition-all">
                        Read Story <i className="fas fa-arrow-right text-[8px] text-brandCTA"></i>
                      </span>
                      <div className="flex -space-x-2">
                         <div className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[8px] text-slate-400">
                           <i className="fas fa-share-alt"></i>
                         </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
