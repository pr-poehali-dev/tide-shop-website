import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: 1,
      name: "Радужная футболка",
      price: 2990,
      image: "/img/ac17bdb2-f810-41f8-bd43-4105408c5f7a.jpg",
      type: "Готовое изделие",
      colors: [
        "Красный",
        "Оранжевый",
        "Желтый",
        "Зеленый",
        "Синий",
        "Фиолетовый",
      ],
    },
    {
      id: 2,
      name: "Худи закат",
      price: 4990,
      image: "/img/75732737-93f9-4b88-9677-c5991a124d34.jpg",
      type: "Готовое изделие",
      colors: ["Оранжевый", "Розовый", "Желтый"],
    },
    {
      id: 3,
      name: "Платье океан",
      price: 3990,
      image: "/img/35b4b92f-4b73-4a12-a53b-9e7aef9f42c3.jpg",
      type: "Готовое изделие",
      colors: ["Синий", "Фиолетовый", "Бирюзовый"],
    },
  ];

  const addToCart = (productId: number) => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></div>
              <h1 className="text-2xl font-bold text-gray-900">
                TIE-DYE STORE
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#catalog"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Каталог
              </a>
              <a
                href="#custom"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Кастом
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                О нас
              </a>
              <a
                href="#contacts"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                    {cartCount}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Уникальный
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                {" "}
                тай-дай
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Готовые изделия и индивидуальные заказы. Каждая вещь уникальна,
              как и вы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
              >
                Смотреть каталог
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Заказать кастом
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Готовые изделия
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Выберите из нашей коллекции уже готовых уникальных изделий
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-700 hover:bg-white">
                    {product.type}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h4>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.colors.map((color, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {color}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      {product.price.toLocaleString()} ₽
                    </span>
                    <Button
                      onClick={() => addToCart(product.id)}
                      className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
                    >
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Section */}
      <section id="custom" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Индивидуальные заказы
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Создайте уникальную вещь по своему дизайну. Выберите цвета, узоры
              и тип изделия.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Palette" size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Выберите цвета
                </h4>
                <p className="text-gray-600">Любые цвета и их сочетания</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shirt" size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Выберите изделие
                </h4>
                <p className="text-gray-600">Футболки, худи, платья, сумки</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Sparkles" size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Получите уникальную вещь
                </h4>
                <p className="text-gray-600">Готовность 3-5 дней</p>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
            >
              Заказать кастом
            </Button>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Контакты</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Phone" size={20} />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Mail" size={20} />
                <span>info@tiedyestore.ru</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Icon name="MapPin" size={20} />
                <span>Москва, ул. Творческая, 1</span>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-8">
              <Button variant="outline" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full"></div>
              <h4 className="text-xl font-bold">TIE-DYE STORE</h4>
            </div>
            <p className="text-gray-400 mb-4">
              Уникальный тай-дай для уникальных людей
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 TIE-DYE STORE. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
