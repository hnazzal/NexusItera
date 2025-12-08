
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sliders, Zap, TrendingUp, Clock, DollarSign, Sparkles, Briefcase, Users } from 'lucide-react';

export const WhatIfDemo: React.FC = () => {
  const { t, language } = useLanguage();
  
  // Scenario Toggle
  const [scenario, setScenario] = useState<'finance' | 'projects'>('finance');

  // Finance Inputs
  const [invoices, setInvoices] = useState(500);
  const [timePerInvoice, setTimePerInvoice] = useState(15);

  // Project Inputs
  const [teamSize, setTeamSize] = useState(10);
  const [meetings, setMeetings] = useState(5);

  const [isCalculating, setIsCalculating] = useState(false);

  // Calculations
  let resultValue = 0;
  let resultLabel = '';
  let moneyValue = 0;
  let moneyLabel = '';
  let efficiency = 0;
  let insightText = '';

  if (scenario === 'finance') {
     const totalMinutes = invoices * timePerInvoice;
     const hoursMonthly = Math.round(totalMinutes / 60);
     const estimatedCost = hoursMonthly * 25; 
     
     resultValue = Math.round(hoursMonthly * 0.9); // Hours Saved
     resultLabel = t('demo.hoursSaved');
     moneyValue = Math.round(estimatedCost * 0.9);
     moneyLabel = t('demo.moneySaved');
     efficiency = 900;
     
     insightText = language === 'en' 
        ? `Processing ${invoices} invoices manually consumes ~${hoursMonthly} hours/mo. Nexus AI Agent can automate this, saving ${resultValue} hours.`
        : `معالجة ${invoices} فاتورة يدوياً تستهلك حوالي ${hoursMonthly} ساعة/شهر. وكيل نيكسوس يمكنه أتمتة ذلك، وتوفير ${resultValue} ساعة.`;

  } else {
     // Project Scenario Logic: 
     // Assume each meeting is 1hr for entire team. AI optimizes schedules & docs.
     // Savings = Meetings * TeamSize * 4 weeks * 0.3 (30% reduction in overhead)
     const totalMeetingHours = meetings * teamSize * 4;
     const productivityHours = totalMeetingHours * 0.4; // 40% gain through async AI updates

     resultValue = Math.round(productivityHours); // Hours Returned
     resultLabel = t('demo.hoursReturned');
     moneyValue = 35; // % Productivity Gain
     moneyLabel = t('demo.productivityGain');
     efficiency = 350; // Arbitrary high score

     insightText = language === 'en'
        ? `A team of ${teamSize} with ${meetings} syncs/week loses significant time. Smart Project Nexus optimizes workflows, returning ~${resultValue} productive hours.`
        : `فريق من ${teamSize} مع ${meetings} اجتماعات/أسبوع يضيع وقتاً كبيراً. نظام إدارة المشاريع الذكي يحسن سير العمل، ويعيد ~${resultValue} ساعة إنتاجية.`;
  }

  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => setIsCalculating(false), 600);
    return () => clearTimeout(timer);
  }, [invoices, timePerInvoice, teamSize, meetings, scenario]);

  return (
    <div className="bg-brand-surface border border-brand-surfaceLight rounded-3xl p-8 shadow-2xl relative overflow-hidden transition-all duration-500">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

       {/* Header & Tabs */}
       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-brand-deep rounded-xl border border-brand-surfaceLight shadow-lg">
                <Sparkles className="w-6 h-6 text-brand-secondary" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-brand-text font-display">{t('demo.title')}</h3>
                <p className="text-xs text-brand-muted uppercase tracking-widest">{t('demo.subtitle')}</p>
            </div>
          </div>

          <div className="flex bg-brand-deep/50 p-1 rounded-xl border border-brand-surfaceLight">
             <button 
                onClick={() => setScenario('finance')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${scenario === 'finance' ? 'bg-brand-surface text-brand-primary shadow-sm' : 'text-brand-muted hover:text-brand-text'}`}
             >
                {t('demo.scenarioFinance')}
             </button>
             <button 
                onClick={() => setScenario('projects')}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${scenario === 'projects' ? 'bg-brand-surface text-brand-secondary shadow-sm' : 'text-brand-muted hover:text-brand-text'}`}
             >
                {t('demo.scenarioProjects')}
             </button>
          </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          {/* Inputs */}
          <div className="space-y-8">
             {scenario === 'finance' ? (
                 <>
                    <div className="animate-fade-in-up">
                        <div className="flex justify-between mb-2">
                        <label className="text-sm font-bold text-brand-muted flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" /> {t('demo.invoices')}
                        </label>
                        <span className="text-brand-primary font-mono font-bold">{invoices}</span>
                        </div>
                        <input 
                        type="range" min="50" max="5000" step="50" value={invoices} onChange={(e) => setInvoices(parseInt(e.target.value))}
                        className="w-full h-2 bg-brand-deep rounded-lg appearance-none cursor-pointer accent-brand-primary hover:accent-brand-accent transition-all"
                        />
                    </div>
                    <div className="animate-fade-in-up" style={{animationDelay: '100ms'}}>
                        <div className="flex justify-between mb-2">
                        <label className="text-sm font-bold text-brand-muted flex items-center gap-2">
                            <Clock className="w-4 h-4" /> {t('demo.time')}
                        </label>
                        <span className="text-brand-primary font-mono font-bold">{timePerInvoice} min</span>
                        </div>
                        <input 
                        type="range" min="5" max="60" step="1" value={timePerInvoice} onChange={(e) => setTimePerInvoice(parseInt(e.target.value))}
                        className="w-full h-2 bg-brand-deep rounded-lg appearance-none cursor-pointer accent-brand-secondary hover:accent-brand-primary transition-all"
                        />
                    </div>
                 </>
             ) : (
                 <>
                    <div className="animate-fade-in-up">
                        <div className="flex justify-between mb-2">
                        <label className="text-sm font-bold text-brand-muted flex items-center gap-2">
                            <Users className="w-4 h-4" /> {t('demo.teamSize')}
                        </label>
                        <span className="text-brand-secondary font-mono font-bold">{teamSize}</span>
                        </div>
                        <input 
                        type="range" min="2" max="50" step="1" value={teamSize} onChange={(e) => setTeamSize(parseInt(e.target.value))}
                        className="w-full h-2 bg-brand-deep rounded-lg appearance-none cursor-pointer accent-brand-secondary hover:accent-brand-primary transition-all"
                        />
                    </div>
                    <div className="animate-fade-in-up" style={{animationDelay: '100ms'}}>
                        <div className="flex justify-between mb-2">
                        <label className="text-sm font-bold text-brand-muted flex items-center gap-2">
                            <Briefcase className="w-4 h-4" /> {t('demo.meetings')}
                        </label>
                        <span className="text-brand-secondary font-mono font-bold">{meetings} / wk</span>
                        </div>
                        <input 
                        type="range" min="1" max="20" step="1" value={meetings} onChange={(e) => setMeetings(parseInt(e.target.value))}
                        className="w-full h-2 bg-brand-deep rounded-lg appearance-none cursor-pointer accent-brand-primary hover:accent-brand-secondary transition-all"
                        />
                    </div>
                 </>
             )}

             <div className="bg-brand-deep/50 p-5 rounded-xl border border-brand-surfaceLight/50 transition-all duration-300">
                <div className="flex items-start gap-3">
                   <div className="mt-1 w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                   <div>
                      <h4 className="text-xs font-bold text-brand-text uppercase mb-1 flex items-center gap-2">{t('demo.insight')}</h4>
                      <p className="text-sm text-brand-muted leading-relaxed font-light">
                         {insightText}
                      </p>
                   </div>
                </div>
             </div>
          </div>

          {/* Outputs / Dashboard View */}
          <div className="bg-brand-deep rounded-2xl border border-brand-surfaceLight p-6 relative flex flex-col justify-center overflow-hidden">
             {/* Scanning Animation line */}
             <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-primary to-transparent animate-[scan_3s_ease-in-out_infinite] opacity-50 pointer-events-none"></div>

             {isCalculating && (
                <div className="absolute inset-0 bg-brand-deep/90 backdrop-blur-sm z-20 flex items-center justify-center">
                   <div className="flex flex-col items-center gap-3">
                      <div className="w-10 h-10 border-2 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-xs text-brand-primary font-mono animate-pulse tracking-widest">{t('chatbot.thinking')}</span>
                   </div>
                </div>
             )}

             <div className="grid grid-cols-1 gap-6 relative z-10">
                {/* Metric 1 */}
                <div className="flex items-center justify-between p-5 bg-brand-surface/50 rounded-xl border border-brand-surfaceLight group hover:border-brand-primary/30 transition-colors">
                   <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-lg ${scenario === 'finance' ? 'bg-brand-primary/10 text-brand-primary' : 'bg-brand-secondary/10 text-brand-secondary'}`}>
                         <Clock className="w-5 h-5" />
                      </div>
                      <span className="text-brand-muted text-sm font-medium">{resultLabel}</span>
                   </div>
                   <span className="text-3xl font-bold text-brand-text font-mono tracking-tight">{resultValue}</span>
                </div>

                {/* Metric 2 */}
                <div className="flex items-center justify-between p-5 bg-brand-surface/50 rounded-xl border border-brand-surfaceLight group hover:border-brand-secondary/30 transition-colors">
                   <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-lg ${scenario === 'finance' ? 'bg-brand-secondary/10 text-brand-secondary' : 'bg-brand-primary/10 text-brand-primary'}`}>
                         {scenario === 'finance' ? <DollarSign className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
                      </div>
                      <span className="text-brand-muted text-sm font-medium">{moneyLabel}</span>
                   </div>
                   <span className={`text-3xl font-bold font-mono tracking-tight ${scenario === 'finance' ? 'text-brand-secondary' : 'text-brand-primary'}`}>
                      {scenario === 'finance' ? `$${moneyValue.toLocaleString()}` : `${moneyValue}%`}
                   </span>
                </div>

                {/* Efficiency Bar */}
                <div className="mt-2 pt-4 border-t border-brand-surfaceLight/50">
                   <div className="flex justify-between items-end mb-3">
                      <span className="text-brand-muted text-xs font-bold uppercase tracking-wider">{t('demo.efficiency')}</span>
                      <span className="text-brand-accent font-bold text-xl">{efficiency}%</span>
                   </div>
                   <div className="h-3 w-full bg-brand-surfaceLight/30 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${scenario === 'finance' ? 'from-brand-secondary to-brand-primary' : 'from-brand-primary to-brand-secondary'} relative`}
                        style={{ width: '100%' }}
                      >
                         <div className="absolute inset-0 bg-white/20 animate-[shine_2s_infinite]"></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};
