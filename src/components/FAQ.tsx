import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      question: "Какие социальные сети поддерживаются?",
      answer:
        "Мы поддерживаем основные российские социальные сети: ВКонтакте, Одноклассники и Telegram. Планируем добавить Instagram и Facebook в ближайшее время.",
    },
    {
      question: "Как работает тариф «1 рубль за публикацию»?",
      answer:
        "Вы платите только за фактически опубликованные посты. Никаких абонентских плат или скрытых комиссий. Деньги списываются автоматически после успешной публикации.",
    },
    {
      question: "Можно ли планировать публикации заранее?",
      answer:
        "Да, в премиум-плане доступен планировщик постов. Вы можете заранее подготовить контент и настроить автоматическую публикацию в нужное время.",
    },
    {
      question: "Какая аналитика доступна?",
      answer:
        "В бесплатном плане — базовая статистика просмотров и реакций. В премиум-плане — подробная аналитика охвата, вовлеченности, лучшее время для публикаций и сравнение эффективности постов.",
    },
    {
      question: "Как быстро приходит поддержка?",
      answer:
        "Стандартная поддержка отвечает в течение 24 часов. Премиум-пользователи получают приоритетную поддержку с ответом в течение 4 часов.",
    },
    {
      question: "Можно ли отменить подписку?",
      answer:
        "В премиум-плане нет подписки — вы платите только за публикации. Бесплатный план остается доступным всегда.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-gray-600">
            Ответы на популярные вопросы о нашем сервисе
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg px-6 border border-purple-100"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-purple-600">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base leading-relaxed pt-2">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
