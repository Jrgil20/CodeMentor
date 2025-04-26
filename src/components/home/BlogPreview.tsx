import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon } from 'lucide-react';
import { blogPosts } from '../../data/blog';
import Button from '../common/Button';

const BlogPreview: React.FC = () => {
  // Only display the latest 3 blog posts on the home page
  const latestPosts = blogPosts.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Últimos Artículos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Recursos técnicos y consejos para desarrolladores en formación
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {latestPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center mb-3 text-sm text-gray-500 dark:text-gray-400">
                  <CalendarIcon size={16} className="mr-1" />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button to={`/blog/${post.slug}`} variant="ghost" className="text-blue-600 dark:text-blue-400 p-0 hover:bg-transparent hover:text-blue-700 dark:hover:text-blue-300">
                  Leer artículo
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Button to="/blog" variant="outline">
            Ver todos los artículos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;