import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Briefcase, 
  User, 
  Mail, 
  Camera, 
  Monitor, 
  ShoppingCart,
  Send,
  Github,
  Instagram,
  MessageCircle
} from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAnimating, setIsAnimating] = useState(false);

  const pages = {
    home: 'Главная',
    portfolio: 'Портфолио', 
    about: 'Обо Мне',
    contact: 'Связь'
  };

  const handlePageChange = (page) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsAnimating(false);
    }, 200);
  };

  // Космический фон с анимированными звездами
  const SpaceBackground = () => (
    <div className="fixed inset-0 overflow-hidden">
      {/* Основной космический градиент */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* Анимированные звезды */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
      
      {/* Планета Земля (стилизованная) */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-green-400 opacity-20 animate-float"></div>
      
      {/* Неоновые акценты */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-glow"></div>
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-glow"></div>
    </div>
  );

  // Компонент Glass-эффекта
  const GlassCard = ({ children, className = '', hover = true }) => (
    <div className={`
      backdrop-blur-md backdrop-saturate-180 bg-white/15 
      border border-white/20 rounded-2xl shadow-xl
      transition-all duration-300 ease-out
      ${hover ? 'hover:translate-y-[-4px] hover:shadow-2xl hover:bg-white/20' : ''}
      ${className}
    `}>
      {children}
    </div>
  );

  // Навигация
  const Navigation = () => (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:top-4 md:left-4 md:transform-none md:w-auto">
      <div className="flex bg-white/10 backdrop-blur-md backdrop-saturate-180 rounded-2xl p-2 border border-white/20 shadow-xl">
        {Object.entries(pages).map(([key, label]) => {
          const icons = {
            home: Home,
            portfolio: Briefcase,
            about: User,
            contact: Mail
          };
          const Icon = icons[key];
          
          return (
            <button
              key={key}
              onClick={() => handlePageChange(key)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300
                ${currentPage === key 
                  ? 'bg-white/20 text-white shadow-lg' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
                }
              `}
            >
              <Icon size={20} />
              <span className="hidden md:block text-sm font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );

  // Главная страница
  const HomePage = () => (
    <div className={`min-h-screen flex flex-col items-center justify-center px-4 transition-all duration-800 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
      {/* Центральный блок */}
      <GlassCard className="max-w-4xl mx-auto p-8 md:p-12 text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
          adammaksAI
        </h1>
        <h2 className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
          Архитектор Цифровой Реальности
        </h2>
        <p className="text-lg text-white/80 mb-8 leading-relaxed animate-slide-up" style={{animationDelay: '0.4s'}}>
          Я использую Generative AI для создания проектов любой сложности: от фото и видео до масштабных интернет-магазинов и красивых сайтов-визиток.
        </p>
        <button 
          onClick={() => handlePageChange('contact')}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 animate-slide-up"
          style={{animationDelay: '0.6s'}}
        >
          Обсудить Ваш Проект
        </button>
      </GlassCard>

      {/* Спектр возможностей */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="p-6 text-center">
          <Camera className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-3">Генеративный Медиа-Контент</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Профессиональная генерация фото, видео, 3D-моделей и анимации с помощью ведущих AI-инструментов.
          </p>
        </GlassCard>

        <GlassCard className="p-6 text-center">
          <ShoppingCart className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-3">E-Commerce Проекты</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Создание полностью функциональных интернет-магазинов на React, оптимизированных AI.
          </p>
        </GlassCard>

        <GlassCard className="p-6 text-center">
          <Monitor className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-3">Сайты-Визитки и Портфолио</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Элегантные, анимированные веб-приложения для вашего бренда, разработанные с учетом последних трендов.
          </p>
        </GlassCard>
      </div>
    </div>
  );

  // Портфолио
  const PortfolioPage = () => (
    <div className={`min-h-screen py-20 px-4 transition-all duration-800 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
      <div className="max-w-6xl mx-auto">
        <GlassCard className="text-center p-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Мои Кейсы с AI-Акселерацией</h1>
          <p className="text-white/70 text-lg">Проекты, созданные с использованием передовых AI-технологий</p>
        </GlassCard>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'UI/UX-Прототип с ChatGPT', desc: 'Интерактивный прототип мобильного приложения' },
            { title: 'Рекламный Ролик с Runway Gen-2', desc: 'Креативная видеореклама для бренда' },
            { title: 'AI-Ребрендинг (Midjourney + Photoshop)', desc: 'Полное обновление визуальной идентичности' },
            { title: 'Персонализированный Блог на React', desc: 'Современная платформа для контента' },
            { title: 'E-Commerce с AI-Рекомендациями', desc: 'Интернет-магазин с умными предложениями' },
            { title: '3D-Визуализация с DALL-E', desc: 'Архитектурные визуализации для презентаций' }
          ].map((project, index) => (
            <GlassCard key={index} className="p-6">
              <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl mb-4 flex items-center justify-center">
                <Monitor className="w-16 h-16 text-white/50" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-white/70 text-sm">{project.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );

  // Обо Мне
  const AboutPage = () => (
    <div className={`min-h-screen py-20 px-4 transition-all duration-800 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
      <div className="max-w-4xl mx-auto">
        <GlassCard className="text-center p-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">adammaks: Философия Мастерства</h1>
        </GlassCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <GlassCard className="p-8">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
              <User className="w-24 h-24 text-white" />
            </div>
          </GlassCard>

          <GlassCard className="p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Мой Подход к AI</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Я не просто использую ИИ; я интегрирую его как ключевой элемент в процесс создания. 
              Generative AI — это не замена таланта, а мощнейший ускоритель, позволяющий мне 
              достигать невероятной детализации и скорости, недоступной традиционным методам.
            </p>
            <p className="text-white/80 leading-relaxed">
              Ваша задача, выполненная мной, будет на 100% уникальной и технологичной. 
              Каждый проект — это синтез творческого видения и передовых технологий.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );

  // Связь
  const ContactPage = () => (
    <div className={`min-h-screen py-20 px-4 transition-all duration-800 ${isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
      <div className="max-w-4xl mx-auto">
        <GlassCard className="text-center p-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Начнем Сотрудничество</h1>
          <p className="text-white/70 text-lg">Готов обсудить ваш проект и воплотить идеи в жизнь</p>
        </GlassCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <GlassCard className="p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Отправить Запрос</h2>
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Ваше имя"
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email"
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Расскажите о вашем проекте"
                  rows="5"
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Отправить Запрос
              </button>
            </form>
          </GlassCard>

          <div className="space-y-6">
            <GlassCard className="p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Социальные Сети</h3>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300">
                  <MessageCircle className="w-6 h-6 text-blue-400" />
                  <span>Telegram</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300">
                  <Instagram className="w-6 h-6 text-pink-400" />
                  <span>Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300">
                  <Mail className="w-6 h-6 text-green-400" />
                  <span>Email</span>
                </a>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );

  // Рендер текущей страницы
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'portfolio': return <PortfolioPage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <Navigation />
      {renderCurrentPage()}
    </div>
  );
};

export default App;
