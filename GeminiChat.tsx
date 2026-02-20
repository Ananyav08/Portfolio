import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'model', text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory, isTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isTyping) return;

    const userMessage = message;
    setMessage('');
    setChatHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          { role: 'user', parts: [{ text: `You are an AI assistant for Ananya Vishwakarma's portfolio. 
          Ananya is a Graphic Designer and Front-end Web Developer. 
          She likes overthinking in design, lives in Ghaziabad, and studies B.Tech. 
          Answer this user query as if you are Ananya's portfolio agent: ${userMessage}` }] }
        ],
        config: {
          systemInstruction: "You are a professional, creative, and slightly witty portfolio assistant. Keep responses brief and elegant.",
          temperature: 0.7,
        }
      });

      const aiResponse = response.text || "I'm having a little trouble connecting right now, but I can tell you that Ananya's work is quite impressive!";
      setChatHistory(prev => [...prev, { role: 'model', text: aiResponse }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setChatHistory(prev => [...prev, { role: 'model', text: "Sorry, I couldn't reach the creative brain center. Try again later!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-black/5 animate-fade-in-up">
          <div className="bg-[#1A1A1A] p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-white text-xs font-bold tracking-widest uppercase">Portfolio AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-[#E63946] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto bg-[#F9F9F9] space-y-4">
            {chatHistory.length === 0 && (
              <div className="text-center py-10">
                <p className="text-xs text-[#777777] font-medium uppercase tracking-widest">Ask me anything about Ananya's work or design philosophy.</p>
              </div>
            )}
            {chatHistory.map((chat, idx) => (
              <div key={idx} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-sm ${
                  chat.role === 'user' 
                    ? 'bg-[#E63946] text-white rounded-tl-xl rounded-tr-xl rounded-bl-xl' 
                    : 'bg-white text-[#1A1A1A] rounded-tl-xl rounded-tr-xl rounded-br-xl shadow-sm border border-black/5'
                }`}>
                  {chat.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-black/5 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-[#777777] rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-[#777777] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-[#777777] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-black/5 flex gap-2">
            <input 
              type="text" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask away..."
              className="flex-grow bg-[#F2F2F2] rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#E63946]"
            />
            <button type="submit" className="w-10 h-10 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center hover:bg-[#E63946] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-[#1A1A1A] text-white rounded-full shadow-2xl flex items-center justify-center group hover:bg-[#E63946] transition-all duration-300 hover:scale-110"
        >
          <svg className="group-hover:rotate-12 transition-transform duration-300" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="absolute -top-2 -right-2 bg-[#E63946] text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-white">AI</span>
        </button>
      )}
    </div>
  );
};

export default GeminiChat;