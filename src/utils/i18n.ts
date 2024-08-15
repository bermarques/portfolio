import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
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
              education: "my education background",
              email: "send an email to me",
              gui: "go to my portfolio in GUI",
              help: "check available commands",
              history: "view command history",
              projects: "view projects that I've coded",
              pwd: "print current working directory",
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
              education: "minha formação acadêmica",
              email: "me envie um e-mail",
              gui: "ir para o meu portfolio",
              help: "ver comandos disponíveis",
              history: "ver histórico de comandos",
              projects: "ver projetos que desenvolvi",
              pwd: "mostra o diretório atual",
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
    },
  });

export default i18n;
