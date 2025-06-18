const Features = () => {
  const features = [
    {
      icon: "🆓",
      title: "Бесплатная публикация",
      description:
        "Постите без ограничений в VK, OK и Telegram без абонентской платы",
    },
    {
      icon: "⚡",
      title: "Мгновенная синхронизация",
      description: "Автоматическая публикация на всех платформах одновременно",
    },
    {
      icon: "📅",
      title: "Планирование постов",
      description: "Настройте расписание и забудьте о ручной публикации",
    },
    {
      icon: "✏️",
      title: "Редактирование контента",
      description: "Адаптируйте посты под каждую платформу одним кликом",
    },
    {
      icon: "🏷️",
      title: "Брендинг и водяные знаки",
      description: "Добавляйте логотипы и защищайте свой контент",
    },
    {
      icon: "📊",
      title: "Аналитика охвата",
      description: "Отслеживайте эффективность публикаций в реальном времени",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Всё для эффективного SMM
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Инструменты для маркетологов, блогеров и агентств
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
