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

## 🙏 Acknowledgments

This project would not have been possible without the following amazing technologies and services:

### 🤖 AI & Machine Learning
- **[Google Gemini AI](https://ai.google.dev/)** - For providing powerful multilingual language capabilities and intelligent conversational AI
- **[Murf AI](https://murf.ai/)** - For high-quality, natural-sounding text-to-speech services across multiple languages
- **[Pinecone](https://www.pinecone.io/)** - For robust vector database infrastructure enabling intelligent product search

### 🛠️ Frameworks & Libraries
- **[LangChain](https://www.langchain.com/)** - For the comprehensive AI agent framework that powers our conversational workflows
- **[FastAPI](https://fastapi.tiangolo.com/)** - For the high-performance, modern web framework that makes our API development efficient
- **[React](https://reactjs.org/)** - For the declarative and component-based frontend library
- **[Vite](https://vitejs.dev/)** - For the fast build tool and development server

### 🗣️ Speech Technologies
- **[Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)** - For browser-based speech recognition capabilities
- **[Google Cloud Speech-to-Text](https://cloud.google.com/speech-to-text)** - For accurate speech recognition technology

### 📊 Data & Infrastructure
- **[Pydantic](https://pydantic-docs.helpmanual.io/)** - For data validation and settings management using Python type annotations
- **[Uvicorn](https://www.uvicorn.org/)** - For the lightning-fast ASGI server implementation
- **[Hugging Face](https://huggingface.co/)** - For embeddings models and transformer resources



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MURF_API_KEY`

`GOOGLE_API_KEY`

`PINECONE_API_KEY`

`MURF_VOICE_ID` (optional - defaults to en-US-natalie)

`PINECONE_INDEX_NAME` (optional - defaults to mobile-phones)


## Installation


### Clone the repository
```bash
git clone https://github.com/codewhyofficial/building-on-murf-challenge.git
cd building-on-murf-challenge
```

### Backend setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### Frontend setup
```bash
cd ../frontend
npm install
```
