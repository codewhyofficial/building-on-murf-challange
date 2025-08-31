# Multilingual Voice Mobile Assistant 🎤📱

A sophisticated AI-powered multilingual voice assistant for mobile phone sales, featuring real-time speech-to-text, multilingual response generation, and text-to-speech capabilities.

![Python](https://img.shields.io/badge/Python-3.9%2B-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.104%2B-green)
![React](https://img.shields.io/badge/React-18%2B-blue)
![Pinecone](https://img.shields.io/badge/Pinecone-VectorDB-orange)
![Multilingual](https://img.shields.io/badge/Multilingual-15%2B_Languages-yellow)

## 🌟 Features

### 🗣️ Voice Interaction
- **Real-time Speech-to-Text** in 15+ languages
- **Multilingual Text-to-Speech** output with Murf AI integration
- **Voice-controlled mobile shopping experience**
- **Browser-based voice recognition**

### 🌍 Multilingual Support
- **Hindi (हिंदी)** - hi-IN-kabir voice
- **Korean (한국어)** - ko-KR-gyeong voice  
- **Japanese (日本語)** - ja-JP-kenji voice
- **Chinese (中文)** - zh-CN-tao voice
- **Spanish (Español)** - es-ES-elvira voice
- **10+ additional languages** with native voice outputs

### 🤖 AI Capabilities
- **Gemini AI-powered** conversational agent
- **Smart product search** with Pinecone vector database
- **Personalized deal generation** based on conversation context
- **Natural language understanding** for mobile sales

### 🛍️ E-commerce Features
- **Mobile product catalog** with detailed specifications
- **Intelligent product recommendations**
- **Dynamic discount generation**
- **Visual product displays** with images

### Project Structure
multilingual-voice-assistant/
├── backend/
│   ├── agents/                 # AI agent workflows
│   ├── tools/                  # LangChain tools
│   ├── vector_store/           # Pinecone integration
│   ├── schemas/                # Pydantic models
│   ├── main.py                 # FastAPI application
│   ├── config.py               # Configuration
│   └── requirements.txt        # Python dependencies
├── frontend/
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── utils/              # Utility functions
│   │   ├── App.jsx             # Main App component
│   │   └── main.jsx            # Entry point
│   ├── package.json
│   └── vite.config.js
├── data/                       # Sample data
└── README.md

