
import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { TEAM_DATA } from '../constants';
import { Target, Eye, Heart, Award, Zap, Users, Code, Coffee } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SEO } from '../components/SEO';
import { LazyImage } from '../components/LazyImage';
import { RevealOnScroll } from '../components/RevealOnScroll';

const About: React.FC = () => {
  const { t, language } = useLanguage();
  const team = TEAM_DATA[language];

  return (
    <div className="bg-brand-deep transition-colors duration-300 min-h-screen">
      <SEO 
        title={t('nav.about')} 
        description={t('sections.story')} 
      />
      
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-brand-deep to-brand-surface">
        <div className="absolute inset-0 bg-brand-primary/5"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <RevealOnScroll>
             <h1 className="text-4xl md:text-6xl font-bold text-brand-text mb-6 font-display transition-colors">
               {t('sections.story')}
             </h1>
             <p className="text-xl text-brand-muted max-w-2xl mx-auto font-light">
               {t('sections.origins')} & {t('sections.evolution')}
             </p>
           </RevealOnScroll>
        </div>
      </section>

      {/* Company Story Content */}
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="prose prose-lg dark:prose-invert mx-auto text-brand-muted max-w-4xl text-center mb-24 font-light leading-relaxed">
            <p className="mb-8 text-2xl text-brand-text font-display">
              {language === 'en' 
                ? "Founded in 2018, NexusItera emerged from a simple yet powerful idea: that enterprise software shouldn't just function—it should propel business evolution."
                : "تأسست نيكسوس إيتيرا في عام 2018 من فكرة بسيطة ولكنها قوية: أن برمجيات المؤسسات لا ينبغي أن تعمل فحسب، بل يجب أن تدفع تطور الأعمال."
              }
            </p>
            <p>
              {language === 'en'
                ? "We bridge the gap between complex engineering and intuitive user experiences. What started as a small team of senior developers has grown into a premier digital consultancy, trusted by Fortune 500 companies and agile startups alike to deliver mission-critical systems."
                : "نحن نسد الفجوة بين الهندسة المعقدة وتجارب المستخدم البديهية. ما بدأ كفريق صغير من كبار المطورين نما ليصبح استشارية رقمية رائدة، موثوق بها من قبل الشركات الكبرى والشركات الناشئة لتقديم أنظمة حيوية."
              }
            </p>
          </div>
        </RevealOnScroll>

        {/* Mission Vision Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {/* Mission */}
          <RevealOnScroll delay={0}>
            <div className="bg-brand-surface p-10 rounded-2xl border border-brand-surfaceLight hover:border-brand-primary transition-all duration-300 text-center group shadow-xl hover:-translate-y-1 h-full">
              <div className="w-20 h-20 bg-brand-deep rounded-2xl rotate-3 flex items-center justify-center mx-auto mb-8 border border-brand-surfaceLight group-hover:border-brand-primary group-hover:rotate-6 transition-all duration-300">
                <Target className="w-10 h-10 text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-brand-text mb-4 font-display transition-colors">{t('sections.mission')}</h3>
              <p className="text-brand-muted leading-relaxed">
                {language === 'en' ? "To accelerate digital transformation through reliable, scalable, and innovative technology solutions." : "تسريع التحول الرقمي من خلال حلول تقنية موثوقة وقابلة للتوسع ومبتكرة."}
              </p>
            </div>
          </RevealOnScroll>

          {/* Vision */}
          <RevealOnScroll delay={100}>
            <div className="bg-brand-surface p-10 rounded-2xl border border-brand-surfaceLight hover:border-brand-secondary transition-all duration-300 text-center group shadow-xl hover:-translate-y-1 h-full">
              <div className="w-20 h-20 bg-brand-deep rounded-2xl -rotate-2 flex items-center justify-center mx-auto mb-8 border border-brand-surfaceLight group-hover:border-brand-secondary group-hover:-rotate-6 transition-all duration-300">
                <Eye className="w-10 h-10 text-brand-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-brand-text mb-4 font-display transition-colors">{t('sections.vision')}</h3>
              <p className="text-brand-muted leading-relaxed">
                {language === 'en' ? "To be the global benchmark for software engineering excellence and client partnership." : "أن نكون المعيار العالمي لتميز هندسة البرمجيات وشراكة العملاء."}
              </p>
            </div>
          </RevealOnScroll>

          {/* Energy/Values */}
          <RevealOnScroll delay={200}>
            <div className="bg-brand-surface p-10 rounded-2xl border border-brand-surfaceLight hover:border-brand-pink transition-all duration-300 text-center group shadow-xl hover:-translate-y-1 h-full">
              <div className="w-20 h-20 bg-brand-deep rounded-2xl rotate-1 flex items-center justify-center mx-auto mb-8 border border-brand-surfaceLight group-hover:border-brand-pink group-hover:rotate-3 transition-all duration-300">
                <Zap className="w-10 h-10 text-brand-pink" />
              </div>
              <h3 className="text-2xl font-bold text-brand-text mb-4 font-display transition-colors">{t('sections.energy')}</h3>
              <p className="text-brand-muted leading-relaxed">
                {language === 'en' ? "Integrity in code, transparency in communication, and relentless pursuit of quality." : "النزاهة في الكود، والشفافية في التواصل، والسعي الدؤوب للجودة."}
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Culture Section */}
        <div className="mb-32">
          <SectionTitle title={t('sections.lifeAtNexus')} subtitle={t('sections.culture')} />
          <RevealOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
              {/* Main large image */}
              <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl group">
                <div className="absolute inset-0 bg-brand-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <LazyImage src="https://picsum.photos/800/800?random=20" alt="Office Culture" className="w-full h-full" />
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="bg-brand-surface/80 backdrop-blur text-brand-text px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-brand-surfaceLight">
                    <Users className="w-3 h-3 text-brand-primary" /> Collaboration
                  </span>
                </div>
              </div>
              
              {/* Top right images */}
              <div className="col-span-1 relative overflow-hidden rounded-2xl group">
                <LazyImage src="https://picsum.photos/400/400?random=21" alt="Coding" className="w-full h-full" />
              </div>
              <div className="col-span-1 relative overflow-hidden rounded-2xl group">
                 <LazyImage src="https://picsum.photos/400/400?random=22" alt="Meeting" className="w-full h-full" />
              </div>

              {/* Bottom right images */}
              <div className="col-span-1 relative overflow-hidden rounded-2xl group">
                 <LazyImage src="https://picsum.photos/400/400?random=23" alt="Design" className="w-full h-full" />
              </div>
              <div className="col-span-1 relative overflow-hidden rounded-2xl group">
                 <div className="absolute inset-0 bg-brand-secondary/10 group-hover:bg-transparent transition-colors z-10"></div>
                 <LazyImage src="https://picsum.photos/400/400?random=24" alt="Celebration" className="w-full h-full" />
                  <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-brand-surface/80 backdrop-blur text-brand-text px-2 py-1 rounded-full text-[10px] font-bold uppercase flex items-center gap-1 border border-brand-surfaceLight">
                    <Coffee className="w-3 h-3 text-brand-secondary" /> Balance
                  </span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Leadership */}
        <RevealOnScroll>
          <SectionTitle title={t('sections.leadership')} subtitle={t('sections.origins')} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
            {team.map((member, index) => (
              <div key={member.id} className="group flex flex-col sm:flex-row gap-8 items-center sm:items-start bg-brand-surface p-8 rounded-2xl border border-brand-surfaceLight hover:border-brand-primary/50 transition-all shadow-lg hover:shadow-2xl hover:shadow-brand-primary/10">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 bg-brand-primary rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <LazyImage 
                      src={member.imageUrl} 
                      alt={member.name} 
                      className="w-32 h-32 rounded-full object-cover border-4 border-brand-deep relative z-10 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center sm:text-start">
                    <h3 className="text-2xl font-bold text-brand-text font-display transition-colors mb-2">{member.name}</h3>
                    <p className="text-brand-secondary text-sm font-bold uppercase tracking-wider mb-4">{member.role}</p>
                    <p className="text-brand-muted text-sm font-light leading-relaxed">{member.bio}</p>
                  </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
      
      {/* Stats Strip */}
      <div className="border-t border-brand-surfaceLight bg-brand-dark py-20 transition-colors duration-300 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
         <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-16 md:gap-32 relative z-10">
            <RevealOnScroll delay={0}>
              <div className="text-center group cursor-default">
                <div className="text-5xl md:text-6xl font-bold text-brand-text mb-2 font-display transition-colors group-hover:text-brand-primary duration-300">5+</div>
                <div className="text-brand-muted uppercase text-xs tracking-[0.2em] font-bold">{t('sections.years')}</div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <div className="text-center group cursor-default">
                <div className="text-5xl md:text-6xl font-bold text-brand-text mb-2 font-display transition-colors group-hover:text-brand-secondary duration-300">100%</div>
                <div className="text-brand-muted uppercase text-xs tracking-[0.2em] font-bold">{t('sections.success')}</div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <div className="text-center group cursor-default">
                <div className="text-5xl md:text-6xl font-bold text-brand-text mb-2 font-display flex items-center justify-center gap-3 transition-colors group-hover:text-brand-yellow duration-300">
                  <Award className="h-12 w-12"/>
                </div>
                <div className="text-brand-muted uppercase text-xs tracking-[0.2em] font-bold">{t('sections.award')}</div>
              </div>
            </RevealOnScroll>
         </div>
      </div>
    </div>
  );
};

export default About;
