import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    let valid = true;
    const errors = {
      user_name: '',
      user_email: '',
      subject: '',
      message: ''
    };

    if (!formData.user_name.trim()) {
      errors.user_name = 'Nome é obrigatório';
      valid = false;
    }

    if (!formData.user_email.trim()) {
      errors.user_email = 'Email é obrigatório';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.user_email)) {
      errors.user_email = 'Email inválido';
      valid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Assunto é obrigatório';
      valid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Mensagem é obrigatória';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpa o erro quando o usuário começa a digitar
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm() && formRef.current) {
      setIsSubmitting(true);
      
      try {
        // Log das informações que serão enviadas
        console.log('Tentando enviar email com:', {
          form: formRef.current,
          service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
          template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          public_key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? 'Configurado' : 'Não configurado'
        });

        // Criar objeto com os dados do formulário
        const templateParams = {
          from_name: formData.user_name,
          from_email: formData.user_email,
          subject: formData.subject,
          message: formData.message,
        };

        // Tentar enviar usando send em vez de sendForm
        const result = await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        console.log('Email enviado com sucesso:', result);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } catch (error: any) {
        console.error('Erro detalhado ao enviar email:', {
          error: error,
          message: error.message,
          text: error.text,
          name: error.name,
          stack: error.stack
        });
        setIsSubmitting(false);
        alert(`Erro ao enviar mensagem: ${error.message || 'Tente novamente em alguns instantes.'}`);
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
        Entre em contato
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Tem um projeto em mente ou quer discutir possíveis oportunidades? Adoraria ouvir você.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Informações de contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail size={20} className="text-gray-800 dark:text-gray-200 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">romuloodorico702@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone size={20} className="text-gray-800 dark:text-gray-200 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Telefone</h4>
                    <p className="text-gray-600 dark:text-gray-300">+55 (85)98749-3033</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin size={20} className="text-gray-800 dark:text-gray-200 mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Localização</h4>
                    <p className="text-gray-600 dark:text-gray-300">Fortaleza, CE</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Vamos nos conectar
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Siga-me nas redes sociais e fique por dentro das novidades!
              </p>
              <div className="flex space-x-4">
                <a href="www.linkedin.com/in/rômulo-odorico-752420271"target='_blank' className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" target='_blank' className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/isrmulo_/  " target='_blank' className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://github.com/isrmulo" target='_blank' className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    formErrors.user_name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                  placeholder="Seu Nome"
                />
                {formErrors.user_name && <p className="mt-1 text-sm text-red-500">{formErrors.user_name}</p>}
              </div>
              
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    formErrors.user_email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                  placeholder="Seu Email"
                />
                {formErrors.user_email && <p className="mt-1 text-sm text-red-500">{formErrors.user_email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    formErrors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                  placeholder="Assunto"
                />
                {formErrors.subject && <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 border ${
                    formErrors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                  placeholder="Sua Mensagem"
                ></textarea>
                {formErrors.message && <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white dark:text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviado...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send size={18} className="mr-2" />
                    Enviando Mensagem
                  </span>
                )}
              </button>
              
              {submitSuccess && (
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md">
                  Obrigado! Sua mensagem foi enviada com sucesso.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;