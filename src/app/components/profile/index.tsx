import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="bg-transparent grid place-items-center text-base p-4 font-poppins">
      <article className="flex flex-wrap rounded-3xl bg-[#3333] cursor-pointer overflow-hidden text-text max-w-[70vw] min-w-[20rem] min-h-[15rem] hover:shadow-lg">
        <div className="flex-1 min-w-[15rem]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://i.imgur.com/thWBSJX.jpg"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-[3_1_22rem] flex flex-col justify-start p-4">
          <h2 className="text-[clamp(1.3rem,2.5vw,1.8rem)] font-bold mb-[clamp(0.35rem,2vw,0.55rem)]">
            Robson Ferreira
          </h2>
          <p className="text-[clamp(1rem,1.75vw,1.1rem)] font-normal my-1">
            Desenvolvedor de Software na{" "}
            <a
              href="https://www.ativosprecatorios.com.br/"
              target="_blank"
              title="Ativos Precatorios"
              className="text-text"
            >
              Ativos Precatórios
            </a>
          </p>
          <p className="text-[clamp(1rem,1.75vw,1.1rem)] font-normal my-1">
            Tecnologias:
          </p>
          <ul className="flex gap-2 justify-center flex-wrap list-none py-3">
            <a
              href="https://docs.spring.io/spring-boot/index.html"
              target="_blank"
              className="rounded-lg px-2 py-1 text-sm bg-chip-bg transition-all border border-border font-medium hover:underline"
            >
              Spring Boot
            </a>
            <a
              href="https://nestjs.com/"
              target="_blank"
              className="rounded-lg px-2 py-1 text-sm bg-chip-bg transition-all border border-border font-medium hover:underline"
            >
              NestJs
            </a>
            <a
              href="https://www.djangoproject.com/"
              target="_blank"
              className="rounded-lg px-2 py-1 text-sm bg-chip-bg transition-all border border-border font-medium hover:underline"
            >
              Django
            </a>
          </ul>
          <div className="border-t border-gray-500 pt-4 gap-3 flex flex-wrap mt-auto">
            <a
              href="mailto:robson-ferreiradasilva@hotmail.com"
              target="_blank"
              className="bg-primary text-text-dark px-3 py-2 no-underline rounded-lg outline-none border-none text-lg font-bold flex justify-center items-center whitespace-nowrap flex-1 min-w-[15rem] max-w-full hover:underline"
            >
              Entre em Contato
            </a>
            <a
              href="https://github.com/RobsonFe"
              target="_blank"
              className="bg-transparent text-text border border-text px-3 py-2 rounded-lg text-lg font-bold flex justify-center items-center whitespace-nowrap flex-1 min-w-[5rem] hover:underline"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Profile;