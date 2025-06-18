import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-32 text-center">
        {/* Glassmorphism container */}
        <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-16 shadow-2xl">
          {/* Floating badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">
              Премиум автопостинг
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Автопостинг
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              в соцсети
            </span>
          </h1>

          <p className="text-2xl md:text-3xl mb-12 text-white/80 max-w-4xl mx-auto font-light leading-relaxed">
            Публикуйте контент в VK, OK и Telegram с помощью ИИ.
            <br />
            <span className="text-purple-300">
              Экономьте время, увеличивайте охват.
            </span>
          </p>

          {/* Modern CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="group relative px-12 py-6 text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-3">
                Начать бесплатно
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
              className="px-12 py-6 text-xl font-semibold border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Демо
            </Button>
          </div>

          {/* Modern platform indicators */}
          <div className="flex justify-center items-center gap-12">
            {[
              { name: "VK", icon: "Smartphone" },
              { name: "OK", icon: "Globe" },
              { name: "Telegram", icon: "MessageCircle" },
            ].map((platform, index) => (
              <div
                key={platform.name}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all">
                  <Icon name={platform.icon} size={32} className="text-white" />
                </div>
                <span className="text-white/90 font-semibold text-lg">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div
        className="absolute top-1/4 left-12 w-6 h-6 bg-purple-400 rounded-full opacity-60 animate-bounce"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute top-1/3 right-16 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-indigo-400 rounded-full opacity-40 animate-bounce"
        style={{ animationDelay: "2.5s" }}
      ></div>
    </section>
  );
};

export default Hero;
