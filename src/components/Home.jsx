import "./Home.css";
import "./HomeMobile.css";
import { useEffect, useState } from 'react';
import TextPressure from './TextPressure';

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.5 });

    const sobreMimBox = document.getElementById('sobre-mim-box');
    if (sobreMimBox) {
      observer.observe(sobreMimBox);
    }

    const trajetoriaBox = document.getElementById('trajetoria-box');
    if (trajetoriaBox) {
      observer.observe(trajetoriaBox);
    }

    // Box-shadow e movimento que segue o mouse
    const handleMouseMove = (e) => {
      const element = document.getElementById('foto-sobre-mim-box');
      if (element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        // Calcula distância do mouse ao elemento
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        );
        // Só aplica o efeito se o mouse estiver próximo (300px)
        if (distance < 1200) {
          const deltaX = (e.clientX - centerX) / 40;
          const deltaY = (e.clientY - centerY) / 40;
          // Movement da foto
          const moveX = (e.clientX - centerX) / 50;
          const moveY = (e.clientY - centerY) / 50;
          element.style.boxShadow = `${deltaX}px ${deltaY}px 20px rgba(170, 100, 255, 0.40)`;
          element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          element.style.boxShadow = '0px 0px 15px rgba(170, 100, 255, 0.3)';
          element.style.transform = 'translate(0px, 0px)';
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div id="main">
      {!isMobile ? (
        <>
          <div id="follow">
            <button id="git" onClick={() => window.open("https://github.com/PedroSencio", "_blank")}>
              <img src="/img/github.png" alt="" />
            </button>
            <button id="link" onClick={() => window.open("https://www.linkedin.com/in/pedro-henrique-sencio-3b74a6275/", "_blank")}>
              <img src="/img/linkedin.png" alt="" />
            </button>
          </div>
          <div id="background">
            <video
              src="/videos/background.mp4"
              type="video/mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div id="page-1">
            <div style={{ position: 'relative', height: 'auto', marginBottom: '40px' }}>
              <TextPressure
                text="DEVELOPER"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={350}
              />
            </div>
            <div id="box-btn-page-1">
              <button>Sobre mim</button>
              <button>Trajetória</button>
              <button>Projetos</button>
            </div>
          </div>
          <div id="page-2">
            <div id="sobre-mim-box">
              <h2>Sobre mim</h2>
              <div id="sobre-mim-content">
                <div id="desc-sobre-mim-box">
                  <p>Meu nome é Pedro Henrique Sencio, tenho 20 anos, natural de Ourinhos-SP, atualmente cursando o 6º semestre do curso de Análise e Desenvolvimento de Sistemas na FATEC Ourinhos. Tenho grande interesse pelas áreas de tecnologia, desenvolvimento web e soluções digitais, e hoje atuo como estagiário na área de e-commerce da empresa Auto Peças São Jorge.</p>
                </div>
                <div id="foto-sobre-mim-box"> <img src="/img/foto1.jpeg" alt="" /> </div>
              </div>
            </div>
          </div>
          <div id="page-3">
            <div id="trajetoria-box">
              <h1>Trajetória</h1>
              <div id="content-trajetória">
                <div id="left">
                  <div id="trajetoria-fatec-box">
                    <img src="" alt="" />
                    <h2>Fatec - Ourinhos 2023</h2>
                    <p>Entrei para a Fatec no primeiro semestre de 2023, foi onde eu descobri meu interesse pela área</p>
                  </div>
                  <div id="trajetoria-estagio-box">
                    <img src="" alt="" />
                    <h2>Estágio - Auto Peças São Jorge 2023</h2>
                    <p>Atualmente atuo como estagiário na área de e-commerce, desenvolvendo soluções digitais para a empresa</p>
                  </div>
                </div>
                <div id="line"></div>
                <div id="right">
                  <div id="trajetoria-hackatoon-box">
                    <img src="" alt="" />
                    <h2>4º lugar Hackatoon 2025</h2>
                    <p>Competição na qual cada equipe desenvolve um protótipo para resolução de um problema real de empresas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="page-4">
            <div id="projetos-box">
              <h1>Conhecimentos</h1>
              <div id="content-projetos">
                <div className="projeto-box" id="python-box">
                  <img src="/img/python.png" alt="" />
                  <h2>Python</h2>
                  <p>Experiência em desenvolver projetos como a linguagem principal sendo Python</p>
                </div>
                <div className="projeto-box" id="js-box">
                  <img src="/img/js.png" alt="" />
                  <h2>JavaScript</h2>
                  <p>Experiência em JavaScript para desenvolvimento de interatividade e dinamicidade em aplicações web.</p>
                </div>
                <div className="projeto-box" id="html-box">
                  <img src="/img/html.png" alt="HTML" />
                  <h2>HTML 5</h2>
                  <p>Conhecimento avançado em HTML, com experiência em criação de estruturas semânticas e acessíveis.</p>
                </div>
                <div className="projeto-box" id="css-box">
                  <img src="/img/css.png" alt="" />
                  <h2>CSS</h2>
                  <p>Domínio de CSS para estilização de páginas web, incluindo Flexbox e Grid Layout.</p>
                </div>
                <div className="projeto-box" id="mysql-box">
                  <img src="/img/mysql.png" alt="" />
                  <h2>MySQL</h2>
                  <p>Conhecimento em Banco de dados SQL</p>
                </div>
                <div className="projeto-box" id="php-box">
                  <img src="/img/php.png" alt="" />
                  <h2>PHP</h2>
                  <p>Experiência da linguagem através de projeto em desenvolvimento</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div id="mobile-content">
          <div id="background-mobile">
            <video
              src="/videos/background.mp4"
              type="video/mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div id="mobile-header">
          <div id="mobile-header-title">
          <span id="span-1">D</span>
          <span id="e">e</span>
          <span id="v">v</span>
          <span id="e">e</span>
          <span id="l">l</span>
          <span id="o">o</span>
          <span id="p">p</span>
          <span id="e">e</span>
          <span id="r">r</span>
          </div>
          <div id="btns-mobile-header">
            <button>Sobre mim</button>
            <button>Trajetória</button>
            <button>Projetos</button>
          </div>
          </div>
          <div id="sobre-mim-mobile-box">
            <h2>Sobre mim</h2>
            <div id="sobre-mim-mobile">
              <div id="foto-sobre-mim-box-mobile"> <img src="/img/foto1.jpeg" alt="" /> </div>
              <div id="desc-sobre-mim-box-mobile">
                  <p>Meu nome é Pedro Henrique Sencio, tenho 20 anos, natural de Ourinhos-SP, atualmente cursando o 6º semestre do curso de Análise e Desenvolvimento de Sistemas na FATEC Ourinhos. Tenho grande interesse pelas áreas de tecnologia, desenvolvimento web e soluções digitais, e hoje atuo como estagiário na área de e-commerce da empresa Auto Peças São Jorge.</p>
                </div>
            </div>
          </div>
          <div id="trajetoria-mobile-box">
            <h1>Trajetória</h1>
            <div id="trajetoria-mobile-content">
              <div id="line-mobile"></div>
              <div id="trajetoria-mobile">
              <div id="trajetoria-fatec-box-mobile">
                <img src="" alt="" />
                <h2>Fatec - Ourinhos 2023</h2>
                <p>Entrei para a Fatec no primeiro semestre de 2023, foi onde eu descobri meu interesse pela área</p>
              </div>
              <div id="trajetoria-hackatoon-box-mobile">
                <img src="" alt="" />
                <h2>4º lugar Hackatoon 2025</h2>
                <p>Competição na qual cada equipe desenvolve um protótipo para resolução de um problema real de empresas</p>
              </div>
              <div id="trajetoria-estagio-box-mobile">
                <img src="" alt="" />
                <h2>Estágio - Auto Peças São Jorge 2023</h2>
                <p>Atualmente atuo como estagiário na área de e-commerce, desenvolvendo soluções digitais para a empresa</p>
              </div>
              </div>
          </div>
          </div>
          <div id="conhecimentos-mobile-box">
            <h1>Conhecimentos</h1>
            <div id="conhecimentos-mobile-content">
              <div className="projeto-box" id="python-box-mobile">
                <img src="/img/python.png" alt="" />
                <h2>Python</h2>
                <p>Experiência em desenvolver projetos como a linguagem principal sendo Python</p>
              </div>
              <div className="projeto-box" id="js-box-mobile">
                <img src="/img/js.png" alt="" />
                <h2>JavaScript</h2>
                <p>Experiência em JavaScript para desenvolvimento de interatividade e dinamicidade em aplicações web.</p>
              </div>
              <div className="projeto-box" id="html-box-mobile">
                <img src="/img/html.png" alt="HTML" />
                <h2>HTML 5</h2>
                <p>Conhecimento avançado em HTML, com experiência em criação de estruturas semânticas e acessíveis.</p>
              </div>
              <div className="projeto-box" id="css-box-mobile">
                <img src="/img/css.png" alt="" />
                <h2>CSS</h2>
                <p>Domínio de CSS para estilização de páginas web, incluindo Flexbox e Grid Layout.</p>
              </div>
              <div className="projeto-box" id="mysql-box-mobile">
                <img src="/img/mysql.png" alt="" />
                <h2>MySQL</h2>
                <p>Conhecimento em Banco de dados SQL</p>
              </div>
              <div className="projeto-box" id="php-box-mobile">
                <img src="/img/php.png" alt="" />
                <h2>PHP</h2>
                <p>Experiência da linguagem através de projeto em desenvolvimento</p>
              </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}