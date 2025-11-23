import React, { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log(formState);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-24 bg-brand-deep transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t('sections.contactTitle')} subtitle={t('sections.contactSub')} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-brand-surface p-8 rounded-xl border border-brand-surfaceLight relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-[40px]"></div>
              
              <h3 className="text-2xl font-bold text-brand-text mb-6 font-display transition-colors">{t('sections.projInq')}</h3>
              <p className="text-brand-muted mb-8 font-light">
                {t('sections.readyToStart')}
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-deep border border-brand-surfaceLight rounded-lg transition-colors">
                    <Mail className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="text-brand-text font-bold font-display uppercase tracking-wide text-sm transition-colors">{t('sections.emailChannel')}</h4>
                    <p className="text-brand-muted text-sm">hello@nexusitera.com</p>
                    <p className="text-brand-muted text-sm">careers@nexusitera.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-deep border border-brand-surfaceLight rounded-lg transition-colors">
                    <Phone className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <div>
                    <h4 className="text-brand-text font-bold font-display uppercase tracking-wide text-sm transition-colors">{t('sections.voiceLink')}</h4>
                    <p className="text-brand-muted text-sm">+1 (555) 123-4567</p>
                    <p className="text-brand-muted/60 text-xs mt-1">Mon-Fri, 9am - 6pm PST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-deep border border-brand-surfaceLight rounded-lg transition-colors">
                    <MapPin className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="text-brand-text font-bold font-display uppercase tracking-wide text-sm transition-colors">{t('sections.physicalNode')}</h4>
                    <p className="text-brand-muted text-sm">101 Tech Plaza, Suite 500</p>
                    <p className="text-brand-muted text-sm">San Francisco, CA 94107</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-brand-surfaceLight">
                <Button className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-none font-sans normal-case font-medium">
                  <MessageCircle className="w-5 h-5" /> {t('sections.chatWhatsapp')}
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-surface p-8 rounded-xl border border-brand-surfaceLight shadow-xl">
            <h3 className="text-2xl font-bold text-brand-text mb-6 font-display transition-colors">{t('sections.transmit')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">{t('sections.identity')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-deep border border-brand-surfaceLight rounded-sm px-4 py-3 text-brand-text focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder:text-brand-muted/30"
                    placeholder={t('form.placeholderName')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">{t('sections.commsAddr')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-brand-deep border border-brand-surfaceLight rounded-sm px-4 py-3 text-brand-text focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder:text-brand-muted/30"
                    placeholder={t('form.placeholderEmail')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">{t('sections.protoInterest')}</label>
                <select
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full bg-brand-deep border border-brand-surfaceLight rounded-sm px-4 py-3 text-brand-text focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                >
                  <option value="">{t('form.selectService')}</option>
                  <option value="web">{t('form.web')}</option>
                  <option value="mobile">{t('form.mobile')}</option>
                  <option value="consulting">{t('form.consulting')}</option>
                  <option value="other">{t('form.other')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">{t('sections.missionDetails')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-brand-deep border border-brand-surfaceLight rounded-sm px-4 py-3 text-brand-text focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder:text-brand-muted/30"
                  placeholder={t('form.placeholderMessage')}
                ></textarea>
              </div>

              <Button type="submit" variant="glow" size="lg" className="w-full" disabled={isSubmitted}>
                {isSubmitted ? t('sections.transReceived') : (
                  <span className="flex items-center gap-2">{t('sections.execTrans')} <Send className="w-4 h-4" /></span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;