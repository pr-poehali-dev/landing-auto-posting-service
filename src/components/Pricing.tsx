import { Check } from "lucide-react";
import { Button } from "./ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Бесплатный",
      price: "0",
      period: "навсегда",
      description: "Идеально для начала работы",
      features: [
        "5 публикаций в месяц",
        "1 социальная сеть",
        "Базовая аналитика",
        "Стандартная поддержка",
      ],
      popular: false,
      buttonText: "Начать бесплатно",
    },
    {
      name: "Премиум",
      price: "1",
      period: "за публикацию",
      description: "Для активного продвижения",
      features: [
        "Безлимитные публикации",
        "Все социальные сети",
        "Расширенная аналитика",
        "Приоритетная поддержка",
        "Планировщик постов",
        "Автопостинг",
      ],
      popular: true,
      buttonText: "Выбрать план",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Тарифные планы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите план, который подходит именно вам
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl backdrop-blur-sm border ${
                plan.popular
                  ? "bg-white/70 border-purple-200 shadow-2xl scale-105"
                  : "bg-white/50 border-white/20 shadow-xl"
              } transition-all duration-300 hover:shadow-2xl hover:scale-105`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Популярный
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-lg text-gray-600 ml-2">
                    ₽ {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 text-lg font-semibold ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    : "bg-gray-800 hover:bg-gray-900"
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
