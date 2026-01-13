
import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';
import ReactMarkdown from 'https://esm.sh/react-markdown@^9.0.1';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Welcome to **Enzenius Global**. \n\nI am your dedicated counselor assistant. How can I help you navigate your international education path today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    const aiMsg = await getAIResponse(userMsg);
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'ai', text: aiMsg || 'I am sorry, I could not process your request at this moment. Please reach out to our team directly.' }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Bubble Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary rounded-full shadow-2xl flex items-center justify-center text-white text-2xl hover:bg-brandCTA transition-all hover:scale-110 active:scale-95 border-4 border-white"
        aria-label="Toggle AI Chat"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-headset animate-pulse'}`}></i>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[90vw] md:w-[400px] h-[600px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex flex-col border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-primary p-6 text-white flex items-center justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brandCTA/10 blur-2xl rounded-full"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20">
                <i className="fas fa-university text-xl"></i>
              </div>
              <div>
                <p className="font-black uppercase tracking-tighter text-lg leading-none">ENZENIUS AI</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 bg-brandGrowth rounded-full animate-pulse"></span>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-blue-200">Global Counselor</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors relative z-10">
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm border ${
                  msg.role === 'user' 
                    ? 'bg-brandRoyal text-white border-brandRoyal rounded-tr-none' 
                    : 'bg-white text-slate-700 border-slate-100 rounded-tl-none'
                }`}>
                  <div className={`prose prose-sm max-w-none ${msg.role === 'user' ? 'text-white' : 'text-slate-600'}`}>
                    <ReactMarkdown 
                      components={{
                        p: ({node, ...props}) => <p className="mb-2 last:mb-0 leading-relaxed" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc pl-4 mb-2" {...props} />,
                        li: ({node, ...props}) => <li className="mb-1" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-sm font-black uppercase tracking-tight mb-2 mt-4 text-primary" {...props} />,
                        strong: ({node, ...props}) => <strong className="font-black" {...props} />
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 rounded-tl-none flex gap-1.5">
                  <div className="w-2 h-2 bg-slate-200 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-200 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-slate-200 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-6 bg-white border-t border-slate-100">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about universities or visas..."
                className="w-full bg-slate-100 rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all pr-14 border border-transparent focus:border-slate-200"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className="absolute right-2 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-brandCTA transition-all disabled:opacity-50 disabled:scale-100 active:scale-90"
              >
                <i className="fas fa-paper-plane text-xs"></i>
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 font-bold uppercase mt-4 tracking-widest">
              Powered by Enzenius Global Intelligence
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
