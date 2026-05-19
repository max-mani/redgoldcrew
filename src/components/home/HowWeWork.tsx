import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const ProcessStep = ({
  num,
  title,
  desc,
  delay,
}: {
  num: string;
  title: string;
  desc: string;
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className="group relative bg-navy-dark/80 border border-border-red rounded-[14px] p-6 sm:p-7 overflow-hidden backdrop-blur-sm hover:-translate-y-1 hover:border-red-primary/50 hover:shadow-[0_12px_40px_rgba(196,28,28,0.12)] transition-all duration-300"
    >
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-red-primary via-red-bright to-gold-primary opacity-60 group-hover:opacity-100 transition-opacity" />

      <div className="absolute -right-2 -top-4 font-bebas text-[5.5rem] leading-none text-red-primary/[0.07] group-hover:text-red-primary/[0.12] transition-colors select-none pointer-events-none">
        {num}
      </div>

      <div className="relative flex items-start gap-4">
        <div className="shrink-0 w-11 h-11 rounded-lg bg-navy-mid border border-red-primary/40 flex items-center justify-center font-rajdhani font-bold text-lg text-gold-primary shadow-[inset_0_0_20px_rgba(196,28,28,0.15)] group-hover:border-gold-primary/60 group-hover:shadow-[0_0_20px_rgba(212,160,23,0.2)] transition-all duration-300">
          {num}
        </div>
        <div className="flex-1 min-w-0 pt-0.5">
          <h3 className="font-rajdhani uppercase text-white-soft text-[1.05rem] sm:text-[1.1rem] font-bold tracking-wide mb-2.5 pr-4">
            {title}
          </h3>
          <p className="font-nunito text-gray-mid text-[0.9rem] sm:text-[0.92rem] leading-[1.65]">
            {desc}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

const StatBlock = ({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay }}
      className="relative bg-navy-mid/90 border border-border-gold/60 rounded-xl p-5 text-center overflow-hidden group hover:border-gold-primary/50 transition-colors"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gold-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative font-bebas text-4xl sm:text-[2.75rem] leading-none bg-gradient-to-br from-red-bright via-red-primary to-gold-primary bg-clip-text text-transparent mb-2">
        {value}
      </div>
      <p className="relative font-nunito text-gray-mid text-[0.78rem] sm:text-[0.8rem] leading-snug">
        {label}
      </p>
    </motion.div>
  );
};

export default function HowWeWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      num: '01',
      title: 'FIND THE FRUSTRATION',
      desc: "Every product at RedGoldCrew begins with a real frustration. Not a market analysis or a trend report — a genuine daily problem that makes someone's life harder than it needs to be.",
    },
    {
      num: '02',
      title: 'VALIDATE THE PAIN',
      desc: 'We talk to people. We watch how they currently cope with the problem — spreadsheets, paper notes, mental math, multiple apps. If the workaround is painful, the opportunity is real.',
    },
    {
      num: '03',
      title: 'DESIGN THE SIMPLEST SOLUTION',
      desc: "What's the minimum viable experience that makes the problem go away? We sketch, prototype, and cut until only the essential remains. No feature survives without a clear reason to exist.",
    },
    {
      num: '04',
      title: 'BUILD OFFLINE-FIRST',
      desc: 'We write the app to work perfectly without internet before we add anything else. Connectivity is a bonus, not a requirement. This forces cleaner architecture and better privacy by default.',
    },
    {
      num: '05',
      title: 'SHIP AND LISTEN',
      desc: 'We launch as soon as the core experience is solid. Real users reveal things no prototype ever shows. We read every review, every support message, and every GitHub issue with full attention.',
    },
    {
      num: '06',
      title: 'ITERATE RELENTLESSLY',
      desc: 'The first version is never the best version. We iterate based on real feedback, adding only what genuinely improves the experience. Removing features is as important as adding them.',
    },
  ];

  return (
    <section id="how-we-work" className="py-24 bg-transparent relative z-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 lg:mb-20 text-center" ref={ref}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="font-rajdhani uppercase text-gold-primary tracking-widest font-bold text-sm">
              — How We Work —
            </span>
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-[3.5rem] md:text-[4.5rem] leading-[1] mb-6 flex flex-col items-center"
          >
            <span className="text-white-soft">From Frustration</span>
            <span className="text-gold-primary text-glow-gold">TO SHIPPED PRODUCT.</span>
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="font-nunito text-gray-mid text-[1.05rem] leading-[1.8] max-w-[580px] mx-auto"
          >
            We don&apos;t start with technology. We start with a problem we&apos;ve personally
            experienced — or watched someone struggle with — until we can&apos;t ignore it
            anymore. Then we build.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-10 xl:gap-12 items-start">
          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {steps.map((s, i) => (
              <ProcessStep key={s.num} {...s} delay={i * 0.08} />
            ))}
          </div>

          {/* Philosophy panel */}
          <div className="xl:sticky xl:top-28">
            <motion.aside
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden"
            >
              {/* Gradient border frame */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-primary/80 via-red-primary/40 to-gold-primary/70 p-px">
                <div className="absolute inset-px rounded-2xl bg-navy-dark" />
              </div>

              <div className="relative m-px rounded-2xl bg-navy-dark/95 p-8 lg:p-9 overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-red-primary/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gold-primary/10 rounded-full blur-[70px] pointer-events-none" />

                <div className="relative z-10">
                  <span className="inline-block font-rajdhani text-[0.7rem] uppercase tracking-[0.25em] text-gold-primary font-bold mb-5 px-3 py-1 rounded-full border border-border-gold bg-gold-primary/5">
                    Build Philosophy
                  </span>

                  <div className="font-bebas text-[4.5rem] leading-[0.7] text-gold-primary/20 -ml-1 mb-2 select-none">
                    &ldquo;
                  </div>

                  <blockquote className="font-nunito italic text-white-soft/95 text-[1.05rem] leading-[1.75] mb-6 -mt-6">
                    The best product isn&apos;t the one with the most features. It&apos;s the one
                    people open every day because it genuinely makes their life better.
                    That&apos;s the only metric that matters to us.
                  </blockquote>

                  <footer className="font-rajdhani uppercase text-gold-primary font-bold tracking-widest text-[0.8rem] mb-8 pl-1 border-l-2 border-gold-primary/50">
                    RedGoldCrew
                  </footer>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-border-gold to-transparent mb-7" />

                  <div className="grid grid-cols-1 gap-3">
                    <StatBlock value="6" label="Avg. weeks from idea to ship" delay={0.1} />
                    <StatBlock value="0" label="Features added without user evidence" delay={0.2} />
                    <StatBlock
                      value="100%"
                      label="Products built offline-first"
                      delay={0.3}
                    />
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </div>
    </section>
  );
}
