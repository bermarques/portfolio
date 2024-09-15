import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          title: "Welcome to my portfolio.",
          subTitle: "For a list of available commands, type ",
          about: {
            introduction: "Hi, my name is",
            text1: "I'm a",
            role: "full-stack developer",
            text2: "based in Brazil",
            description1: "I am passionate about writing codes and",
            description2:
              "developing web applications to solve real-life challenges.",
          },
          experience: {
            intro: "Here is the list of jobs I had!",
            title1: "Front-end Developer | 03/2022 - 08/2024",
            desc1:
              "Responsible for development and maintenance of main application in React",
            title2: "Full-stack Developer | 06/2021 - 01/2022",
            desc2: "Administered the design and start of application",
            title3: "Front-end Developer | 03/2021 - 06/2021",
            desc3: "Maintained a MVC system using C# with Razor",
          },
          education: {
            intro: "Here is my education background!",
            title1: "Software Development",
            desc1: "Brigham Young University Idaho | 2023 - 2027",
          },
          help: {
            tab1: "Tab ou Ctrl + i",
            tab2: "completa o comando automaticamente",
            up1: "Seta pra cima",
            up2: "navega até o comando anterior",
            ctrl1: "Ctrl + l",
            ctrl2: "limpa o terminal",
            cmd: {
              about: "about Bernardo Marques",
              clear: "clear the terminal",
              echo: "print out anything",
              experience: "my professional experience",
              education: "my education background",
              email: "send an email to me",
              gui: "go to my portfolio in GUI",
              help: "check available commands",
              history: "view command history",
              projects: "view projects that I've coded",
              pwd: "print current working directory",
              resume: "download my resume",
              socials: "check out my social accounts",
              themes: "check available themes",
              welcome: "display hero section",
              whoami: "about current user",
            },
          },
          projects: {
            quote: "“Talk is cheap. Show me the code”? I got you.",
            text: "Here are some of my projects you shouldn't miss",
          },
          socials: {
            intro: "Here are my social links",
          },
          usage: "Usage",
          eg: "eg",
        },
      },
      pt: {
        translation: {
          title: "Bem-vindo ao meu portfolio.",
          subTitle: "Para uma lista de comandos disponíveis, digite ",
          about: {
            introduction: "Olá, me chamo",
            text1: "Sou um",
            role: "desenvolvedor full-stack,",
            text2: "e moro no Rio Grande do Sul, Brasil.",
            description1: "Sou apaixonado por escrever códigos e",
            description2:
              "desenvolver aplicações web que resolvem problemas reais.",
          },
          experience: {
            intro: "Aqui está um resumo da minha experiência!",
            title1: "Desenvolvedor Front-end | 03/2022 - 08/2024",
            desc1:
              "Responsável pelo desenvolvimento e manutenção da aplicação principal em React",
            title2: "Desenvolvedor full stack | 06/2021 - 01/2022",
            desc2: "Dei início a primeira versão da aplicação",
            title3: "Desenvolvedor front-end | 03/2021 - 06/2021",
            desc3: "Manutenção de um sistema MVC usando C# com Razor",
          },
          education: {
            intro: "Aqui está minha formação acadêmica!",
            title1: "Software Development",
            desc1: "Brigham Young University Idaho | 2023 - 2027",
          },
          help: {
            tab1: "Tab ou Ctrl + i",
            tab2: "completa o comando automaticamente",
            up1: "Seta pra cima",
            up2: "navega até o comando anterior",
            ctrl1: "Ctrl + l",
            ctrl2: "limpa o terminal",
            cmd: {
              about: "sobre Bernardo Marques",
              clear: "limpa o terminal",
              echo: "escreve qualquer coisa",
              experience: "resumo da minha experiência profissional",
              education: "minha formação acadêmica",
              email: "me envie um e-mail",
              gui: "ir para o meu portfolio",
              help: "ver comandos disponíveis",
              history: "ver histórico de comandos",
              projects: "ver projetos que desenvolvi",
              pwd: "mostra o diretório atual",
              resume: "baixar meu currículo",
              socials: "ver minhas redes sociais",
              themes: "ver temas disponíveis",
              welcome: "mostra a mensagem de boas-vindas",
              whoami: "sobre o usuário atual",
            },
          },
          projects: {
            quote: "“Falar é fácil. Me mostra o código.”? Deixa comigo.",
            text: "Aqui estão alguns dos meus projetos que você não pode deixar de ver",
          },
          socials: {
            intro: "Aqui estão minhas redes sociais",
          },
          usage: "Uso",
          eg: "exemplo",
        },
      },
      es: {
        translation: {
          title: "Bienvenido a mi portfolio.",
          subTitle: "Para una lista de comandos disponibles, escribe ",
          about: {
            introduction: "Hola, me llamo",
            text1: "Soy un",
            role: "desarrollador full-stack,",
            text2: "y vivo en Brasil.",
            description1: "Me apasiona escribir códigos y",
            description2:
              "desarrollar aplicaciones web que resuelvan desafíos reales.",
          },
          experience: {
            intro: "¡Aquí está la lista de trabajos que he tenido!",
            title1: "Desarrollador Front-end | 03/2022 - 08/2024",
            desc1:
              "Responsable del desarrollo y mantenimiento de la aplicación principal en React",
            title2: "Desarrollador Full-stack | 06/2021 - 01/2022",
            desc2: "Administré el design e inicio de la aplicación",
            title3: "Desarrollador Front-end | 03/2021 - 06/2021",
            desc3: "Mantuve un sistema MVC usando C# con Razor",
          },
          education: {
            intro: "¡Aquí está mi formación académica!",
            title1: "Software Development",
            desc1: "Brigham Young University Idaho | 2023 - 2027",
          },
          help: {
            tab1: "Tab o Ctrl + i",
            tab2: "completa el comando automáticamente",
            up1: "Flecha hacia arriba",
            up2: "navega al comando anterior",
            ctrl1: "Ctrl + l",
            ctrl2: "limpia el terminal",
            cmd: {
              about: "sobre Bernardo Marques",
              clear: "limpiar el terminal",
              echo: "imprimir cualquier cosa",
              experience: "resumo de mi experiencia profesional",
              education: "mi formación académica",
              email: "envíame un correo electrónico",
              gui: "ir a mi portafolio en GUI",
              help: "ver comandos disponibles",
              history: "ver historial de comandos",
              projects: "ver proyectos que he desarrollado",
              pwd: "mostrar el directorio actual",
              resume: "descargar mi currículum",
              socials: "ver mis redes sociales",
              themes: "ver temas disponibles",
              welcome: "mostrar mensaje de bienvenida",
              whoami: "sobre el usuario actual",
            },
          },
          projects: {
            quote: "“Hablar es barato. Muéstrame el código.” Lo tengo.",
            text: "Aquí están algunos de mis proyectos que no debes perderte.",
          },
          socials: {
            intro: "Aquí están mis redes sociales",
          },
          usage: "Uso",
          eg: "ejemplo",
        },
      },
    },
  });

export default i18n;
