import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Zap",
      title: "Бесплатная публикация",
      description:
        "Постите без ограничений в VK, OK и Telegram без абонентской платы",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: "Rocket",
      title: "Мгновенная синхронизация",
      description: "Автоматическая публикация на всех платформах одновременно",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "Calendar",
      title: "Планирование постов",
      description: "Настройте расписание и забудьте о ручной публикации",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "Edit3",
      title: "Редактирование контента",
      description: "Адаптируйте посты под каждую платформу одним кликом",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: "Tag",
      title: "Брендинг и водяные знаки",
      description: "Добавляйте логотипы и защищайте свой контент",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: "BarChart3",
      title: "Аналитика охвата",
      description: "Отслеживайте эффективность публикаций в реальном времени",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 mb-8">
            <Icon name="Sparkles" size={20} className="text-purple-600" />
            <span className="text-purple-800 font-semibold">
              Премиум возможности
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Всё для эффективного
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              SMM
            </span>
          </h2>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto font-light">
            Профессиональные инструменты для маркетологов, блогеров и агентств
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
              }}
            >
              {/* Gradient border effect */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Icon container */}
              <div
                className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                  <Icon
                    name={feature.icon}
                    size={28}
                    className={`bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {feature.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
