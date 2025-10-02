import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradiente animado */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50"
        animate={{
          background: [
            'linear-gradient(45deg, #f0f9ff, #fdf2ff, #f0fdfa)',
            'linear-gradient(135deg, #fdf2ff, #f0f9ff, #f0fdfa)',
            'linear-gradient(225deg, #f0fdfa, #fdf2ff, #f0f9ff)',
            'linear-gradient(315deg, #f0f9ff, #f0fdfa, #fdf2ff)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Partículas flotantes */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}