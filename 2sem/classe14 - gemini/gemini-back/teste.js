// const { GoogleGenerativeAI } = require("@google/generative-ai");

// importando o GEMINI
import { GoogleGenerativeAI } from "@google/generative-ai";

// acessando a API do GEMINI via sua API KEY
const genAI = new GoogleGenerativeAI("AIAIzaSyDHRuo1sG7LTnIFVOTDfDAsKJGvwUILdL0");

// instanciando o modelo
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// prompt
const prompt = messagesGemini[0];

// espera o modelo criar content da resposta que é o prompt
const result = await model.generateContent(prompt);

// caso não tenha 
console.log(result.response.text());