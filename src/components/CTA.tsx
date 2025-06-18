import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CTA = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Advanced background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

      {/* Animated mesh gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(167,139,250,0.3),transparent_50%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_90%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div
        className="absolute top-40 right-32 w-3 h-3 bg-blue-400 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-32 left-1/4 w-4 h-4 bg-indigo-400 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center px-8">
        {/* Glassmorphism container */}
        <div className="backdrop-blur-2xl bg-white/5 rounded-3xl border border-white/10 p-16 shadow-2xl">
          {/* Status indicator */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 mb-12">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 font-semibold">
              Система готова к запуску
            </span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Готовы
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              начать?
            </span>
          </h2>

          <p className="text-2xl md:text-3xl mb-12 text-white/80 max-w-4xl mx-auto font-light leading-relaxed">
            Присоединяйтесь к тысячам маркетологов,
            <br />
            <span className="text-purple-300">
              которые уже экономят время с нашим сервисом
            </span>
          </p>

          {/* Modern CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="group relative px-16 py-8 text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-4">
                <Icon name="Rocket" size={28} />
                Войти в систему
                <Icon
                  name="ArrowRight"
                  size={24}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-16 py-8 text-2xl font-semibold border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <Icon name="Info" size={24} className="mr-3" />
              Узнать больше
            </Button>
          </div>

          {/* Premium features grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: "Shield",
                text: "Бесплатно навсегда",
                color: "text-green-400",
              },
              {
                icon: "CreditCard",
                text: "Без комиссий",
                color: "text-blue-400",
              },
              {
                icon: "Clock",
                text: "Поддержка 24/7",
                color: "text-purple-400",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Icon
                    name={feature.icon}
                    size={32}
                    className={feature.color}
                  />
                </div>
                <span className="text-white/90 font-semibold text-lg">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
