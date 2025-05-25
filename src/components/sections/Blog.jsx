import { motion } from "framer-motion";
import { blogArticles } from "../../data";
import Card from "../common/Card";
import SectionTitle from "../common/SectionTitle";

const Blog = () => {
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
          title="Latest Stories"
          subtitle="Insights and experiences from our community"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogArticles.map((article, index) => (
            <Card
              key={index}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <motion.div
                className="h-56 overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-brand-primary px-3 py-1 rounded-full">
                  <span className="text-sm text-neutral-white">
                    {article.category}
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="p-6 flex flex-col min-h-[280px]"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.h3
                  className="text-xl font-bold text-neutral-white mb-3 group-hover:text-brand-light transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {article.title}
                </motion.h3>
                <p className="text-neutral-white/80 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-neutral-white/60 mb-4">
                  <span>{article.author}</span>
                  <div className="flex items-center space-x-4">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <motion.div
                  className="mt-auto flex items-center text-neutral-white group-hover:translate-x-2 transition-transform"
                  whileHover={{ x: 5 }}
                >
                  <span className="mr-2 font-medium">Read More</span>
                  <svg
                    className="w-4 h-4"
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

export default Blog;
