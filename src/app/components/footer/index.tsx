import React from "react"

const Footer: React.FC = () => {
  const anoAtual = new Date().getFullYear()

  return (
    <footer className="w-full">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://github.com/RobsonFe"
            target="_blank"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            {/* <!-- <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> --> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Fox Hound™
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium ">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Politica de Privacidade
              </a>
            </li>
            
            <li>
              <a
                href="mailto:robson-ferreiradasilva@hotmail.com"
                target="_blank"
                className="hover:underline"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="text-sm flex justify-center items-center flex-col  sm:text-center ">
          © {anoAtual} - Developed by {" Robson Ferreira "}
          <a
            href="https://github.com/RobsonFe"
            target="_blank"
            className="hover:underline"
          >
            Fox Hound™
          </a>
          All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
