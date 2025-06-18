import Icon from "@/components/ui/icon";

const TargetAudience = () => {
  const audiences = [
    {
      icon: "TrendingUp",
      title: "Маркетологи",
      description:
        "Масштабируйте кампании на несколько платформ без лишних затрат",
      benefit: "Экономия времени до 5 часов в день",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    {
      icon: "Sparkles",
      title: "SMM специалисты",
      description: "Управляйте аккаунтами клиентов из единого интерфейса",
      benefit: "Увеличение количества клиентов в 2 раза",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: "PenTool",
      title: "Блогеры",
      description:
        "Публикуйте контент везде одновременно и наращивайте аудиторию",
      benefit: "Рост охвата на 300% за месяц",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: "Building2",
      title: "Агентства",
      description:
        "Предлагайте клиентам премиум-сервис без дополнительных вложений",
      benefit: "Дополнительная прибыль до 50k в месяц",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-slate-100 to-slate-200 border border-slate-300 mb-8">
            <Icon name="Users" size={20} className="text-slate-700" />
            <span className="text-slate-800 font-semibold">
              Целевая аудитория
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Для кого этот
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              сервис?
            </span>
          </h2>
          <p className="text-2xl text-slate-600 font-light">
            Решение для профессионалов digital-сферы
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className={`group relative p-10 rounded-3xl bg-gradient-to-br ${audience.bgGradient} border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] backdrop-blur-sm`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Floating icon container */}
              <div className="flex items-start gap-6 mb-6">
                <div
                  className={`relative p-4 rounded-2xl bg-gradient-to-r ${audience.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon name={audience.icon} size={32} className="text-white" />

                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${audience.gradient} blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                  ></div>
                </div>

                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                    {audience.title}
                  </h3>
                </div>
              </div>

              <p className="text-xl text-slate-700 mb-6 leading-relaxed">
                {audience.description}
              </p>

              {/* Benefit card */}
              <div className="relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/70 shadow-lg">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-r ${audience.gradient} flex items-center justify-center`}
                  >
                    <Icon name="Lightbulb" size={20} className="text-white" />
                  </div>
                  <span
                    className={`bg-gradient-to-r ${audience.gradient} bg-clip-text text-transparent font-bold text-lg`}
                  >
                    {audience.benefit}
                  </span>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
