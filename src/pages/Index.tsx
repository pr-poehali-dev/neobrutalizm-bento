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
      title: 'ОТВЕТСТВЕННОЕ\nХРАНЕНИЕ',
      description: 'WMS-системы, контроль качества. Оплата только за занимаемое место.',
      icon: 'Warehouse',
      size: 'large'
    },
    {
      title: 'ФУЛФИЛМЕНТ',
      description: 'Упаковка, маркировка, доставка до складов маркетплейсов.',
      icon: 'Package',
      size: 'medium'
    },
    {
      title: 'СОРТИРОВКА',
      description: 'Высокая скорость и точность.',
      icon: 'GitBranch',
      size: 'small'
    },
    {
      title: 'ТРАНСПОРТНАЯ\nЛОГИСТИКА',
      description: 'Доставка от двери до двери с надежными партнерами.',
      icon: 'Truck',
      size: 'large'
    },
    {
      title: 'ИТ-УСЛУГИ',
      description: 'WMS, интеграция с 1С, личный кабинет.',
      icon: 'Monitor',
      size: 'medium'
    },
    {
      title: 'АУТСОРСИНГ\nПЕРСОНАЛА',
      description: 'Гибкое решение для пиковых нагрузок.',
      icon: 'Users',
      size: 'small'
    }
  ];

  const stats = [
    { value: '17', label: 'СКЛАДОВ', position: 'top-left' },
    { value: '18K+', label: 'КВ.М', position: 'top-right' },
    { value: '10+', label: 'ЛЕТ', position: 'bottom-left' },
    { value: '100%', label: 'НАДЕЖНОСТЬ', position: 'bottom-right' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
              <div className="text-sm font-black text-primary tracking-[0.3em] mb-4">
                ООО ЛОГИСТИКА СЕРВИС
              </div>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.8] tracking-tighter">
                <span className="block">ВАША</span>
                <span className="block text-primary ml-8 md:ml-16">ЛОГИСТИКА</span>
                <span className="block text-sm md:text-base font-normal opacity-60 ml-4 tracking-normal mt-2">
                  наша ответственность
                </span>
              </h1>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-black px-12 py-8 text-xl brutalist-shadow-orange hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200 rounded-none"
              >
                РАСЧЕТ
                <div className="ml-3 w-3 h-3 bg-white"></div>
              </Button>
              
              <div className="text-white/60 text-lg font-mono rotate-2">
                3PL ОПЕРАТОР
              </div>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-4 border-white text-white hover:bg-white hover:text-secondary font-black px-8 py-6 text-lg rounded-none brutalist-border"
              >
                ПАРТНЁРСТВО
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
            {/* Large service card */}
            <div className="col-span-12 md:col-span-6 row-span-3 bg-primary text-white brutalist-shadow-orange p-8 flex flex-col justify-between ripped-edge">
              <div>
                <Icon name="Warehouse" size={64} className="mb-4" />
                <h3 className="text-2xl font-black mb-4 leading-tight whitespace-pre-line">
                  {services[0].title}
                </h3>
              </div>
              <p className="text-lg opacity-90">{services[0].description}</p>
            </div>
            
            {/* Medium cards */}
            <div className="col-span-6 md:col-span-3 row-span-2 bg-secondary text-white brutalist-shadow p-6 flex flex-col justify-between">
              <Icon name="Package" size={48} className="mb-2 text-primary" />
              <div>
                <h3 className="text-lg font-black mb-2">{services[1].title}</h3>
                <p className="text-sm opacity-80">{services[1].description}</p>
              </div>
            </div>
            
            <div className="col-span-6 md:col-span-3 row-span-2 bg-white brutalist-border p-6 flex flex-col justify-between">
              <Icon name="Monitor" size={48} className="mb-2 text-primary" />
              <div>
                <h3 className="text-lg font-black mb-2 text-secondary">{services[4].title}</h3>
                <p className="text-sm text-muted-foreground">{services[4].description}</p>
              </div>
            </div>
            
            {/* Small cards */}
            <div className="col-span-4 row-span-1 bg-muted brutalist-shadow p-4 flex items-center space-x-2">
              <Icon name="GitBranch" size={32} className="text-secondary" />
              <h3 className="text-base font-black text-secondary">{services[2].title}</h3>
            </div>
            
            <div className="col-span-8 row-span-1 bg-primary/10 brutalist-border p-4 flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-secondary">{services[5].title}</h3>
                <p className="text-xs text-muted-foreground">{services[5].description}</p>
              </div>
              <Icon name="Users" size={32} className="text-primary" />
            </div>
            
            {/* Large transport card */}
            <div className="col-span-12 md:col-span-6 row-span-3 bg-accent brutalist-shadow p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 transform rotate-45 translate-x-16 -translate-y-16"></div>
              <div>
                <Icon name="Truck" size={64} className="mb-4 text-secondary" />
                <h3 className="text-2xl font-black mb-4 text-secondary leading-tight whitespace-pre-line">
                  {services[3].title}
                </h3>
              </div>
              <p className="text-lg text-muted-foreground relative z-10">{services[3].description}</p>
            </div>
            
            {/* Info block */}
            <div className="col-span-12 md:col-span-6 row-span-1 bg-secondary text-white p-6 flex items-center justify-between">
              <div>
                <div className="text-2xl font-black text-primary">ЯНДЕКС.МАРКЕТ</div>
                <div className="text-sm opacity-80">Официальный партнер</div>
              </div>
              <Icon name="Star" size={40} className="text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Geography - Brutal Map Style */}
      <section className="py-20 bg-secondary text-white relative">
        <div className="absolute inset-0 noise-bg opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                17 СКЛАДОВ
                <br />
                <span className="text-primary">ПО РОССИИ</span>
              </h2>
              
              {/* Cities in brutal grid */}
              <div className="grid grid-cols-3 gap-2 mb-8">
                {cities.slice(0, 12).map((city, index) => (
                  <div 
                    key={index} 
                    className={`p-3 text-xs font-bold ${
                      index % 3 === 0 ? 'bg-primary text-white' : 
                      index % 3 === 1 ? 'bg-white text-secondary' : 
                      'bg-accent text-secondary'
                    } ${index % 4 === 0 ? 'transform rotate-1' : index % 4 === 1 ? 'transform -rotate-1' : ''}`}
                  >
                    {city}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cities.slice(12).map((city, index) => (
                  <span key={index} className="px-3 py-1 bg-white/10 text-xs font-bold">
                    {city}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Brutal info cards */}
              <div className="bg-primary p-8 brutalist-shadow-orange text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-black">ГЕОГРАФИЯ</h3>
                </div>
                <p className="text-lg opacity-90">
                  Стратегическое размещение складских комплексов 
                  для быстрой доставки в любую точку России
                </p>
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
    </div>
  );
}