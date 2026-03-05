import { motion } from "motion/react";
import { TrendingUp, DollarSign, Users, Activity } from "lucide-react";

interface WidgetProps {
  type: "revenue" | "transactions" | "users" | "activity";
  delay?: number;
}

const widgetData = {
  revenue: {
    icon: DollarSign,
    title: "Revenue",
    value: "$124,592",
    change: "+12.5%",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  transactions: {
    icon: TrendingUp,
    title: "Transactions",
    value: "1,429",
    change: "+8.2%",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
  users: {
    icon: Users,
    title: "Active Users",
    value: "892",
    change: "+23.1%",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  activity: {
    icon: Activity,
    title: "API Calls",
    value: "45.2K",
    change: "+15.3%",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
};

export function DashboardWidget({ type, delay = 0 }: WidgetProps) {
  const data = widgetData[type];
  const Icon = data.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 backdrop-blur-sm"
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className={`w-10 h-10 rounded-lg ${data.bgColor} flex items-center justify-center`}
        >
          <Icon className={`w-5 h-5 ${data.color}`} />
        </div>
        <span className="text-xs text-green-600 font-medium">
          {data.change}
        </span>
      </div>
      <div>
        <p className="text-xs text-gray-600 mb-1">{data.title}</p>
        <p className="text-xl text-gray-900">{data.value}</p>
      </div>
    </motion.div>
  );
}
