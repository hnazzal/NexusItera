
import React, { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin, Send, MessageCircle, Sparkles, Wand2, ArrowRight, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { RevealOnScroll } from '../components/RevealOnScroll';

const Contact: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAiGenerating, setIsAiGenerating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formState);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleAiAutoDraft = () => {
    if (!formState.subject) return;
    setIsAiGenerating(true);
    setTimeout(() => {
        let draft = '';
        const name = formState.name || (language === 'en' ? 'Client' : 'عميل');
        if (language === 'en') {
            if (formState.subject === 'web') draft = `Hi Nexus Team,\n\nI am ${name} and I am looking to modernize our corporate web infrastructure. We need a scalable, high-performance solution. \n\nTimeline: 3-6 months.\nBudget: TBD.`;
            else if (formState.subject === 'mobile') draft = `Hello,\n\nWe are looking to develop a cross-platform mobile application for our user base. Key features include real-time sync and offline capability.`;
            else if (formState.subject === 'consulting') draft = `Greetings,\n\nWe require expert consultation on our current project management workflows. We aim to integrate AI-driven tracking.`;
            else draft = `Hi,\n\nI would like to inquire about your custom engineering services for a new project.`;
        } else {
            if (formState.subject === 'web') draft = `مرحباً فريق نيكسوس،\n\nأنا ${name} وأتطلع لتحديث البنية التحتية لموقعنا المؤسسي. نحتاج إلى حل قابل للتوسع وعالي الأداء.\n\nالجدول الزمني: 3-6 أشهر.`;
            else if (formState.subject === 'mobile') draft = `مرحباً،\n\nنحن نتطلع لتطوير تطبيق جوال متعدد المنصات لقاعدة مستخدمينا. الميزات الرئيسية تشمل المزامنة الفورية والعمل دون اتصال.`;
            else if (formState.subject === 'consulting') draft = `تحياتي،\n\nنحتاج إلى استشارة خبيرة حول سير عمل إدارة المشاريع الحالي لدينا. نهدف إلى دمج تتبع مدعوم بالذكاء الاصطناعي.`;
            else draft = `مرحباً،\n\nأود الاستفسار عن خدمات الهندسة المخصصة لديكم لمشروع جديد.`;
        }
        setFormState(prev => ({ ...prev, message: draft }));
        setIsAiGenerating(false);
    }, 1000);
  };

  const suggestions = [
      { id: 'web', label: language === 'en' ? 'Web Platform' : 'منصة ويب' },
      { id: 'mobile', label: language === 'en' ? 'iOS/Android App' : 'تطبيق جوال' },
      { id: 'consulting', label: language === 'en' ? 'AI Consultation' : 'استشارة ذكاء اصطناعي' }
  ];

  return (
    <div className="bg-brand-deep transition-colors duration-300 min-h-screen relative overflow-hidden py-24">
      <SEO 
        title={t('nav.contact')} 
        description={t('sections.readyToStart')} 
      />

      {/* Immersive Background */}
      <div className="absolute inset-0 bg-brand-deep z-0">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          {/* Soft Gradient Auroras */}
          <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-brand-primary/10 rounded-full blur-[150px] animate-float pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-brand-secondary/10 rounded-full blur-[150px] animate-float-delayed pointer-events-none -translate-x-1/4 translate-y-1/4"></div>
          
          {/* Tech Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-surface border border-brand-primary/30 text-brand-primary text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(109,40,217,0.2)] backdrop-blur-md">
                <Globe className="w-4 h-4" />
                <span>{t('sections.contactTitle')}</span>
             </div>
             <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-text via-white to-brand-text mb-6 font-display drop-shadow-sm">{t('sections.contactSub')}</h1>
             <p className="text-brand-muted text-lg max-w-2xl mx-auto font-light">
                {t('sections.readyToStart')}
             </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-stretch">
          
          {/* Contact Info Card (Left - 4 cols) */}
          <div className="lg:col-span-5 h-full">
             <RevealOnScroll delay={100} className="h-full">
              <div className="bg-brand-surface/60 backdrop-blur-2xl p-10 rounded-[2rem] border border-brand-surfaceLight relative overflow-hidden shadow-2xl h-full flex flex-col hover:border-brand-primary/30 transition-all duration-500 group">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-secondary/20 to-transparent rounded-full blur-[60px] pointer-events-none group-hover:bg-brand-secondary/30 transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-primary/10 rounded-full blur-[40px] pointer-events-none"></div>
                
                <h3 className="text-3xl font-bold text-brand-text mb-8 font-display transition-colors">{t('sections.projInq')}</h3>
                
                <div className="space-y-8 flex-grow">
                  <div className="flex items-center gap-6 group/item p-4 rounded-xl hover:bg-brand-surfaceLight/30 transition-colors">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-deep to-brand-surface rounded-2xl border border-brand-surfaceLight flex items-center justify-center shrink-0 group-hover/item:border-brand-primary group-hover/item:scale-110 group-hover/item:shadow-[0_0_15px_rgba(109,40,217,0.3)] transition-all duration-300">
                      <Mail className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="text-brand-text font-bold font-display uppercase tracking-wide text-xs mb-1 opacity-70">{t('sections.emailChannel')}</h4>
                      <p className="text-brand-text font-medium text-base group-hover/item:text-brand-primary transition-colors cursor-pointer">hello@nexusitera.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group/item p-4 rounded-xl hover:bg-brand-surfaceLight/30 transition-colors">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-deep to-brand-surface rounded-2xl border border-brand-surfaceLight flex items-center justify-center shrink-0 group-hover/item:border-brand-secondary group-hover/item:scale-110 group-hover/item:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300">
                      <Phone className="w-6 h-6 text-brand-secondary" />
                    </div>
                    <div>
                      <h4 className="text-brand-text font-bold font-display uppercase tracking-wide text-xs mb-1 opacity-70">{t('sections.voiceLink')}</h4>
                      <p className="text-brand-text font-medium text-base group-hover/item:text-brand-secondary transition-colors cursor-pointer">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group/item p-4 rounded-xl hover:bg-brand-surfaceLight/30 transition-colors">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-deep to-brand-surface rounded-2xl border border-brand-surfaceLight flex items-center justify-center shrink-0 group-hover/item:border-brand-pink group-hover/item:scale-110 group-hover/item:shadow-[0_0_15px_rgba(244,114,182,0.3)] transition-all duration-300">
                      <MapPin className="w-6 h-6 text-brand-pink" />
                    </div>
                    <div>
                      <h4 className="text-brand-text font-bold font-display uppercase tracking-wide text-xs mb-1 opacity-70">{t('sections.physicalNode')}</h4>
                      <p className="text-brand-text font-medium text-base">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-brand-surfaceLight/50">
                  <Button className="w-full flex items-center justify-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/50 shadow-none font-sans normal-case font-bold text-base py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]">
                    <MessageCircle className="w-5 h-5" /> {t('sections.chatWhatsapp')}
                  </Button>
                </div>
              </div>
             </RevealOnScroll>
          </div>

          {/* Contact Form (Right - 8 cols) */}
          <div className="lg:col-span-7">
            <RevealOnScroll delay={200}>
              <div className="bg-brand-surface/40 backdrop-blur-2xl p-8 md:p-12 rounded-[2rem] border border-brand-surfaceLight shadow-2xl relative overflow-hidden">
                {/* Top Border Shine */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-50"></div>
                
                <h3 className="text-2xl font-bold text-brand-text mb-8 font-display transition-colors flex items-center gap-3">
                  <div className="p-2 bg-brand-primary/10 rounded-lg">
                    <Sparkles className="w-5 h-5 text-brand-primary" />
                  </div>
                  {t('sections.transmit')}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group relative">
                      <label htmlFor="name" className="absolute -top-3 left-4 px-2 bg-brand-surface/90 backdrop-blur text-xs font-bold text-brand-secondary uppercase tracking-wider transition-all z-10">{t('sections.identity')}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-brand-deep/60 border border-brand-surfaceLight rounded-xl px-6 py-5 text-brand-text focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all placeholder:text-brand-muted/30 text-sm hover:bg-brand-deep/80"
                        placeholder={t('form.placeholderName')}
                      />
                    </div>
                    <div className="group relative">
                      <label htmlFor="email" className="absolute -top-3 left-4 px-2 bg-brand-surface/90 backdrop-blur text-xs font-bold text-brand-secondary uppercase tracking-wider transition-all z-10">{t('sections.commsAddr')}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-brand-deep/60 border border-brand-surfaceLight rounded-xl px-6 py-5 text-brand-text focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all placeholder:text-brand-muted/30 text-sm hover:bg-brand-deep/80"
                        placeholder={t('form.placeholderEmail')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group relative">
                        <label htmlFor="phone" className="absolute -top-3 left-4 px-2 bg-brand-surface/90 backdrop-blur text-xs font-bold text-brand-secondary uppercase tracking-wider transition-all z-10">{t('form.phone')}</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full bg-brand-deep/60 border border-brand-surfaceLight rounded-xl px-6 py-5 text-brand-text focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all placeholder:text-brand-muted/30 text-sm hover:bg-brand-deep/80"
                          placeholder={t('form.placeholderPhone')}
                        />
                    </div>
                    <div className="group relative">
                        <label htmlFor="subject" className="absolute -top-3 left-4 px-2 bg-brand-surface/90 backdrop-blur text-xs font-bold text-brand-secondary uppercase tracking-wider transition-all z-10">{t('sections.protoInterest')}</label>
                        <div className="relative">
                          <select
                              id="subject"
                              name="subject"
                              value={formState.subject}
                              onChange={handleChange}
                              className="w-full bg-brand-deep/60 border border-brand-surfaceLight rounded-xl px-6 py-5 text-brand-text focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all appearance-none cursor-pointer hover:bg-brand-deep/80 text-sm"
                          >
                              <option value="">{t('form.selectService')}</option>
                              <option value="web">{t('form.web')}</option>
                              <option value="mobile">{t('form.mobile')}</option>
                              <option value="consulting">{t('form.consulting')}</option>
                              <option value="other">{t('form.other')}</option>
                          </select>
                          <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none text-brand-primary ${dir === 'rtl' ? 'left-6' : 'right-6'}`}>
                              <ArrowRight className="w-5 h-5 rotate-90" />
                          </div>
                        </div>
                    </div>
                  </div>

                  {/* AI Quick Chips */}
                  {formState.subject === '' && (
                    <div className="flex flex-wrap gap-3 items-center bg-brand-primary/5 p-4 rounded-xl border border-brand-primary/10">
                        <div className="p-1.5 bg-brand-primary/20 rounded-full animate-pulse">
                            <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
                        </div>
                        <span className="text-xs text-brand-text/70 font-bold uppercase tracking-wide">{t('smartForm.suggestions')}</span>
                        <div className="flex flex-wrap gap-2">
                          {suggestions.map(s => (
                              <button 
                                  key={s.id} 
                                  type="button" 
                                  onClick={() => setFormState({...formState, subject: s.id})}
                                  className="text-[11px] bg-brand-surface hover:bg-brand-primary hover:text-white px-3 py-1.5 rounded-full border border-brand-surfaceLight hover:border-brand-primary transition-all duration-300 font-medium shadow-sm"
                              >
                                  {s.label}
                              </button>
                          ))}
                        </div>
                    </div>
                  )}

                  <div className="relative group">
                    <div className="flex justify-between items-center mb-3">
                      <label htmlFor="message" className="text-xs font-bold text-brand-secondary uppercase tracking-wider px-2 bg-brand-surface/90 backdrop-blur rounded">{t('sections.missionDetails')}</label>
                      {formState.subject && !formState.message && (
                          <button 
                              type="button" 
                              onClick={handleAiAutoDraft}
                              disabled={isAiGenerating}
                              className="flex items-center gap-1.5 text-[10px] text-brand-text bg-brand-secondary hover:bg-brand-primary transition-colors font-bold uppercase tracking-wide px-3 py-1 rounded-full shadow-lg shadow-brand-secondary/20"
                          >
                              <Wand2 className={`w-3 h-3 ${isAiGenerating ? 'animate-spin' : ''}`} /> 
                              {isAiGenerating ? 'Generating...' : t('smartForm.aiAssist')}
                          </button>
                      )}
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-deep/60 border border-brand-surfaceLight rounded-xl px-6 py-5 text-brand-text focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all placeholder:text-brand-muted/30 text-sm hover:bg-brand-deep/80 leading-relaxed"
                      placeholder={t('form.placeholderMessage')}
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary"
                    className="w-full py-5 text-lg rounded-xl shadow-[0_0_30px_rgba(109,40,217,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-display tracking-widest uppercase relative overflow-hidden"
                    disabled={isSubmitted}
                  >
                    {/* Shine effect overlay */}
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shine pointer-events-none"></div>
                    
                    {isSubmitted ? (
                        <span className="flex items-center gap-3"><Sparkles className="w-5 h-5" /> {t('sections.transReceived')}</span>
                    ) : (
                      <span className="flex items-center gap-3">{t('sections.submitInquiry')} <Send className="w-5 h-5" /></span>
                    )}
                  </Button>
                </form>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Holographic Map Section */}
        <RevealOnScroll delay={300}>
          <div className="w-full rounded-[2rem] overflow-hidden border border-brand-surfaceLight shadow-2xl relative group h-[500px]">
            {/* Holographic Overlays */}
            <div className="absolute inset-0 bg-brand-deep/20 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
            <div className="absolute inset-0 border-[1px] border-brand-primary/20 rounded-[2rem] z-20 pointer-events-none"></div>
            <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-brand-primary z-20 opacity-50"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-brand-primary z-20 opacity-50"></div>
            
            {/* Scanline Animation */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent h-[10px] w-full animate-[float_4s_linear_infinite] z-10 pointer-events-none"></div>

            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.063690623253!2d-122.40476368468165!3d37.78192997975806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807de816c61b%3A0x2fc90d3d8396c21e!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{border:0, filter: 'grayscale(100%) invert(0.9) contrast(1.2)'}} 
              allowFullScreen 
              loading="lazy"
              title="Office Location"
              className="w-full h-full mix-blend-luminosity opacity-70 group-hover:opacity-100 transition-opacity duration-700"
            ></iframe>
            
            <div className="absolute bottom-8 left-8 z-30 bg-brand-surface/90 backdrop-blur-xl px-8 py-6 rounded-2xl border border-brand-primary/30 shadow-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] animate-pulse"></div>
                    <p className="text-brand-text font-bold font-display uppercase tracking-wide text-sm">{t('sections.location')}</p>
                </div>
                <p className="text-brand-muted text-xs font-mono">37.7819° N, 122.4048° W • HQ NODE</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default Contact;
