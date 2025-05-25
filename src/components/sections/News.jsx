import { motion } from "framer-motion";
import { blogArticles } from "../../data";
import Card from "../common/Card";
import SectionTitle from "../common/SectionTitle";

const News = () => {
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
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="blog" className="py-20 bg-neutral-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured News"
          subtitle="Insights and experiences from our community"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {blogArticles.map((article, index) => (
            <Card
              key={index}
              variants={itemVariants}
              className="group cursor-pointer touch-manipulation"
            >
              <motion.div
                className="relative h-48 sm:h-56 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-brand-primary px-3 py-1.5 rounded-full">
                  <span className="text-sm font-medium text-neutral-white">
                    {article.category}
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="p-4 sm:p-6 flex flex-col min-h-[200px] sm:min-h-[240px]"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  className="text-lg sm:text-xl font-bold text-neutral-white mb-2 sm:mb-3 line-clamp-2 group-hover:text-brand-light transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {article.title}
                </motion.h3>
                <p className="text-sm sm:text-base text-neutral-white/80 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-neutral-white/60 mb-4 mt-auto">
                  <span className="line-clamp-1">{article.author}</span>
                  <div className="flex items-center space-x-4 flex-shrink-0">
                    <span>{article.date}</span>
                    <span className="hidden sm:inline">{article.readTime}</span>
                  </div>
                </div>
                <motion.div
                  className="flex items-center text-neutral-white group-hover:translate-x-2 transition-transform"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm sm:text-base font-medium mr-2">
                    <a
                      href={article.link}
                      alt="Read More"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default News;
