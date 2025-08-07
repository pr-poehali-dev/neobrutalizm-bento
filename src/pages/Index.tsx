import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });

  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [partnerOpen, setPartnerOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  const cities = [
    'Астрахань', 'Барнаул', 'Белгород', 'Вологда', 'Воронеж', 'Курск', 
    'Липецк', 'Муром', 'Новосибирск', 'Оренбург', 'Пермь', 'Пятигорск', 
    'Смоленск', 'Ставрополь', 'Тюмень', 'Чебоксары', 'Челябинск'
  ];

  const services = [
    {
      title: 'ОТВЕТСТВЕННОЕ\nХРАНЕНИЕ',
      description: 'WMS-системы, контроль качества. Оплата только за занимаемое место.',
      icon: 'Warehouse',
      size: 'large',
      fullDescription: 'Профессиональное складское хранение товаров с использованием современных WMS-систем. Полный контроль качества, температурные режимы, система безопасности 24/7. Оплата только за фактически занимаемые площади.',
      features: ['WMS-система учета', 'Контроль температуры', 'Видеонаблюдение', 'Страхование товаров', 'Отчетность в режиме реального времени']
    },
    {
      title: 'ФУЛФИЛМЕНТ',
      description: 'Упаковка, маркировка, доставка до складов маркетплейсов.',
      icon: 'Package',
      size: 'medium',
      fullDescription: 'Комплексные услуги фулфилмента для интернет-магазинов и маркетплейсов. От приемки товара до доставки конечному покупателю.',
      features: ['Упаковка по стандартам маркетплейсов', 'Маркировка и этикетирование', 'Интеграция с маркетплейсами', 'Обработка возвратов', 'Кросс-докинг']
    },
    {
      title: 'СОРТИРОВКА',
      description: 'Высокая скорость и точность.',
      icon: 'GitBranch',
      size: 'small',
      fullDescription: 'Профессиональная сортировка товаров по различным параметрам с использованием автоматизированных систем.',
      features: ['Автоматизированная сортировка', 'Сортировка по размерам', 'Категоризация товаров', 'Контроль качества', 'Быстрая обработка']
    },
    {
      title: 'ТРАНСПОРТНАЯ\nЛОГИСТИКА',
      description: 'Доставка от двери до двери с надежными партнерами.',
      icon: 'Truck',
      size: 'large',
      fullDescription: 'Полный цикл транспортной логистики с контролем на каждом этапе. Работаем с проверенными транспортными компаниями.',
      features: ['Доставка по всей России', 'Отслеживание грузов', 'Страхование при перевозке', 'Экспресс-доставка', 'Сборные грузы']
    },
    {
      title: 'ИТ-УСЛУГИ',
      description: 'WMS, интеграция с 1С, личный кабинет.',
      icon: 'Monitor',
      size: 'medium',
      fullDescription: 'Современные ИТ-решения для управления логистическими процессами и интеграции с учетными системами клиента.',
      features: ['WMS-система', 'Интеграция с 1С', 'Личный кабинет клиента', 'API для интеграций', 'Аналитика и отчеты']
    },
    {
      title: 'АУТСОРСИНГ\nПЕРСОНАЛА',
      description: 'Гибкое решение для пиковых нагрузок.',
      icon: 'Users',
      size: 'small',
      fullDescription: 'Предоставляем квалифицированный персонал для складских операций. Гибкие условия сотрудничества.',
      features: ['Обученный персонал', 'Гибкий график работы', 'Масштабирование под нагрузку', 'Контроль качества работы', 'Замещение персонала']
    }
  ];

  const stats = [
    { value: '17', label: 'СКЛАДОВ', position: 'top-left' },
    { value: '18K+', label: 'КВ.М', position: 'top-right' },
    { value: '10+', label: 'ЛЕТ', position: 'bottom-left' },
    { value: '100%', label: 'НАДЕЖНОСТЬ', position: 'bottom-right' }
  ];

  const partners = [
    { name: 'ЯНДЕКС.МАРКЕТ', description: 'Официальный партнер', logo: '🛒' },
    { name: 'WILDBERRIES', description: 'Сертифицированный поставщик', logo: '🛍️' },
    { name: 'OZON', description: 'Партнер по фулфилменту', logo: '📦' },
    { name: '1С', description: 'Интеграционный партнер', logo: '💼' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setServiceOpen(true);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Brutal Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start bg-secondary noise-bg ripped-edge-top">
        <div 
          className="absolute inset-0 bg-cover bg-right opacity-30 mix-blend-multiply"
          style={{
            backgroundImage: 'url(/img/3d098706-19d0-40d5-9a8b-ba369a43ca3a.jpg)'
          }}
        />
        
        {/* Floating brutal elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary brutalist-shadow rotate-12 hidden lg:block"></div>
        <div className="absolute bottom-40 right-40 w-20 h-20 bg-accent brutalist-border -rotate-45 hidden lg:block"></div>
        <div className="absolute top-1/2 right-10 w-4 h-40 bg-primary -rotate-12 hidden lg:block"></div>
        
        <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-12 gap-8 items-center">
          {/* Left side - Typography experiment */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              {/* Более заметный заголовок компании */}
              <div className="bg-primary p-6 brutalist-shadow-orange mb-8 transform -rotate-1">
                <div className="text-2xl md:text-3xl font-black text-white tracking-[0.2em]">
                  ООО ЛОГИСТИКА СЕРВИС
                </div>
                <div className="text-lg font-bold text-white/80 mt-2">
                  3PL ОПЕРАТОР
                </div>
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.8] tracking-tighter">
                <span className="block">СОРТИРОВКА</span>
                <span className="block text-primary ml-8 md:ml-16">&</span>
                <span className="block ml-4 md:ml-8">ХРАНЕНИЕ</span>
              </h1>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Button 
                onClick={() => setCalculatorOpen(true)}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-black px-12 py-8 text-xl brutalist-shadow-orange hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 rounded-none"
              >
                РАСЧЕТ
                <div className="ml-3 w-3 h-3 bg-white"></div>
              </Button>
              
              <Button 
                onClick={() => setPartnerOpen(true)}
                variant="outline" 
                size="lg" 
                className="border-4 border-white text-white hover:bg-white hover:text-secondary font-black px-8 py-6 text-lg rounded-none brutalist-border"
              >
                СТАТЬ ПАРТНЕРОМ
              </Button>
            </div>
          </div>
          
          {/* Right side - Stats in brutal layout */}
          <div className="lg:col-span-4 relative h-80 lg:h-96">
            {stats.map((stat, index) => {
              const positions = {
                'top-left': 'top-0 left-0',
                'top-right': 'top-0 right-0',
                'bottom-left': 'bottom-0 left-0',
                'bottom-right': 'bottom-0 right-0'
              };
              
              return (
                <div 
                  key={index} 
                  className={`absolute ${positions[stat.position as keyof typeof positions]} w-32 h-32 bg-white brutalist-shadow transform ${index % 2 === 0 ? 'rotate-3' : '-rotate-2'} flex flex-col items-center justify-center`}
                >
                  <div className="text-3xl font-black text-secondary">{stat.value}</div>
                  <div className="text-xs font-black text-muted-foreground tracking-wider">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brutal Bento Grid Services */}
      <section className="py-20 bg-accent skewed-section">
        <div className="skewed-content max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-secondary mb-4 glitch-text" data-text="УСЛУГИ">
              УСЛУГИ
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          {/* Experimental Bento Grid */}
          <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[800px] md:h-[600px]">
            {/* Large service card - Warehouse */}
            <div 
              onClick={() => handleServiceClick(services[0])}
              className="col-span-12 md:col-span-6 row-span-3 bg-primary text-white brutalist-shadow-orange p-8 flex flex-col justify-between ripped-edge cursor-pointer hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
            >
              <div>
                <Icon name="Warehouse" size={64} className="mb-4" />
                <h3 className="text-2xl font-black mb-4 leading-tight whitespace-pre-line">
                  {services[0].title}
                </h3>
              </div>
              <p className="text-lg opacity-90">{services[0].description}</p>
            </div>
            
            {/* Medium cards */}
            <div 
              onClick={() => handleServiceClick(services[1])}
              className="col-span-6 md:col-span-3 row-span-2 bg-secondary text-white brutalist-shadow p-6 flex flex-col justify-between cursor-pointer hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
            >
              <Icon name="Package" size={48} className="mb-2 text-primary" />
              <div>
                <h3 className="text-lg font-black mb-2">{services[1].title}</h3>
                <p className="text-sm opacity-80">{services[1].description}</p>
              </div>
            </div>
            
            <div 
              onClick={() => handleServiceClick(services[4])}
              className="col-span-6 md:col-span-3 row-span-2 bg-white brutalist-border p-6 flex flex-col justify-between cursor-pointer hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
            >
              <Icon name="Monitor" size={48} className="mb-2 text-primary" />
              <div>
                <h3 className="text-lg font-black mb-2 text-secondary">{services[4].title}</h3>
                <p className="text-sm text-muted-foreground">{services[4].description}</p>
              </div>
            </div>
            
            {/* Small cards */}
            <div 
              onClick={() => handleServiceClick(services[2])}
              className="col-span-4 row-span-1 bg-muted brutalist-shadow p-4 flex items-center space-x-2 cursor-pointer hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
            >
              <Icon name="GitBranch" size={32} className="text-secondary" />
              <h3 className="text-base font-black text-secondary">{services[2].title}</h3>
            </div>
            
            <div 
              onClick={() => handleServiceClick(services[5])}
              className="col-span-8 row-span-1 bg-primary/10 brutalist-border p-4 flex items-center justify-between cursor-pointer hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
            >
              <div>
                <h3 className="text-base font-black text-secondary">{services[5].title}</h3>
                <p className="text-xs text-muted-foreground">{services[5].description}</p>
              </div>
              <Icon name="Users" size={32} className="text-primary" />
            </div>
            
            {/* Large transport card */}
            <div 
              onClick={() => handleServiceClick(services[3])}
              className="col-span-12 md:col-span-6 row-span-3 bg-accent brutalist-shadow p-8 flex flex-col justify-between relative overflow-hidden cursor-pointer hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 transform rotate-45 translate-x-16 -translate-y-16"></div>
              <div>
                <Icon name="Truck" size={64} className="mb-4 text-secondary" />
                <h3 className="text-2xl font-black mb-4 text-secondary leading-tight whitespace-pre-line">
                  {services[3].title}
                </h3>
              </div>
              <p className="text-lg text-muted-foreground relative z-10">{services[3].description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-secondary mb-4">
              НАШИ ПАРТНЕРЫ
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-accent p-6 brutalist-shadow text-center">
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h3 className="text-lg font-black text-secondary mb-2">{partner.name}</h3>
                <p className="text-sm text-muted-foreground">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geography with Map - Brutal Map Style */}
      <section className="py-20 bg-secondary text-white relative">
        <div className="absolute inset-0 noise-bg opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                17 СКЛАДОВ
                <br />
                <span className="text-primary">ПО РОССИИ</span>
              </h2>
              
              {/* Cities in brutal grid - Fixed layout */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {cities.map((city, index) => (
                  <div 
                    key={index} 
                    className={`p-3 text-sm font-bold text-center ${
                      index % 3 === 0 ? 'bg-primary text-white' : 
                      index % 3 === 1 ? 'bg-white text-secondary' : 
                      'bg-accent text-secondary'
                    } ${index % 4 === 0 ? 'transform rotate-1' : index % 4 === 1 ? 'transform -rotate-1' : ''}`}
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Map placeholder and info */}
            <div className="space-y-6">
              {/* Map placeholder */}
              <div className="bg-accent p-8 brutalist-shadow h-80 flex items-center justify-center relative overflow-hidden">
                <div className="text-center text-secondary">
                  <Icon name="Map" size={64} className="mx-auto mb-4" />
                  <h3 className="text-2xl font-black mb-2">ИНТЕРАКТИВНАЯ КАРТА</h3>
                  <p className="text-muted-foreground">Складские комплексы по всей России</p>
                </div>
                {/* Map dots simulation */}
                <div className="absolute top-6 left-8 w-3 h-3 bg-primary rounded-full"></div>
                <div className="absolute top-12 right-12 w-3 h-3 bg-primary rounded-full"></div>
                <div className="absolute bottom-16 left-12 w-3 h-3 bg-primary rounded-full"></div>
                <div className="absolute bottom-8 right-16 w-3 h-3 bg-primary rounded-full"></div>
                <div className="absolute top-20 left-1/2 w-3 h-3 bg-primary rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 brutalist-border text-secondary">
                  <div className="text-3xl font-black text-primary mb-2">18,000+</div>
                  <div className="text-sm font-bold">КВ.М ПЛОЩАДИ</div>
                </div>
                
                <div className="bg-accent p-6 brutalist-shadow text-secondary">
                  <div className="text-3xl font-black text-primary mb-2">24/7</div>
                  <div className="text-sm font-bold">РЕЖИМ РАБОТЫ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brutal Contact Form */}
      <section className="py-20 bg-background relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-secondary ripped-edge"></div>
        
        <div className="max-w-6xl mx-auto px-4 pt-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-secondary mb-8">
              НАЧАТЬ
              <br />
              <span className="text-primary">СОТРУДНИЧЕСТВО</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info - Brutal Cards */}
            <div className="space-y-6">
              <div className="bg-secondary text-white p-8 brutalist-shadow">
                <h3 className="text-2xl font-black text-primary mb-6">КОНТАКТЫ</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center">
                      <Icon name="Phone" size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-black">+7 (800) 123-45-67</div>
                      <div className="text-sm opacity-60">Круглосуточно</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center">
                      <Icon name="Mail" size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="font-black">info@logistics-service.ru</div>
                      <div className="text-sm opacity-60">Ответим в течение часа</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary p-8 brutalist-shadow-orange text-white">
                <h3 className="text-xl font-black mb-4">ГАРАНТИИ</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white"></div>
                    <span>Бесплатная консультация</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white"></div>
                    <span>Прозрачное ценообразование</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white"></div>
                    <span>Индивидуальный подход</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Brutal Form */}
            <div className="bg-white brutalist-shadow p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-black text-secondary mb-2">
                      ИМЯ *
                    </label>
                    <Input 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="border-4 border-secondary focus:border-primary rounded-none h-14 font-bold"
                      placeholder="Ваше имя"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-black text-secondary mb-2">
                      КОМПАНИЯ *
                    </label>
                    <Input 
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="border-4 border-secondary focus:border-primary rounded-none h-14 font-bold"
                      placeholder="Название"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-black text-secondary mb-2">
                      ТЕЛЕФОН *
                    </label>
                    <Input 
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="border-4 border-secondary focus:border-primary rounded-none h-14 font-bold"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-black text-secondary mb-2">
                      EMAIL *
                    </label>
                    <Input 
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="border-4 border-secondary focus:border-primary rounded-none h-14 font-bold"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-black text-secondary mb-2">
                    СООБЩЕНИЕ
                  </label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="border-4 border-secondary focus:border-primary rounded-none min-h-[120px] font-bold"
                    placeholder="Расскажите о задачах..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-black py-8 text-xl brutalist-shadow-orange hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 rounded-none"
                >
                  ОТПРАВИТЬ ЗАЯВКУ
                  <Icon name="ArrowRight" className="ml-3" size={24} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Brutal Footer */}
      <footer className="bg-secondary text-white py-16 ripped-edge-top">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <h3 className="text-4xl font-black mb-6 text-primary">
                ЛОГИСТИКА
                <br />
                СЕРВИС
              </h3>
              <p className="text-lg opacity-80 mb-8 max-w-md">
                Развивайте бизнес.
                <br />
                Логистику оставьте нам.
              </p>
              
              <div className="flex space-x-4">
                <div className="w-16 h-16 bg-primary flex items-center justify-center brutalist-shadow-orange">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div className="w-16 h-16 bg-white flex items-center justify-center brutalist-shadow">
                  <Icon name="Mail" size={24} className="text-secondary" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-black mb-6 text-primary">УСЛУГИ</h4>
              <div className="space-y-3 text-sm font-bold">
                <div>ХРАНЕНИЕ</div>
                <div>ФУЛФИЛМЕНТ</div>
                <div>ТРАНСПОРТ</div>
                <div>ИТ-СЕРВИСЫ</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-black mb-6 text-primary">РАБОТАЕМ</h4>
              <div className="space-y-3 text-sm font-bold">
                <div>24/7 БЕЗ ВЫХОДНЫХ</div>
                <div>ПО ВСЕЙ РОССИИ</div>
                <div>17 ГОРОДОВ</div>
                <div>18,000+ КВ.М</div>
              </div>
            </div>
          </div>
          
          <div className="border-t-4 border-primary mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm opacity-60 font-bold">
              © 2024 ООО "ЛОГИСТИКА СЕРВИС"
            </div>
            <div className="text-sm font-black text-primary mt-4 md:mt-0">
              СДЕЛАНО В РОССИИ
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Windows */}
      {/* Calculator Modal */}
      <Dialog open={calculatorOpen} onOpenChange={setCalculatorOpen}>
        <DialogContent className="max-w-2xl brutalist-shadow">
          <DialogHeader>
            <DialogTitle className="text-3xl font-black text-secondary">РАСЧЕТ СТОИМОСТИ</DialogTitle>
          </DialogHeader>
          <form className="space-y-6 mt-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-black text-secondary mb-2">ТИП ТОВАРА</label>
                <Input className="border-4 border-secondary rounded-none h-12 font-bold" placeholder="Например: одежда" />
              </div>
              <div>
                <label className="block text-sm font-black text-secondary mb-2">ОБЪЕМ, М³</label>
                <Input className="border-4 border-secondary rounded-none h-12 font-bold" placeholder="Например: 100" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-black text-secondary mb-2">СРОК ХРАНЕНИЯ</label>
                <Input className="border-4 border-secondary rounded-none h-12 font-bold" placeholder="Например: 6 месяцев" />
              </div>
              <div>
                <label className="block text-sm font-black text-secondary mb-2">ТЕЛЕФОН *</label>
                <Input required className="border-4 border-secondary rounded-none h-12 font-bold" placeholder="+7 (___) ___-__-__" />
              </div>
            </div>
            <Button className="w-full bg-primary text-white font-black py-6 text-lg brutalist-shadow-orange rounded-none">
              ПОЛУЧИТЬ РАСЧЕТ
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Partner Modal */}
      <Dialog open={partnerOpen} onOpenChange={setPartnerOpen}>
        <DialogContent className="max-w-2xl brutalist-shadow">
          <DialogHeader>
            <DialogTitle className="text-3xl font-black text-secondary">СТАТЬ ПАРТНЕРОМ</DialogTitle>
          </DialogHeader>
          <form className="space-y-6 mt-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-black text-secondary mb-2">КОМПАНИЯ *</label>
                <Input required className="border-4 border-secondary rounded-none h-12 font-bold" placeholder="Название компании" />
              </div>
              <div>
                <label className="block text-sm font-black text-secondary mb-2">КОНТАКТНОЕ ЛИЦО *</label>
                <Input required className="border-4 border-secondary rounded-none h-12 font-bold" placeholder="ФИО" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-black text-secondary mb-2">ТЕЛЕФОН *</label>
                <Input required className="border-4 border-secondary rounded-none h-12 font-bold" placeholder="+7 (___) ___-__-__" />
              </div>
              <div>
                <label className="block text-sm font-black text-secondary mb-2">EMAIL *</label>
                <Input required type="email" className="border-4 border-secondary rounded-none h-12 font-bold" placeholder="your@company.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-black text-secondary mb-2">НАПРАВЛЕНИЕ СОТРУДНИЧЕСТВА</label>
              <Textarea className="border-4 border-secondary rounded-none min-h-[100px] font-bold" placeholder="Опишите ваше предложение..." />
            </div>
            <Button className="w-full bg-primary text-white font-black py-6 text-lg brutalist-shadow-orange rounded-none">
              ОТПРАВИТЬ ЗАЯВКУ
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Service Modal */}
      <Dialog open={serviceOpen} onOpenChange={setServiceOpen}>
        <DialogContent className="max-w-3xl brutalist-shadow">
          <DialogHeader>
            <DialogTitle className="text-3xl font-black text-secondary">{selectedService?.title}</DialogTitle>
          </DialogHeader>
          {selectedService && (
            <div className="space-y-6 mt-6">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-primary flex items-center justify-center">
                  <Icon name={selectedService.icon} size={40} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-lg mb-6 leading-relaxed">{selectedService.fullDescription}</p>
                  
                  <h3 className="text-xl font-black text-secondary mb-4">ВКЛЮЧАЕТ В СЕБЯ:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedService.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary"></div>
                        <span className="font-bold text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-accent p-6 brutalist-border">
                <h3 className="text-lg font-black text-secondary mb-4">ПОЛУЧИТЬ ПОДРОБНУЮ КОНСУЛЬТАЦИЮ</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Ваше имя" className="border-2 border-secondary rounded-none h-12" />
                  <Input placeholder="Телефон" className="border-2 border-secondary rounded-none h-12" />
                </div>
                <Button className="w-full mt-4 bg-primary text-white font-black py-4 brutalist-shadow-orange rounded-none">
                  СВЯЗАТЬСЯ С НАМИ
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}