import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SliderHome from '../components/SliderHome';
import ConcurrentDemo from '../components/ConcurrentDemo';
import AnimatedBackground from '../components/AnimatedBackground';
import AnimatedButton from '../components/AnimatedButton';
import { fadeInUp, staggerContainer } from '../components/Animations';
import { Cpu, Zap } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <AnimatedBackground />
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Hero Section */}
        <motion.div
          className="container-fluid min-h-screen flex flex-col justify-center items-center relative z-10 px-4"
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={staggerContainer}
        >
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            {/* Icono animado */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Cpu className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Bienvenido a BlockChainPro
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed"
              variants={fadeInUp}
            >
              Explora el mundo de la blockchain, aprende y experimenta con 
              <span className="font-semibold text-purple-600"> ejemplos interactivos</span> y 
              <span className="font-semibold text-blue-600"> tecnología de vanguardia</span>.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
              variants={fadeInUp}
            >
              <AnimatedButton href="/blockchain" variant="primary">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Explorar Blockchain
                </div>
              </AnimatedButton>
              
              <AnimatedButton href="/login" variant="secondary">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5" />
                  Comenzar Ahora
                </div>
              </AnimatedButton>
            </motion.div>

            {/* Features rápidos */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
              variants={staggerContainer}
            >
              {[
                { icon: Cpu, title: "Blockchain", desc: "Tecnología descentralizada" },
                { icon: Cpu, title: "Concurrente", desc: "Procesamiento paralelo" },
                { icon: Zap, title: "Rápido", desc: "Ejecución eficiente" }
              ].map((feature) => (
                <motion.div
                  key={feature.title}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Secciones adicionales */}
        <SliderHome />
        <ConcurrentDemo />
      </div>
    </>
  );
}