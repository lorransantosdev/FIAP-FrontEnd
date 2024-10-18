import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// importando o GEMINI
import { GoogleGenerativeAI } from "@google/generative-ai";

// confg o endpoint

const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(cors());

// criando endpoint para receber e enviar mensagens à api do gemini e retornar a mensagem para o front-end

app.post("/sendMessage", async (req, res) => {

    const { messagesGemini } = req.body;
    console.log(messagesGemini[0]);
    // const { GoogleGenerativeAI } = require("@google/generative-ai");

    // Acessando a API do Gemini via sua API Key
    const genAI = new GoogleGenerativeAI("AIzaSyDHRuo1sG7LTnIFVOTDfDAsKJGvwUILdL0");

    // Instanciando o modelo
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Colocando o prompt
    const prompt = messagesGemini[0].parts[0].text;

    // Enviando o prompt para o gemini e ESPERANDO a resposta dele
    const result = await model.generateContent(prompt);
    console.log(result.response.text());

    res.json({
        chat_completion: result.response.text()
    })

});

app.listen(port, () => {
    console.log(`Exemplo de app consumindo http://localhost:${3000}`)
})