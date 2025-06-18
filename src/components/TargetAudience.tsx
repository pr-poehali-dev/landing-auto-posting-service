const TargetAudience = () => {
  const audiences = [
    {
      icon: "📈",
      title: "Маркетологи",
      description:
        "Масштабируйте кампании на несколько платформ без лишних затрат",
      benefit: "Экономия времени до 5 часов в день",
    },
    {
      icon: "✨",
      title: "SMM специалисты",
      description: "Управляйте аккаунтами клиентов из единого интерфейса",
      benefit: "Увеличение количества клиентов в 2 раза",
    },
    {
      icon: "📝",
      title: "Блогеры",
      description:
        "Публикуйте контент везде одновременно и наращивайте аудиторию",
      benefit: "Рост охвата на 300% за месяц",
    },
    {
      icon: "🏢",
      title: "Агентства",
      description:
        "Предлагайте клиентам премиум-сервис без дополнительных вложений",
      benefit: "Дополнительная прибыль до 50k в месяц",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Для кого этот сервис?
          </h2>
          <p className="text-xl text-gray-600">
            Решение для профессионалов digital-сферы
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{audience.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {audience.description}
                  </p>
                  <div className="bg-white px-4 py-2 rounded-lg border border-purple-200">
                    <span className="text-purple-600 font-medium text-sm">
                      💡 {audience.benefit}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
