import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { TEAM_DATA } from '../constants';
import { Target, Eye, Heart, Award, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t, language } = useLanguage();
  const team = TEAM_DATA[language];

  return (
    <div className="bg-brand-deep transition-colors duration-300">
      {/* Company Story */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t('sections.story')} subtitle={t('sections.origins')} />
        
        <div className="prose prose-lg dark:prose-invert mx-auto text-brand-muted max-w-3xl text-center mb-24 font-light">
          <p className="mb-6">
            {language === 'en' 
              ? "Founded in 2018, NexusItera emerged from a simple yet powerful idea: that enterprise software shouldn't just function—it should propel business evolution. We bridge the gap between complex engineering and intuitive user experiences."
              : "تأسست نيكسوس إيتيرا في عام 2018 من فكرة بسيطة ولكنها قوية: أن برمجيات المؤسسات لا ينبغي أن تعمل فحسب، بل يجب أن تدفع تطور الأعمال. نحن نسد الفجوة بين الهندسة المعقدة وتجارب المستخدم البديهية."
            }
          </p>
          <p>
            {language === 'en'
              ? "What started as a small team of three senior developers has grown into a premier digital consultancy, trusted by Fortune 500 companies and agile startups alike to deliver mission-critical systems."
              : "ما بدأ كفريق صغير من ثلاثة مطورين كبار نما ليصبح استشارية رقمية رائدة، موثوق بها من قبل شركات Fortune 500 والشركات الناشئة المرنة على حد سواء لتسليم أنظمة حيوية للمهام."
            }
          </p>
        </div>

        {/* Mission Vision Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="bg-brand-surface p-8 rounded-xl border border-brand-surfaceLight hover:border-brand-primary transition-colors text-center group shadow-lg">
            <div className="w-16 h-16 bg-brand-deep rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-surfaceLight group-hover:border-brand-primary transition-colors">
              <Target className="w-8 h-8 text-brand-primary" />
            </div>
            <h3 className="text-xl font-bold text-brand-text mb-3 font-display transition-colors">{t('sections.mission')}</h3>
            <p className="text-brand-muted text-sm">
              {language === 'en' ? "To accelerate digital transformation through reliable, scalable, and innovative technology solutions." : "تسريع التحول الرقمي من خلال حلول تقنية موثوقة وقابلة للتوسع ومبتكرة."}
            </p>
          </div>
          <div className="bg-brand-surface p-8 rounded-xl border border-brand-surfaceLight hover:border-brand-secondary transition-colors text-center group shadow-lg">
             <div className="w-16 h-16 bg-brand-deep rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-surfaceLight group-hover:border-brand-secondary transition-colors">
              <Eye className="w-8 h-8 text-brand-secondary" />
            </div>
            <h3 className="text-xl font-bold text-brand-text mb-3 font-display transition-colors">{t('sections.vision')}</h3>
            <p className="text-brand-muted text-sm">
              {language === 'en' ? "To be the global benchmark for software engineering excellence and client partnership." : "أن نكون المعيار العالمي لتميز هندسة البرمجيات وشراكة العملاء."}
            </p>
          </div>
          <div className="bg-brand-surface p-8 rounded-xl border border-brand-surfaceLight hover:border-brand-accent transition-colors text-center group shadow-lg">
             <div className="w-16 h-16 bg-brand-deep rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-surfaceLight group-hover:border-brand-accent transition-colors">
              <Zap className="w-8 h-8 text-brand-accent" />
            </div>
            <h3 className="text-xl font-bold text-brand-text mb-3 font-display transition-colors">{t('sections.energy')}</h3>
            <p className="text-brand-muted text-sm">
              {language === 'en' ? "Integrity in code, transparency in communication, and relentless pursuit of quality." : "النزاهة في الكود، والشفافية في التواصل، والسعي الدؤوب للجودة."}
            </p>
          </div>
        </div>

        {/* Leadership */}
        <SectionTitle title={t('sections.leadership')} subtitle={t('sections.origins')} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member) => (
             <div key={member.id} className="flex flex-col sm:flex-row gap-6 items-center sm:items-start bg-brand-surface p-8 rounded-xl border border-brand-surfaceLight hover:shadow-[0_0_20px_rgba(112,0,255,0.1)] transition-all shadow-lg">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full object-cover border-2 border-brand-primary p-1"
                />
                <div className="text-center sm:text-start">
                  <h3 className="text-xl font-bold text-brand-text font-display transition-colors">{member.name}</h3>
                  <p className="text-brand-primary text-sm font-bold uppercase tracking-wider mb-3">{member.role}</p>
                  <p className="text-brand-muted text-sm font-light">{member.bio}</p>
                </div>
             </div>
          ))}
        </div>
      </div>
      
      {/* Stats Strip */}
      <div className="border-t border-brand-surfaceLight bg-brand-dark py-16 transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-16 md:gap-32">
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-text mb-2 font-display transition-colors">5+</div>
              <div className="text-brand-muted uppercase text-xs tracking-[0.2em]">{t('sections.years')}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-text mb-2 font-display transition-colors">100%</div>
              <div className="text-brand-muted uppercase text-xs tracking-[0.2em]">{t('sections.success')}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-text mb-2 font-display flex items-center justify-center gap-2 transition-colors">
                 <Award className="h-10 w-10 text-brand-secondary"/>
              </div>
              <div className="text-brand-muted uppercase text-xs tracking-[0.2em]">{t('sections.award')}</div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default About;