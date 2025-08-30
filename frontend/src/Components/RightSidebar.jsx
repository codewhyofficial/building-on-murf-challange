import { useState, useEffect, useRef } from 'react';
import { ChatHistory } from './ChatHistory';
import { ChatInput } from './ChatInput';
import { Square, Globe, Mic, MicOff, Send } from 'lucide-react';

// Language options with their codes and display names
const LANGUAGE_OPTIONS = [
  { code: 'en-US', name: 'English' },
  { code: 'es-ES', name: 'Spanish' },
  { code: 'fr-FR', name: 'French' },
  { code: 'de-DE', name: 'German' },
  { code: 'it-IT', name: 'Italian' },
  { code: 'pt-BR', name: 'Portuguese' },
  { code: 'ja-JP', name: 'Japanese' },
  { code: 'ko-KR', name: 'Korean' },
  { code: 'zh-CN', name: 'Chinese' },
  { code: 'hi-IN', name: 'Hindi' },
  { code: 'ar-SA', name: 'Arabic' },
];

export function RightSidebar({ history, onSendMessage, isLoading, isSpeaking, onStopSpeech }) {
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
  
  // Update the send message function to include language
  const handleSendMessage = (message) => {
    onSendMessage(message, selectedLanguage);
  };

  return (
    <aside className="w-full lg:w-[400px] flex-shrink-0 bg-white p-4 flex flex-col h-full border-l border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Sales Assistant</h2>
        <LanguageSelector 
          selectedLanguage={selectedLanguage} 
          onLanguageChange={setSelectedLanguage} 
        />
      </div>
      
      <ChatHistory history={history} isLoading={isLoading} />
      
      <div>
        {isSpeaking && (
          <div className="flex justify-center items-center gap-3 mb-3">
            <img 
              src="/audio.gif" 
              alt="Audio playing indicator"
              className="h-6 w-auto" 
            />
            <button
              onClick={onStopSpeech}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-red-500"
              aria-label="Stop speech"
            >
              <Square size={12} fill="white" /> 
              <span className="animate-pulse">Stop</span> 
            </button>
          </div>
        )}
        
        <ChatInput 
          onSendMessage={handleSendMessage} 
          disabled={isLoading} 
          selectedLanguage={selectedLanguage}
        />
      </div>
    </aside>
  );
}

// Language selector component
function LanguageSelector({ selectedLanguage, onLanguageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedLang = LANGUAGE_OPTIONS.find(lang => lang.code === selectedLanguage) || LANGUAGE_OPTIONS[0];
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
      >
        <Globe size={16} />
        <span>{selectedLang.name}</span>
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-xl z-20">
            {LANGUAGE_OPTIONS.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  selectedLanguage === lang.code 
                    ? 'bg-indigo-100 text-indigo-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
