import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Briefcase, Github, Shield, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

const CONTACT_EMAIL = 'redgoldcrew@gmail.com';

const ContactCard = ({ icon: Icon, title, value, sub, link, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const Content = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className="flex items-center gap-5 bg-navy-dark border border-border-red rounded-xl p-5 hover:-translate-y-1 shadow-lg transition-transform duration-300 group"
    >
      <div className="w-[44px] h-[44px] rounded-full border border-red-primary flex items-center justify-center bg-navy-mid text-red-primary group-hover:bg-red-primary group-hover:text-white-soft transition-colors shrink-0">
        <Icon size={20} />
      </div>
      <motion.div className="flex flex-col">
        <h4 className="font-rajdhani uppercase text-white-soft text-[1rem] font-bold tracking-wide mb-1">
          {title}
        </h4>
        <div className="font-nunito text-gold-primary text-[0.95rem] font-semibold mb-0.5 group-hover:underline decoration-gold-primary/30 underline-offset-4">
          {value}
        </div>
        <div className="font-nunito text-gray-mid text-[0.8rem]">{sub}</div>
      </motion.div>
    </motion.div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {Content}
      </a>
    );
  }
  return <a href={`mailto:${value}`} className="block">{Content}</a>;
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    formData.set('subject', `RedGoldCrew — message from ${name || 'website visitor'}`);

    try {
      // Same-origin POST — Netlify Forms (no third-party CORS).
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(
          Object.fromEntries(formData.entries()) as Record<string, string>,
        ).toString(),
      });

      if (!response.ok) {
        throw new Error('Delivery failed');
      }

      setFormState('success');
      form.reset();
      setTimeout(() => setFormState('idle'), 8000);
    } catch {
      setFormState('error');
      setErrorMessage(
        `Could not send your message. Please email us directly at ${CONTACT_EMAIL}`,
      );
    }
  };

  const contacts = [
    {
      icon: Mail,
      title: 'GENERAL ENQUIRIES',
      value: CONTACT_EMAIL,
      sub: 'Product feedback, partnerships, press',
      link: `mailto:${CONTACT_EMAIL}`,
    },
    {
      icon: Briefcase,
      title: 'CAREERS',
      value: 'careers@redgoldcrew.in',
      sub: 'Join the crew — we read everything',
      link: 'mailto:careers@redgoldcrew.in',
    },
    {
      icon: Github,
      title: 'GITHUB',
      value: 'github.com/max-mani',
      sub: 'Code, issues, open source',
      link: 'https://github.com/max-mani',
    },
    {
      icon: Shield,
      title: 'SECURITY ISSUES',
      value: 'security@redgoldcrew.in',
      sub: 'Responsible disclosure only',
      link: 'mailto:security@redgoldcrew.in',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-transparent relative z-10 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-6 h-[2px] bg-red-primary" />
            <span className="font-rajdhani text-red-primary uppercase tracking-widest font-semibold text-sm">
              — Contact —
            </span>
            <div className="w-6 h-[2px] bg-red-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-[4.5rem] md:text-[5.5rem] leading-[1] mb-4 text-white-soft"
          >
            Let&apos;s Talk<span className="text-gold-primary">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="font-nunito text-gray-mid text-[1.1rem] leading-[1.8] max-w-[520px] mx-auto"
          >
            Whether you have feedback on our products, a partnership idea, a career inquiry, or
            just want to say something — we read every message.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-stretch">
          <div className="flex flex-col gap-4">
            {contacts.map((c, i) => (
              <ContactCard key={i} {...c} delay={0.2 + i * 0.1} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative bg-navy-dark border border-border-gold rounded-2xl p-8 lg:p-10 shadow-xl flex flex-col justify-center overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-red-primary to-gold-primary opacity-80" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-primary/10 rounded-full blur-[60px] pointer-events-none" />

            <h3 className="relative font-rajdhani uppercase text-white-soft text-[1.2rem] font-bold tracking-wide mb-2">
              Send a Quick Message
            </h3>
            <p className="relative font-nunito text-gray-mid text-[0.95rem] mb-8">
              Messages go straight to{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-gold-primary hover:underline underline-offset-2"
              >
                {CONTACT_EMAIL}
              </a>
              . We typically respond within 24 hours.
            </p>

            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500 flex items-center justify-center text-green-500 mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="font-rajdhani uppercase text-white-soft text-xl font-bold mb-2">
                  Message Sent!
                </h4>
                <p className="font-nunito text-gray-mid">
                  Thanks — we&apos;ll reply to your email within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="relative flex flex-col gap-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden" aria-hidden="true">
                  <label>
                    Don&apos;t fill this out:{' '}
                    <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>
                {formState === 'error' && (
                  <div className="flex items-start gap-3 rounded-lg border border-red-primary/50 bg-red-primary/10 px-4 py-3 text-sm font-nunito text-white-soft">
                    <AlertCircle size={18} className="text-red-bright shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-rajdhani text-[0.75rem] uppercase tracking-wider text-gray-mid">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="bg-navy-mid border border-border-red rounded-lg px-4 py-3 font-nunito text-white-soft placeholder:text-gray-mid/60 focus:outline-none focus:border-gold-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-rajdhani text-[0.75rem] uppercase tracking-wider text-gray-mid">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="bg-navy-mid border border-border-red rounded-lg px-4 py-3 font-nunito text-white-soft placeholder:text-gray-mid/60 focus:outline-none focus:border-gold-primary transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-rajdhani text-[0.75rem] uppercase tracking-wider text-gray-mid">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="bg-navy-mid border border-border-red rounded-lg px-4 py-3 font-nunito text-white-soft placeholder:text-gray-mid/60 focus:outline-none focus:border-gold-primary transition-colors resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formState === 'submitting'}
                  className={`shimmer-btn w-full bg-red-primary text-white-soft py-4 rounded-lg font-rajdhani uppercase font-bold tracking-wider text-sm shadow-[0_0_15px_rgba(196,28,28,0.4)] transition-all flex items-center justify-center gap-2 mt-2 ${formState === 'submitting' ? 'opacity-70 cursor-wait' : 'hover:shadow-[0_0_25px_rgba(196,28,28,0.6)]'}`}
                >
                  {formState === 'submitting' ? 'Sending...' : 'Send Message'}{' '}
                  <ArrowRight size={18} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
