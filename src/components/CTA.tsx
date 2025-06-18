import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы начать?</h2>
        <p className="text-xl mb-8 text-purple-100">
          Присоединяйтесь к тысячам маркетологов, которые уже экономят время с
          нашим сервисом
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-purple-50 px-10 py-4 text-lg font-semibold shadow-lg"
          >
            Войти в систему
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-purple-600 px-10 py-4 text-lg"
          >
            Узнать больше
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-purple-200">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Бесплатно навсегда</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Без комиссий</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Поддержка 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
