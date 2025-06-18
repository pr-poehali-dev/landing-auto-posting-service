import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Автопостинг в соцсети
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
          Публикуйте контент в VK, OK и Telegram бесплатно. Экономьте время,
          увеличивайте охват, развивайте бизнес.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 text-lg font-semibold shadow-lg"
          >
            Начать бесплатно
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg"
          >
            Демо
          </Button>
        </div>
        <div className="mt-12 flex justify-center items-center gap-8 text-purple-200">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📱</span>
            <span>VK</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌐</span>
            <span>OK</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💬</span>
            <span>Telegram</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
