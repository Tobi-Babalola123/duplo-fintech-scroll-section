import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { PaymentStageCard } from "./components/PaymentStageCard";
import { DashboardWidget } from "./components/DashboardWidget";
import { PaymentOrb } from "./components/PaymentOrb";
import { ArrowRight } from "lucide-react";

const paymentStages = [
  {
    id: "create",
    title: "Create Payment",
    description:
      "Initialize your payment with a simple API call. Define amount, currency, and recipient details.",
    progressStart: 0,
    progressEnd: 0.2,
  },
  {
    id: "approval",
    title: "Approval Workflow",
    description:
      "Multi-level approval system ensures compliance and security for every transaction.",
    progressStart: 0.2,
    progressEnd: 0.4,
  },
  {
    id: "processing",
    title: "Processing",
    description:
      "Our intelligent routing system finds the optimal path for your payment across global networks.",
    progressStart: 0.4,
    progressEnd: 0.6,
  },
  {
    id: "transfer",
    title: "Bank Transfer",
    description:
      "Seamlessly execute transfers through secure banking rails with real-time status updates.",
    progressStart: 0.6,
    progressEnd: 0.8,
  },
  {
    id: "completed",
    title: "Completed",
    description:
      "Transaction confirmed and recorded. Instant notifications and detailed receipts delivered.",
    progressStart: 0.8,
    progressEnd: 1,
  },
] as const;

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const orbProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-sm inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                Introducing Duplo Payments
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl mb-6 text-gray-900"
            >
              Payment infrastructure
              <br />
              <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                built for scale
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Move money across borders with confidence. Our intelligent payment
              platform handles complexity so you can focus on growing your
              business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2">
                Start Building
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-4 bg-white text-gray-900 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                View Docs
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scroll Storytelling Section */}
      <section ref={containerRef} className="relative min-h-[320vh] bg-white">
        {/* Sticky container */}
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

          {/* Content container */}
          <div className="relative w-full max-w-7xl mx-auto">
            {/* Floating widgets - Top Left */}
            <motion.div
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [0, 0.2, 0.8, 1],
                  [0, 1, 1, 0],
                ),
              }}
              className="absolute top-8 left-8 space-y-4"
            >
              <DashboardWidget type="revenue" delay={0} />
              <DashboardWidget type="transactions" delay={0.1} />
            </motion.div>

            {/* Floating widgets - Top Right */}
            <motion.div
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [0, 0.2, 0.8, 1],
                  [0, 1, 1, 0],
                ),
              }}
              className="absolute top-8 right-8 space-y-4"
            >
              <DashboardWidget type="users" delay={0.2} />
              <DashboardWidget type="activity" delay={0.3} />
            </motion.div>

            {/* Center pipeline */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-4xl">
                {/* Title above pipeline */}
                <motion.div
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [0, 0.1, 0.9, 1],
                      [1, 1, 1, 0],
                    ),
                  }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl mb-4 text-gray-900">
                    Watch your payment flow
                  </h2>
                  <p className="text-gray-600">
                    Every transaction moves through our secure, automated
                    pipeline
                  </p>
                </motion.div>

                {/* Pipeline visualization */}
                <div className="relative h-4">
                  {/* Pipeline line */}
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 rounded-full -translate-y-1/2">
                    {/* Progress line */}
                    <motion.div
                      style={{
                        scaleX: orbProgress,
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-teal-500 to-green-500 rounded-full origin-left"
                    />
                  </div>

                  {/* Stage dots */}
                  {[0, 0.25, 0.5, 0.75, 1].map((position, index) => (
                    <motion.div
                      key={index}
                      style={{
                        opacity: useTransform(
                          orbProgress,
                          [Math.max(0, position - 0.1), position],
                          [0.3, 1],
                        ),
                      }}
                      className="absolute top-1/2 -translate-y-1/2"
                      style={{
                        left: `${position * 100}%`,
                      }}
                    >
                      <div className="w-4 h-4 rounded-full bg-white border-2 border-gray-300 -translate-x-1/2">
                        <motion.div
                          style={{
                            scale: useTransform(
                              orbProgress,
                              [
                                Math.max(0, position - 0.1),
                                position,
                                position + 0.1,
                              ],
                              [0, 1, 1],
                            ),
                          }}
                          className="w-full h-full rounded-full bg-gradient-to-br from-teal-500 to-green-500"
                        />
                      </div>
                    </motion.div>
                  ))}

                  {/* Payment orb */}
                  <motion.div
                    style={{
                      opacity: useTransform(
                        scrollYProgress,
                        [0, 0.1, 0.9, 1],
                        [0, 1, 1, 0],
                      ),
                    }}
                  >
                    <PaymentOrb
                      progress={useTransform(orbProgress, (v) => v)}
                    />
                  </motion.div>
                </div>

                {/* Stage cards below pipeline */}
                <div className="grid grid-cols-5 gap-6 mt-12 items-start">
                  {paymentStages.map((stage, index) => {
                    const isActive = useTransform(
                      orbProgress,
                      (progress) =>
                        progress >= stage.progressStart &&
                        progress < stage.progressEnd,
                    );

                    return (
                      <motion.div
                        key={stage.id}
                        style={{
                          opacity: useTransform(
                            scrollYProgress,
                            [index * 0.15, index * 0.15 + 0.1, 0.9, 1],
                            [0, 1, 1, 0],
                          ),
                          y: useTransform(
                            scrollYProgress,
                            [index * 0.15, index * 0.15 + 0.1],
                            [40, 0],
                          ),
                        }}
                      >
                        <PaymentStageCard
                          stage={stage.id as any}
                          title={stage.title}
                          description={stage.description}
                          isActive={isActive.get()}
                          scrollProgress={orbProgress.get()}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing section */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl mb-6 text-gray-900">
              Ready to transform
              <br />
              your payment infrastructure?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of businesses that trust Duplo to power their
              financial operations.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all text-lg flex items-center gap-2 mx-auto">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
