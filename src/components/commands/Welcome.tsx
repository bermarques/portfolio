import { useTranslation } from "react-i18next";
import {
  Cmd,
  HeroContainer,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  const { t } = useTranslation();

  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
 ______   _______  _______  _        _______  _______  ______   _______ 
(  ___ \\ (  ____ \\(  ____ )( (    /|(  ___  )(  ____ )(  __  \\ (  ___  )
| (   ) )| (    \\/| (    )||  \\  ( || (   ) || (    )|| (  \\  )| (   ) |
| (__/ / | (__    | (____)||   \\ | || (___) || (____)|| |   ) || |   | |
|  __ (  |  __)   |     __)| (\\ \\) ||  ___  ||     __)| |   | || |   | |
| (  \\ \\ | (      | (\\ (   | | \\   || (   ) || (\\ (   | |   ) || |   | |
| )___) )| (____/\\| ) \\ \\__| )  \\  || )   ( || ) \\ \\__| (__/  )| (___) |
|/ \\___/ (_______/|/   \\__/|/    )_)|/     \\||/   \\__/(______/ (_______)
                                                                        
            `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
 ____  _____ ____  _      ____  ____  ____  ____ 
/  __\\/  __//  __\\/ \\  /|/  _ \\/  __\\/  _ \\/  _ \
| | //|  \\  |  \\/|| |\\ ||| / \\||  \\/|| | \\|| / \\|
| |_\\|  /_ |    /| | \\||| |-|||    /| |_/|| \\_/|
\\____/\\____\\_/\\_\\_/  \\|\\_/ \\|\\_/\\_\\____/\\____/
                                                 
   
            `}
          </PreNameMobile>
        </PreWrapper>
        <div>{t("title")}</div>
        <Seperator>----</Seperator>
        <div>
          {t("subTitle")} `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                         ,##,,eew,
                       ,##############C
                    a###############@##
                   7####^\`^"7W7^"@####
                   @#@b\`         ^@#@^
                    ##^,,,,   ,,,,^#^
                   ,,@######"#######=
                    .''555"\` '5555b|
                    T"@  ,,,^,mg,@,*
                       %p||\`~~'.#\`
                        ^Wp  ,#T
                       :b''@@b^}
                    ,^     \` 'b 3-
                .<\` 'p   ^v   #   b   *.
              {      }   #"GpGb   [
              C      3 * @#######Nl      \`
             '            ^@##b     ($    !
           `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
