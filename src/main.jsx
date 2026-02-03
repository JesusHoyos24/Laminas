import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, Clock, CheckCircle, Percent, Truck, Award } from 'lucide-react';

const LaminasComerciales = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Logo en base64 (tu logo azul y plateado)
  const logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

  const images = [
    'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=1200',
    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['inicio', 'nosotros', 'productos', 'contacto'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const productos = [
    { 
      name: 'PUERTAS DE ACERO', 
      count: '9 PRODUCTOS',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400'
    },
    { 
      name: 'PUERTAS DE TAMBOR', 
      count: '4 PRODUCTOS',
      image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400'
    },
    { 
      name: 'VENTANAS DE ALUMINIO', 
      count: '4 PRODUCTOS',
      image: 'https://images.unsplash.com/photo-1545259742-24f9e6b6a8d7?w=400'
    },
    { 
      name: 'LÁMINA GALVANIZADA', 
      count: '4 PRODUCTOS',
      image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=400'
    }
  ];

  const servicios = [
    { icon: Award, text: '¡Mejoramos cualquier presupuesto por escrito!' },
    { icon: Percent, text: '¡Excelentes Descuentos por Volumen de Compra!' },
    { icon: Truck, text: '¡Envíos Económicos a toda la República Mexicana!' },
    { icon: CheckCircle, text: '¡Tiempos de Entrega Rápidos, Eficientes y Seguros!' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #1e40af;
          --primary-dark: #1e3a8a;
          --secondary: #64748b;
          --accent: #f59e0b;
          --steel: #94a3b8;
          --dark: #0f172a;
        }

        body {
          font-family: 'Rajdhani', sans-serif;
          overflow-x: hidden;
        }

        .orbitron {
          font-family: 'Orbitron', sans-serif;
        }

        .hero-overlay {
          background: linear-gradient(135deg, rgba(30, 64, 175, 0.95) 0%, rgba(30, 58, 138, 0.85) 100%);
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(30, 64, 175, 0.4);
        }

        .nav-link {
          position: relative;
          transition: color 0.3s;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 3px;
          background: var(--accent);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .slide-in {
          animation: slideIn 0.6s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeIn 1s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .diagonal-line {
          position: absolute;
          width: 150%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          transform: rotate(-3deg);
          opacity: 0.3;
        }

        .metal-texture {
          background: 
            linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%),
            linear-gradient(0deg, #1e3a8a 0%, #1e40af 100%);
        }

        .glow {
          box-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
        }

        @media (max-width: 768px) {
          .mobile-menu {
            transform: translateX(-100%);
            transition: transform 0.3s ease;
          }
          
          .mobile-menu.open {
            transform: translateX(0);
          }
        }

        .image-carousel {
          position: relative;
          overflow: hidden;
        }

        .carousel-image {
          transition: opacity 1s ease-in-out;
        }

        .steel-divider {
          height: 4px;
          background: linear-gradient(90deg, transparent, var(--steel), var(--primary), var(--steel), transparent);
          margin: 3rem 0;
        }
      `}</style>

      {/* Header/Navbar */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'metal-texture shadow-2xl' : 'bg-gradient-to-r from-blue-900/90 to-blue-800/90 backdrop-blur-sm'}`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 slide-in cursor-pointer" onClick={() => scrollToSection('inicio')}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white orbitron">LC</span>
              </div>
              <div className="hidden md:block">
                <div className="text-white font-bold text-lg orbitron leading-tight">LAMINAS</div>
                <div className="text-amber-400 text-xs font-semibold tracking-wider">COMERCIALES DEL NORTE</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              {['inicio', 'nosotros', 'productos', 'contacto'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`nav-link text-white font-semibold uppercase tracking-wide hover:text-amber-400 ${activeSection === item ? 'active text-amber-400' : ''}`}
                  >
                    {item === 'contacto' ? 'Contáctanos' : item}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden mobile-menu ${menuOpen ? 'open' : ''} fixed left-0 top-16 w-64 h-screen bg-gradient-to-b from-blue-900 to-blue-950 shadow-2xl`}>
            <ul className="flex flex-col p-6 space-y-4">
              {['inicio', 'nosotros', 'productos', 'contacto'].map((item, index) => (
                <li key={item} className="slide-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="w-full text-left text-white font-semibold uppercase tracking-wide hover:text-amber-400 py-2 border-b border-blue-700"
                  >
                    {item === 'contacto' ? 'Contáctanos' : item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20">
        <div className="image-carousel absolute inset-0 z-0">
          {images.map((img, index) => (
            <div
              key={index}
              className={`carousel-image absolute inset-0 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl slide-in">
            <div className="inline-block bg-amber-500 text-blue-900 px-6 py-2 rounded-full font-bold mb-6">
              🏆 25 AÑOS DE EXPERIENCIA
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 orbitron leading-tight">
              CALIDAD Y PRECIO
              <span className="block text-amber-400">GARANTIZADOS</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 font-medium leading-relaxed max-w-2xl">
              Especialistas en la venta de láminas, puertas, ventanas y cerraduras. 
              Tu proyecto merece la mejor calidad.
            </p>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="group bg-gradient-to-r from-amber-500 to-amber-600 text-blue-900 px-10 py-4 rounded-lg font-bold text-lg hover:from-amber-400 hover:to-amber-500 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center space-x-2"
            >
              <span>COTIZA AHORA</span>
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="diagonal-line" style={{bottom: '20%'}} />
        <div className="diagonal-line" style={{bottom: '40%'}} />
      </section>

      {/* Productos Section */}
      <section id="productos" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4 orbitron">
              CATEGORÍAS DE PRODUCTOS
            </h2>
            <div className="steel-divider max-w-md mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productos.map((producto, index) => (
              <div 
                key={index}
                className="card-hover bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={producto.image} 
                    alt={producto.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl mb-1 orbitron">{producto.name}</h3>
                    <p className="text-amber-400 text-sm font-semibold">{producto.count}</p>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-900 to-blue-950">
                  <button className="w-full text-white font-semibold py-2 hover:text-amber-400 transition-colors flex items-center justify-center space-x-2">
                    <span>Ver Productos</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="slide-in">
              <h2 className="text-4xl md:text-5xl font-black mb-6 orbitron">
                NOSOTROS
              </h2>
              <div className="h-1 w-24 bg-amber-500 mb-6" />
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Somos líderes en la industria de láminas, puertas y ventanas, con décadas de experiencia 
                y un compromiso constante con la calidad y la satisfacción del cliente.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Nuestra empresa ofrece soluciones integrales para la construcción y la industria metalmecánica, 
                proporcionando productos de la más alta calidad y generando confianza en nuestros clientes.
              </p>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-amber-500 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-amber-400 transition-all shadow-lg hover:shadow-xl"
              >
                CONOCER MÁS
              </button>
            </div>

            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600" 
                  alt="Instalación profesional"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500 rounded-lg -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-700 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicios.map((servicio, index) => {
              const Icon = servicio.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all flex flex-col items-center text-center space-y-4 card-hover"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                    <Icon className="text-amber-400" size={32} />
                  </div>
                  <p className="font-semibold text-blue-900">{servicio.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-4 orbitron">
              CONTÁCTANOS
            </h2>
            <div className="steel-divider max-w-md mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulario */}
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-blue-900 font-semibold mb-2">Nombre</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">Teléfono</label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-blue-900 font-semibold mb-2">E-mail</label>
                    <input 
                      type="email"
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-blue-900 font-semibold mb-2">Mensaje</label>
                  <textarea 
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-900 transition-all shadow-lg hover:shadow-xl"
                >
                  ENVIAR MENSAJE
                </button>
              </form>
            </div>

            {/* Información de Contacto */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-900 to-blue-950 p-8 rounded-xl text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6 orbitron flex items-center space-x-2">
                  <MapPin className="text-amber-400" />
                  <span>VISÍTENOS</span>
                </h3>
                <div className="space-y-2 text-slate-200">
                  <p className="font-semibold">Ave. Jalisco #310</p>
                  <p>Col. Unidad Nacional CP 89410</p>
                  <p>Madero, Tamaulipas</p>
                  <div className="pt-4 mt-4 border-t border-blue-700">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock size={18} className="text-amber-400" />
                      <span className="font-semibold">Horarios:</span>
                    </div>
                    <p>Lunes a Viernes: 8:30am - 6:30pm</p>
                    <p>Sábado: 8:00am - 3:30pm</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6 text-blue-900 orbitron flex items-center space-x-2">
                  <Phone className="text-amber-500" />
                  <span>TELÉFONOS</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-blue-600" />
                    <span className="text-lg font-semibold text-blue-900">(833) 210-6523</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={20} className="text-blue-600" />
                    <span className="text-lg font-semibold text-blue-900">(833) 210-2970</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-blue-600" />
                    <span className="text-lg font-semibold text-blue-900">Lam_comnorte@hotmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-950 to-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            Derechos reservados ©2026 Laminas Comerciales del Norte
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LaminasComerciales;