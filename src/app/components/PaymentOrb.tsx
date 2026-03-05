import { motion } from 'motion/react';

interface PaymentOrbProps {
  progress: number;
}

export function PaymentOrb({ progress }: PaymentOrbProps) {
  return (
    <motion.div
      className="absolute top-1/2 -translate-y-1/2"
      style={{
        left: `${progress * 100}%`,
      }}
    >
      {/* Outer glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 -m-4 rounded-full bg-teal-500 blur-xl"
      />

      {/* Middle glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.2,
        }}
        className="absolute inset-0 -m-2 rounded-full bg-teal-400 blur-md"
      />

      {/* Core orb */}
      <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-green-500 shadow-lg border-2 border-white">
        {/* Inner highlight */}
        <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-white opacity-60" />

        {/* Pulse ring */}
        <motion.div
          animate={{
            scale: [1, 2, 2],
            opacity: [0.5, 0, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeOut',
          }}
          className="absolute inset-0 rounded-full border-2 border-teal-400"
        />
      </div>

      {/* Dollar sign in center */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 flex items-center justify-center text-white text-xs"
      >
        $
      </motion.div>
    </motion.div>
  );
}
