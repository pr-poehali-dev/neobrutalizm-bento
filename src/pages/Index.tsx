import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const cities = [
    'Астрахань', 'Барнаул', 'Белгород', 'Вологда', 'Воронеж', 'Курск', 
    'Липецк', 'Муром', 'Новосибирск', 'Оренбург', 'Пермь', 'Пятигорск', 
    'Смоленск', 'Ставрополь', 'Тюмень', 'Чебоксары', 'Челябинск'
  ];

  const services = [
    {
      title: 'ОТВЕТСТВЕННОЕ ХРАНЕНИЕ',
      description: 'WMS-системы, контроль качества. Оплата только за занимаемое место.',
      icon: 'Warehouse'
    },
    {
      title: 'ФУЛФИЛМЕНТ',
      description: 'Упаковка по стандартам, маркировка, доставка до складов маркетплейсов.',
      icon: 'Package'
    },
    {
      title: 'СОРТИРОВКА И ОБРАБОТКА',
      description: 'Высокая скорость и точность обработки товаров.',
      icon: 'GitBranch'
    },
    {
      title: 'ТРАНСПОРТНАЯ ЛОГИСТИКА',
      description: 'Доставка от двери до двери с надежными партнерами.',
      icon: 'Truck'
    },
    {
      title: 'ИТ-УСЛУГИ И СЕРВИСЫ',
      description: 'WMS, интеграция с 1С, личный кабинет для отслеживания.',
      icon: 'Monitor'
    },
    {
      title: 'АУТСОРСИНГ ПЕРСОНАЛА',
      description: 'Гибкое решение для пиковых нагрузок и масштабирования.',
      icon: 'Users'
    }
  ];

  const stats = [
    { value: '17', label: 'СКЛАДОВ' },
    { value: '18,000+', label: 'КВ.М ПЛОЩАДИ' },
    { value: '17', label: 'ГОРОДОВ' },
    { value: '10+', label: 'ЛЕТ ОПЫТА' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-secondary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(/img/3d098706-19d0-40d5-9a8b-ba369a43ca3a.jpg)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
              ВАША ЛОГИСТИКА.
              <br />
              <span className="text-primary">НАША ОТВЕТСТВЕННОСТЬ.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-medium">
              Комплексные логистические решения для вашего бизнеса
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 text-lg"
              >
                ПОЛУЧИТЬ РАСЧЕТ
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-secondary font-bold px-8 py-6 text-lg"
              >
                ОБСУДИТЬ ПАРТНЁРСТВО
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl md:text-5xl font-black text-secondary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-muted-foreground tracking-wider">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-secondary mb-8">
                О КОМПАНИИ
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  <strong>ООО "Логистика Сервис"</strong> — 3PL-оператор, который берет на себя 
                  все логистические задачи, позволяя вам сфокусироваться на развитии бизнеса.
                </p>
                <p>
                  Мы обеспечиваем <strong>прозрачность</strong> процессов, используем современные 
                  <strong>технологии</strong> и гарантируем <strong>надежность</strong> выполнения 
                  всех обязательств.
                </p>
                <div className="bg-accent p-6 rounded-none border-l-4 border-primary">
                  <p className="font-bold text-secondary">
                    Партнёр Яндекс.Маркета
                  </p>
                  <p className="text-muted-foreground">
                    Работаем по всем стандартам крупнейшего маркетплейса России
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-secondary text-white border-0">
                <CardContent className="p-8">
                  <Icon name="Target" size={48} className="mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">ПРОЗРАЧНОСТЬ</h3>
                  <p className="text-sm opacity-80">Полный контроль процессов</p>
                </CardContent>
              </Card>
              
              <Card className="bg-primary text-white border-0">
                <CardContent className="p-8">
                  <Icon name="Zap" size={48} className="mb-4" />
                  <h3 className="text-xl font-bold mb-2">ТЕХНОЛОГИИ</h3>
                  <p className="text-sm opacity-80">WMS и интеграции</p>
                </CardContent>
              </Card>
              
              <Card className="bg-accent border-0">
                <CardContent className="p-8">
                  <Icon name="Shield" size={48} className="mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-2 text-secondary">НАДЁЖНОСТЬ</h3>
                  <p className="text-sm text-muted-foreground">Гарантия качества</p>
                </CardContent>
              </Card>
              
              <Card className="bg-muted border-0">
                <CardContent className="p-8">
                  <Icon name="Handshake" size={48} className="mb-4 text-secondary" />
                  <h3 className="text-xl font-bold mb-2 text-secondary">ПАРТНЁРСТВО</h3>
                  <p className="text-sm text-muted-foreground">Долгосрочные отношения</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-16 text-center">
            КОМПЛЕКСНЫЕ ЛОГИСТИЧЕСКИЕ РЕШЕНИЯ
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary p-3 rounded-none">
                      <Icon name={service.icon as any} size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-black text-secondary mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                ГЕОГРАФИЯ ПРИСУТСТВИЯ
              </h2>
              <p className="text-xl mb-8 opacity-80">
                17 складов в ключевых городах России
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {cities.map((city, index) => (
                  <div key={index} className="bg-white/10 p-4 rounded-none border border-white/20">
                    <div className="text-sm font-bold">{city}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 p-8 rounded-none">
              <h3 className="text-2xl font-bold mb-6 text-primary">КЛЮЧЕВЫЕ ПРЕИМУЩЕСТВА</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span>Стратегическое расположение складов</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span>Быстрая доставка по всей стране</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={20} className="text-primary" />
                  <span>Надежное хранение товаров</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="BarChart3" size={20} className="text-primary" />
                  <span>Масштабируемость под ваши задачи</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-secondary mb-8">
              НАЧАТЬ СОТРУДНИЧЕСТВО
            </h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в течение часа
            </p>
          </div>
          
          <Card className="bg-white shadow-2xl border-0">
            <CardContent className="p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-secondary mb-2">
                      ИМЯ *
                    </label>
                    <Input 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="border-2 border-muted focus:border-primary rounded-none h-12"
                      placeholder="Ваше имя"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-secondary mb-2">
                      КОМПАНИЯ *
                    </label>
                    <Input 
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="border-2 border-muted focus:border-primary rounded-none h-12"
                      placeholder="Название компании"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-secondary mb-2">
                      ТЕЛЕФОН *
                    </label>
                    <Input 
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="border-2 border-muted focus:border-primary rounded-none h-12"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-secondary mb-2">
                      EMAIL *
                    </label>
                    <Input 
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="border-2 border-muted focus:border-primary rounded-none h-12"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-secondary mb-2">
                    СООБЩЕНИЕ
                  </label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="border-2 border-muted focus:border-primary rounded-none min-h-[120px]"
                    placeholder="Расскажите о ваших потребностях в логистике..."
                  />
                </div>
                
                <div className="text-center">
                  <Button 
                    type="submit"
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-bold px-12 py-6 text-lg"
                  >
                    ОТПРАВИТЬ ЗАЯВКУ
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-black mb-6 text-primary">
                ЛОГИСТИКА СЕРВИС
              </h3>
              <p className="text-lg opacity-80 mb-6">
                Развивайте свой бизнес. Оставьте логистику нам.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="border-white/20 hover:bg-white hover:text-secondary">
                  <Icon name="Phone" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-white/20 hover:bg-white hover:text-secondary">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="border-white/20 hover:bg-white hover:text-secondary">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">КОНТАКТЫ</h4>
              <div className="space-y-3 text-sm opacity-80">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@logistics-service.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Логистическая, д. 1</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">УСЛУГИ</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div>Ответственное хранение</div>
                <div>Фулфилмент</div>
                <div>Транспортная логистика</div>
                <div>ИТ-сервисы</div>
                <div>Аутсорсинг персонала</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm opacity-60">
            © 2024 ООО "Логистика Сервис". Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}