import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Sobre mim
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4E03AQFQPSN1nYxgQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723748247648?e=1752105600&v=beta&t=MO4zNguDO5sKLiBc4DddZqvwaEQ9OuWiFXINjn3u89I" 
                alt="Professional portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
             Sou um desenvolvedor em formação, apaixonado por tecnologia e por resolver problemas de forma prática. Minha trajetória começou com o suporte técnico, onde aprendi o valor de entender o usuário e oferecer soluções eficientes. Desde então, venho me aprofundando no desenvolvimento de software com foco no back-end, sempre buscando evoluir por meio de projetos, estudos e experiências reais.
            </p>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            Atualmente, atuo como Analista de TI, lidando com inventário, manutenção de máquinas, suporte ao usuário e ajustes pontuais em códigos. Tenho familiaridade com linguagens como JavaScript e Python, versionamento com Git, e ferramentas como Linux e VS Code. Minha formação técnica e os cursos complementares (como Ada Tech, Geração Tech e Vai na Web) reforçam meu compromisso com o aprendizado contínuo e a aplicação prática do conhecimento.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Quando não estou estudando ou trabalhando com tecnologia, estou me aprofundando na cultura geek, assistindo vídeos educativos, jogando FPS (especialmente Call of Duty) ou escutando música. Gosto de participar de fóruns e grupos de estudo, porque acredito que a troca de conhecimento é uma das melhores formas de crescer na carreira e como pessoa.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Dev Philosophy</h3>
                <p className="text-gray-700 dark:text-gray-300">
                Simplicidade com propósito. Acredito que o melhor código é aquele que cumpre seu papel com clareza, sem complicações desnecessárias.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Minha Filosofia de Desenvolvimento</h3>
                <p className="text-gray-700 dark:text-gray-300">
                Menos é mais. Busco soluções funcionais, objetivas e que realmente resolvam o problema, sem adicionar camadas de complexidade desnecessária.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;