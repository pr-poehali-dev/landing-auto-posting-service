import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contacts = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Есть вопросы? Мы всегда готовы помочь и ответить на любые вопросы
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-blue-400"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-blue-400"
                  />
                </div>
              </div>

              <Input
                type="text"
                placeholder="Тема сообщения"
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-blue-400"
              />

              <Textarea
                placeholder="Ваше сообщение"
                rows={5}
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-blue-400 resize-none"
              />

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3"
              >
                <Send className="h-5 w-5 mr-2" />
                Отправить сообщение
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-blue-200">support@smmplatform.ru</p>
                    <p className="text-blue-200">info@smmplatform.ru</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-blue-200">+7 (495) 123-45-67</p>
                    <p className="text-sm text-blue-300">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Офис</h4>
                    <p className="text-blue-200">г. Москва</p>
                    <p className="text-blue-200">ул. Примерная, д. 123</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="font-semibold mb-3">Социальные сети</h4>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-200 hover:text-white hover:bg-white/20"
                >
                  ВКонтакте
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-200 hover:text-white hover:bg-white/20"
                >
                  Telegram
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-200 hover:text-white hover:bg-white/20"
                >
                  YouTube
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
