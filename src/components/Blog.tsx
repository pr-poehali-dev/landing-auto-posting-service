import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Blog = () => {
  const posts = [
    {
      title: "10 секретов эффективного SMM-продвижения в 2024",
      excerpt:
        "Узнайте, какие тренды актуальны сейчас и как адаптировать свою стратегию под современные реалии социальных сетей.",
      date: "15 марта 2024",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      readTime: "5 мин",
    },
    {
      title: "Автоматизация постинга: экономим время правильно",
      excerpt:
        "Как настроить автопостинг так, чтобы сохранить живое общение с аудиторией и не потерять органичность контента.",
      date: "10 марта 2024",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      readTime: "3 мин",
    },
    {
      title: "Аналитика соцсетей: какие метрики действительно важны",
      excerpt:
        "Разбираемся в ключевых показателях эффективности и учимся принимать решения на основе данных.",
      date: "5 марта 2024",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      readTime: "7 мин",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Блог о SMM</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полезные статьи, советы и актуальные тренды в мире социальных сетей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-600">
                  {post.readTime}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Button
                  variant="ghost"
                  className="p-0 h-auto font-semibold text-purple-600 hover:text-purple-700 group"
                >
                  Читать далее
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
          >
            Смотреть все статьи
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
