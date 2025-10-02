import type { FormEvent } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import { fadeInUp, scaleIn } from '../components/Animations';

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await login(email, password);
    setIsLoading(false);
    nav('/');
  };

  return (
    <>
      <AnimatedBackground />
      
      <div className="min-h-screen flex justify-center items-center px-4 relative">
        <motion.div
          className="w-full max-w-md"
          initial="initial"
          animate="animate"
          variants={scaleIn}
        >
          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20"
            variants={fadeInUp}
          >
            {/* Header */}
            <motion.div
              className="text-center mb-8"
              variants={fadeInUp}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <LogIn className="w-8 h-8 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Iniciar Sesión
              </h2>
              <p className="text-gray-600 mt-2">Accede a tu cuenta BlockChainPro</p>
            </motion.div>

            <form onSubmit={onSubmit} className="space-y-6">
              {/* Campo Email */}
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    className="w-full pl-11 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                  />
                </div>
              </motion.div>

              {/* Campo Password */}
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    className="w-full pl-11 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                  />
                </div>
              </motion.div>

              {/* Botón de envío */}
              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
                variants={fadeInUp}
              >
                <div className="flex items-center justify-center gap-2">
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <LogIn className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <LogIn className="w-5 h-5" />
                  )}
                  {isLoading ? 'Iniciando Sesión...' : 'Entrar a la Plataforma'}
                </div>
              </motion.button>
            </form>

            {/* Footer */}
            <motion.div
              className="text-center mt-6 pt-6 border-t border-gray-200"
              variants={fadeInUp}
            >
              <p className="text-gray-600 text-sm">
                ¿No tienes cuenta?{' '}
                <a href="/register" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                  Regístrate aquí
                </a>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}