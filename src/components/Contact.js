import React, { useState } from 'react';

const Contact = React.forwardRef((props, ref) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Nom: ${name}\nEmail: ${email}\nMessage: ${message}`);        
    };

    return (
        <div ref={ref} className="min-h-screen flex flex-col items-center justify-center bg-white bg-opacity-70 backdrop-blur rounded-xl shadow-xl p-4">
            <p className="text-center text-md mb-6 text-gray-800 font-bold">
                Veuillez remplir le formulaire ci-dessous pour me laisser un message.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md w-full mt-4 p-6 border rounded-2xl shadow-2xl bg-white bg-opacity-80 backdrop-blur-sm"> 
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Nom:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Envoyer
                </button>
            </form>
        </div>
    );
});

export default Contact;
