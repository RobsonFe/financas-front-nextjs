import Profile from "@/app/components/profile"
import React from "react"
import Icones from "../components/icones"

const Greetings: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold ">
        Bem Vindos ao Sistema de Finanças
      </h2>
      <p className="my-4 text-lg text-gray-500">
        O Sistema de Finanças Pessoais desenvolvido com Next.js e Django Rest
        Framework, utilizando a API do Notion para armazenar dados de forma
        eficiente e centralizada.
      </p>
      <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
        A tecnologia tem revolucionado a maneira como gerenciamos nossas
        finanças pessoais. Com o advento de ferramentas digitais e aplicativos
        financeiros, ficou mais fácil acompanhar gastos, planejar orçamentos e
        investir de forma inteligente. Utilizando plataformas como o Notion e
        integrando com APIs robustas, podemos centralizar todas as informações
        financeiras em um só lugar, garantindo maior controle e eficiência na
        gestão do nosso dinheiro.
      </p>
      <p className="my-4 text-lg text-gray-500">
        O projeto foi idealizado por Robson Ferreira, desenvolvedor Full Stack.
        Com o objetivo de criar uma solução simples e eficaz para o
        gerenciamento de finanças pessoais, o Sistema de Finanças Pessoais foi
        desenvolvido com as melhores práticas de programação e design, visando
        proporcionar uma experiência intuitiva e agradável para o usuário.
      </p>
      <a
        href="#"
        className="inline-flex items-center text-lg capitalize text-blue-600 dark:text-blue-500 hover:underline"
      >
        Leia sobre o projeto
        <svg
          className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
      
      <hr className="my-6 border-t border-gray-200 dark:border-gray-800 shadow-sm" />
      <Profile />
      <Icones/>
    </div>
  )
}

export default Greetings
