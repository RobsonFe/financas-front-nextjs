import React from "react";
import { Ghost } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-white dark:bg-black">
      <div className="relative">
        <Ghost className="w-32 h-32 text-gray-900 dark:text-gray-100 animate-bounce" />
        <div className="absolute -bottom-4 w-20 h-1 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent blur-sm" />
      </div>
	<p className="mt-12 text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
	  Página não encontrada
	</p>
	<p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
	  Esta página parece ter se perdida
	</p>
      <div className="mt-10 group cursor-pointer inline-flex items-center px-6 py-3 rounded-full bg-gray-900 dark:bg-gray-100 transition-transform hover:scale-105">
        <span className="text-sm font-medium text-white dark:text-black">
          Volte para a página inicial
        </span>
      </div>
    </div>
  );
};

export default NotFound;
