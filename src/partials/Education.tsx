import { GradientText, Section } from 'astro-boilerplate-components';

const Education = () => {
  return (
    <Section
      title={
        <>
          <div className="minecraft-section-title">
            <div className="mr-3 text-3xl">📚</div>
            <GradientText>EDUCATION QUEST</GradientText>
          </div>
        </>
      }
    >
      <div className="minecraft-experience-item mb-8 transition-transform duration-300 hover:scale-105">
        <div className="minecraft-panel minecraft-card relative p-6">
          {/* Minecraft-style decorative corners */}
          <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-amber-500"></div>
          <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-amber-500"></div>
          <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-amber-500"></div>
          <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-amber-500"></div>

          <div className="flex items-start">
            {/* 3D item frame for icon */}
            <div className="minecraft-item-frame mr-4 flex h-20 w-20 items-center justify-center">
              <div className="text-4xl" style={{ imageRendering: 'pixelated' }}>
                🎓
              </div>
            </div>

            <div className="flex-1">
              <h3 className="minecraft-font mb-2 text-2xl font-bold text-amber-400">
                BE Computer Science and Engineering
              </h3>
              <div className="minecraft-font mb-2 text-lg font-bold text-yellow-300">
                Nitte Meenakshi Institute Of Technology
              </div>
              <div className="mb-3 text-gray-400">
                2021 - 2025 | Yelahanka, Bangalore
              </div>

              {/* CGPA Achievement Bar */}
              <div className="mb-4">
                <div className="mb-2 flex items-center">
                  <span className="minecraft-font mr-2 text-green-500">🏆</span>
                  <span className="font-bold text-white">CGPA: 8.5/10</span>
                </div>
                <div className="minecraft-experience-bar">
                  <div
                    className="minecraft-experience-bar-fill"
                    style={{ width: '85%', animationDelay: '0.5s' }}
                  ></div>
                </div>
              </div>

              {/* Objective */}
              <div className="minecraft-panel bg-opacity-50 p-4">
                <h4 className="minecraft-font mb-2 text-lg font-bold text-green-400">
                  Quest Objective:
                </h4>
                <p className="text-gray-200">
                  To build scalable Rust-based microservices, develop secure
                  blockchain applications, and craft performant game engines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { Education };
