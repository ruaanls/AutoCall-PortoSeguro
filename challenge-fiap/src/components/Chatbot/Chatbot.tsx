"use client";

import React, { useState } from 'react';
/*import axios from 'axios';*/
import { FaComments, FaTimes } from 'react-icons/fa'; 

const Chatbot: React.FC = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessages((prev) => [...prev, { user: input, bot: '' }]);

        /*try {
            const response = await axios.post('/api/chat', { message: input });
            const botResponse = response.data.response;

            setMessages((prev) =>
                prev.map((msg, index) =>
                    index === prev.length - 1 ? { user: msg.user, bot: botResponse } : msg
                )
            );
        } catch (error) {
            console.error('Erro ao enviar a mensagem:', error);
        }*/

        setInput('');
    };

    return (
        <div className="chatbot-container">
            {/* Ícone do Chatbot */}
            {!isOpen && (
                <button 
                    className="chatbot-icon" 
                    onClick={() => setIsOpen(true)}
                    aria-label="Chatbot"
                >
                    <FaComments size={24} />
                </button>
            )}

            {/* Caixa de Chat */}
            {isOpen && (
                <div className="chatbot-box">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-lg">AutoCall</h3>
                        <button 
                            onClick={() => setIsOpen(false)} 
                            aria-label="Fechar Chatbot"
                            className="chatbot-close"
                        >
                            <FaTimes size={20} />
                        </button>
                    </div>
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className="chatbot-message">
                                <div className="user-message">{msg.user}</div>
                                <div className="bot-message">{msg.bot}</div>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit} className="chatbot-form">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="chatbot-input"
                            placeholder="Digite sua mensagem..."
                        />
                        <button type="submit" className="chatbot-send">Enviar</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
