
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GoogleGenAI } from '@google/genai';
import { Logo } from './Logo';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const AIChatbot: React.FC = () => {
  const { t, language, dir } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 0 && isOpen) {
      setMessages([
        {
          id: 'welcome',
          text: t('chatbot.greeting'),
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, t]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      let botResponseText = '';
      // Safe check for process.env
      const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : undefined;

      if (apiKey) {
        // Use Real Gemini API
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: input,
          config: {
            systemInstruction: `You are the AI Assistant for NexusItera, a premium software development company. 
            Tone: Professional, Innovative, Helpful, Concise.
            Services: Web Development, Mobile Apps, Custom Engineering, AI Solutions, Project Management.
            Products: AI Invoice Extraction, Intelligent KPI Dashboard, Smart Project Nexus.
            Language: Respond in ${language === 'ar' ? 'Arabic' : 'English'}.
            Keep answers short (under 50 words) and encourage the user to book a consultation.`,
          },
        });
        botResponseText = response.text || "I'm connecting to the neural network...";
      } else {
        // Fallback Simulation
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate thinking delay
        botResponseText = getSimulatedResponse(input, language);
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('AI Error:', error);
      const fallbackResponse = getSimulatedResponse(input, language);
      setMessages((prev) => [...prev, {
        id: (Date.now() + 1).toString(),
        text: fallbackResponse,
        sender: 'bot',
        timestamp: new Date(),
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const getSimulatedResponse = (query: string, lang: string) => {
    const q = query.toLowerCase();
    const isAr = lang === 'ar';

    if (q.includes('invoice') || q.includes('فاتورة') || q.includes('finance')) {
      return isAr 
        ? "منتج استخراج الفواتير بالذكاء الاصطناعي لدينا يمكنه أتمتة العملية بالكامل. هل ترغب في رؤية تجربة؟"
        : "Our AI Invoice Extraction product automates your financial workflows completely. Would you like to see a demo?";
    }
    if (q.includes('dashboard') || q.includes('excel') || q.includes('لوحة')) {
      return isAr
        ? "لوحة التحكم الذكية لدينا تحول ملفات إكسل إلى رؤى فورية. إنها مثالية للمدراء."
        : "Our Intelligent KPI Dashboard transforms raw Excel data into instant strategic insights. Perfect for management.";
    }
    if (q.includes('contact') || q.includes('email') || q.includes('تواصل')) {
      return isAr
        ? "يمكنك التواصل معنا عبر صفحة الاتصال أو البريد hello@nexusitera.tech."
        : "You can reach us via the Contact page or email hello@nexusitera.tech.";
    }
    if (q.includes('price') || q.includes('cost') || q.includes('سعر')) {
      return isAr
        ? "تعتمد الأسعار على نطاق المشروع. نوصي بجدولة استشارة للحصول على عرض مخصص."
        : "Pricing depends on project scope. We recommend scheduling a consultation for a tailored quote.";
    }
    return isAr
      ? "أنا هنا للمساعدة في استكشاف خدمات نيكسوس إيتيرا. يمكنك سؤالي عن منتجاتنا أو خدمات التطوير."
      : "I'm here to help you explore NexusItera. You can ask me about our AI products or development services.";
  };

  return (
    <>
      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 ${dir === 'rtl' ? 'left-8' : 'right-8'} z-50 w-16 h-16 rounded-full bg-brand-surface border border-brand-primary/50 shadow-[0_0_20px_rgba(0,163,204,0.4)] flex items-center justify-center text-brand-primary hover:scale-110 transition-all duration-300 group overflow-hidden`}
        aria-label="Toggle Chat"
      >
        <div className="absolute inset-0 bg-brand-primary/10 rounded-full animate-pulse-slow"></div>
        {isOpen ? <X className="w-8 h-8 relative z-10" /> : <Bot className="w-8 h-8 relative z-10" />}
        <div className="absolute inset-0 border-2 border-brand-secondary/30 rounded-full border-t-transparent animate-spin"></div>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-28 ${
          dir === 'rtl' ? 'left-4 sm:left-8' : 'right-4 sm:right-8'
        } z-40 w-[calc(100vw-2rem)] sm:w-96 h-[500px] bg-brand-surface/95 backdrop-blur-xl border border-brand-surfaceLight rounded-2xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-brand-surfaceLight flex items-center gap-3 bg-brand-deep/50 rounded-t-2xl">
          <div className="w-8 h-8">
            <Logo className="w-full h-full" withText={false} />
          </div>
          <div>
            <h3 className="text-brand-text font-bold text-sm font-display">{t('chatbot.title')}</h3>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] text-brand-muted uppercase tracking-wider">Online</span>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-brand-surfaceLight scrollbar-track-transparent">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} animate-fade-in-up`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${
                  msg.sender === 'user'
                    ? 'bg-brand-deep border-brand-surfaceLight text-brand-text'
                    : 'bg-brand-deep border-brand-primary/30 text-brand-primary'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
              </div>
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-brand-primary/10 text-brand-text border border-brand-primary/20 rounded-tr-none'
                    : 'bg-brand-surfaceLight/50 text-brand-text border border-brand-surfaceLight rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-start gap-2 animate-fade-in-up">
              <div className="w-8 h-8 rounded-full bg-brand-deep border border-brand-primary/30 text-brand-primary flex items-center justify-center">
                 <Bot className="w-4 h-4" />
              </div>
              <div className="bg-brand-surfaceLight/20 px-4 py-3 rounded-2xl rounded-tl-none border border-brand-surfaceLight/50 flex flex-col gap-1 min-w-[120px]">
                 <div className="flex gap-1 mb-1">
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce delay-200"></span>
                 </div>
                 <span className="text-[10px] text-brand-muted font-mono tracking-wider">{t('chatbot.thinking')}</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-brand-surfaceLight bg-brand-deep/30 rounded-b-2xl">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('chatbot.placeholder')}
              className="w-full bg-brand-surface border border-brand-surfaceLight rounded-full pl-4 pr-12 py-3 text-sm text-brand-text focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all placeholder:text-brand-muted/50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-primary text-brand-deep rounded-full hover:bg-brand-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {dir === 'rtl' ? <Send className="w-4 h-4 rotate-180" /> : <Send className="w-4 h-4" />}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
