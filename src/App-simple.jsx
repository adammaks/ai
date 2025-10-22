import React, { useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const pages = {
    home: 'Главная',
    portfolio: 'Портфолио', 
    about: 'Обо Мне',
    contact: 'Связь'
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Навигация */}
      <nav style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '10px',
        display: 'flex',
        gap: '10px',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        {Object.entries(pages).map(([key, label]) => (
          <button
            key={key}
            onClick={() => handlePageChange(key)}
            style={{
              padding: '10px 20px',
              borderRadius: '15px',
              border: 'none',
              background: currentPage === key ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Контент */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        paddingTop: '100px'
      }}>
        {currentPage === 'home' && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '40px',
            textAlign: 'center',
            color: 'white',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>adammaksAI</h1>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Архитектор Цифровой Реальности</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
              Я использую Generative AI для создания проектов любой сложности: от фото и видео до масштабных интернет-магазинов и красивых сайтов-визиток.
            </p>
            <button 
              onClick={() => handlePageChange('contact')}
              style={{
                background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '50px',
                color: 'white',
                fontSize: '1.1rem',
                cursor: 'pointer',
                marginTop: '30px',
                transition: 'transform 0.3s ease'
              }}
            >
              Обсудить Ваш Проект
            </button>
          </div>
        )}

        {currentPage === 'portfolio' && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '40px',
            color: 'white',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Мои Кейсы с AI-Акселерацией</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              {['UI/UX-Прототип с ChatGPT', 'Рекламный Ролик с Runway Gen-2', 'AI-Ребрендинг (Midjourney + Photoshop)', 'Персонализированный Блог на React'].map((project, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <h3>{project}</h3>
                  <p>Описание проекта...</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentPage === 'about' && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '40px',
            color: 'white',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>adammaks: Философия Мастерства</h1>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', textAlign: 'center' }}>
              Я не просто использую ИИ; я интегрирую его как ключевой элемент в процесс создания. 
              Generative AI — это не замена таланта, а мощнейший ускоритель, позволяющий мне 
              достигать невероятной детализации и скорости, недоступной традиционным методам.
            </p>
          </div>
        )}

        {currentPage === 'contact' && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '40px',
            color: 'white',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Начнем Сотрудничество</h1>
            <form style={{ maxWidth: '400px', margin: '0 auto' }}>
              <input 
                type="text" 
                placeholder="Ваше имя"
                style={{
                  width: '100%',
                  padding: '15px',
                  marginBottom: '20px',
                  borderRadius: '10px',
                  border: 'none',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  fontSize: '1rem'
                }}
              />
              <input 
                type="email" 
                placeholder="Email"
                style={{
                  width: '100%',
                  padding: '15px',
                  marginBottom: '20px',
                  borderRadius: '10px',
                  border: 'none',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  fontSize: '1rem'
                }}
              />
              <textarea 
                placeholder="Расскажите о вашем проекте"
                rows="5"
                style={{
                  width: '100%',
                  padding: '15px',
                  marginBottom: '20px',
                  borderRadius: '10px',
                  border: 'none',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />
              <button 
                type="submit"
                style={{
                  width: '100%',
                  background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                  border: 'none',
                  padding: '15px',
                  borderRadius: '10px',
                  color: 'white',
                  fontSize: '1.1rem',
                  cursor: 'pointer'
                }}
              >
                Отправить Запрос
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
