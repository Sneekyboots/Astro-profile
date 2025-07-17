import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <div
      className="minecraft-panel transform-gpu p-6"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <HeroAvatar
        title={
          <>
            <div className="flex items-center">
              <img
                src="/assets/images/minecraft-sword.png"
                alt="Minecraft Sword"
                className="mr-3 h-10 w-10"
                style={{ imageRendering: 'pixelated' }}
              />
              <span className="minecraft-font text-2xl">Welcome to my </span>
              <GradientText>
                <span className="minecraft-font text-2xl">Minecraft World</span>
              </GradientText>
            </div>
            <div className="minecraft-font mt-4 text-xl">
              I'm <span className="text-green-400">Sriranjini KS</span>{' '}
              <span className="animate-pulse">_</span>
            </div>
            <div className="minecraft-font mt-2 text-lg text-yellow-300">
              SOFTWARE DEVELOPER
            </div>
          </>
        }
        description={
          <>
            <div className="minecraft-panel minecraft-card my-4 p-4">
              {/* Contact Info */}
              <div className="mb-4 grid grid-cols-1 gap-2 md:grid-cols-2">
                <div className="flex items-center">
                  <span className="mr-2 text-green-500">📱</span>
                  <span className="text-sm">+91 8197867200</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-green-500">📧</span>
                  <span className="text-sm">sneekyboots122@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-green-500">📍</span>
                  <span className="text-sm">Marthahalli, Bangalore</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-green-500">🔗</span>
                  <a
                    href="https://github.com/Sneekyboots"
                    className="text-sm text-cyan-400 hover:text-cyan-300"
                  >
                    GitHub Portfolio
                  </a>
                </div>
              </div>

              {/* Skills Overview */}
              <div className="mb-4">
                <p className="mb-2">
                  <span className="minecraft-font text-yellow-300">
                    CORE SKILLS:
                  </span>{' '}
                  Rust, TypeScript, Python, AWS
                </p>
                <div className="minecraft-experience-bar mb-3 mt-2">
                  <div className="minecraft-experience-bar-fill"></div>
                </div>
                <p className="mb-2">
                  <span className="minecraft-font text-yellow-300">
                    SPECIALTIES:
                  </span>{' '}
                  Microservices, Blockchain, Game Dev
                </p>
                <div className="minecraft-experience-bar mb-3 mt-2">
                  <div className="minecraft-experience-bar-fill"></div>
                </div>
              </div>

              <p className="text-gray-200">
                To build scalable Rust-based microservices, develop secure
                blockchain applications, and craft performant game engines.
                Passionate about cloud technologies and full-stack development.
              </p>
            </div>
          </>
        }
        avatar={
          <div
            className="minecraft-item-frame p-2"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateY(-5deg)',
            }}
          >
            <img
              className="minecraft-card h-80 w-64"
              src="/assets/images/Sriranjini2025.jpeg"
              alt="Sriranjini KS - Avatar image"
              loading="lazy"
              style={{
                transform: 'translateZ(10px)',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </div>
        }
        socialButtons={
          <div className="flex space-x-3">
            <a
              href="https://www.linkedin.com/in/sriranjini-ks"
              className="minecraft-button transition-transform hover:scale-110"
            >
              <HeroSocial
                src="/assets/images/linkedin-icon.png"
                alt="Linkedin icon"
              />
            </a>
            <a
              href="https://github.com/Sneekyboots"
              className="minecraft-button transition-transform hover:scale-110"
            >
              <HeroSocial
                src="/assets/images/github-icon.png"
                alt="GitHub icon"
              />
            </a>
            <a
              href="https://twitter.com/sriranjini_ks"
              className="minecraft-button transition-transform hover:scale-110"
            >
              <HeroSocial
                src="/assets/images/twitter-icon.png"
                alt="Twitter icon"
              />
            </a>
          </div>
        }
      />
    </div>
  </Section>
);

export { Hero };
