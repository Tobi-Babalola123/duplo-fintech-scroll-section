import { motion } from "motion/react";
import {
  CheckCircle2,
  Clock,
  CreditCard,
  FileCheck,
  SendHorizontal,
} from "lucide-react";

interface PaymentStageCardProps {
  stage: "create" | "approval" | "processing" | "transfer" | "completed";
  title: string;
  description: string;
  isActive: boolean;
  scrollProgress: number;
}

const stageIcons = {
  create: CreditCard,
  approval: FileCheck,
  processing: Clock,
  transfer: SendHorizontal,
  completed: CheckCircle2,
};

const stageColors = {
  create: "from-teal-500 to-teal-600",
  approval: "from-blue-500 to-blue-600",
  processing: "from-purple-500 to-purple-600",
  transfer: "from-green-500 to-green-600",
  completed: "from-emerald-500 to-emerald-600",
};

export function PaymentStageCard({
  stage,
  title,
  description,
  isActive,
  scrollProgress,
}: PaymentStageCardProps) {
  const Icon = stageIcons[stage];
  const colorClass = stageColors[stage];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <motion.div
        animate={{
          scale: isActive ? 1.05 : 1,
          boxShadow: isActive
            ? "0 20px 40px rgba(20, 184, 166, 0.25)"
            : "0 4px 20px rgba(0, 0, 0, 0.08)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white rounded-2xl p-6 border border-gray-100 backdrop-blur-sm relative overflow-hidden"
      >
        {/* Gradient background on active */}
        <motion.div
          initial={false}
          animate={{
            opacity: isActive ? 0.1 : 0,
          }}
          className={`absolute inset-0 bg-gradient-to-br ${colorClass}`}
        />

        {/* Icon */}
        <div className="relative z-10">
          <motion.div
            animate={{
              backgroundColor: isActive
                ? "rgba(20, 184, 166, 0.1)"
                : "rgba(243, 244, 246, 1)",
            }}
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
          >
            <Icon
              className="w-6 h-6"
              style={{ color: isActive ? "#14B8A6" : "#6B7280" }}
            />
          </motion.div>

          {/* Title */}
          <h3 className="text-lg mb-2 text-gray-900">{title}</h3>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

          {/* Active indicator */}
          <motion.div
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              x: isActive ? 0 : -10,
            }}
            className="mt-4 flex items-center gap-2"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-2 h-2 rounded-full bg-teal-500"
            />
            <span className="text-xs text-teal-600">Processing</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
