import { GradientText, Section } from 'astro-boilerplate-components';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  icon: string;
}

const ExperienceItem = (props: ExperienceItemProps) => {
  const { title, company, period, location, achievements, icon } = props;

  return (
    <div className="minecraft-experience-item mb-12 transition-transform duration-300 hover:scale-105">
      <div className="minecraft-panel minecraft-card relative p-5">
        {/* Minecraft-style decorative corners */}
        <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-green-500"></div>
        <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-green-500"></div>
        <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-green-500"></div>
        <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-green-500"></div>

        <div className="flex items-start">
          {/* 3D item frame for icon */}
          <div className="minecraft-item-frame mr-4 flex h-16 w-16 items-center justify-center">
            <img
              src={`/assets/images/experience/${icon}.png`}
              alt={company}
              className="h-12 w-12"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>

          <div className="flex-1">
            <h3 className="minecraft-font text-xl font-bold text-green-400">
              {title}
            </h3>
            <div className="minecraft-font mb-2 font-bold text-yellow-300">
              {company}
            </div>
            <div className="mb-1 text-gray-400">
              {period} | {location}
            </div>

            {/* XP bar to show progress/experience */}
            <div className="minecraft-experience-bar mb-3 mt-2">
              <div className="minecraft-experience-bar-fill"></div>
            </div>

            <ul className="mt-3 space-y-2">
              {achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start transition-transform hover:translate-x-1"
                >
                  <span className="minecraft-font mr-2 text-green-500">➤</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: 'Core Systems & Backend Intern',
      company: 'Amadeus',
      period: 'Jan 2025 – Present',
      location: 'Bangalore',
      achievements: [
        'Rewrote EDIFACT generator in Rust microservices, yielding a 3× throughput boost and 40% lower latency',
        'Orchestrated seamless data pipelines between Rust and legacy C++ modules, enforcing strict protocol compliance',
        'Automated AWS infrastructure with CloudFormation macros, optimizing costs by 25% while ensuring 99.9% uptime',
        'Instrumented distributed tracing and metrics, slashing mean time to detection (MTTD) by 50%',
      ],
      icon: 'amadeus',
    },
    {
      title: 'HyperScalar Specialist Intern (Cloud Fullstack)',
      company: 'Tech Mahindra',
      period: 'Mar 2024 – Dec 2024',
      location: 'Bangalore',
      achievements: [
        'Built serverless AWS Lambdas to preprocess IoT telemetry, pushing enriched events to S3 and DynamoDB',
        'Designed RESTful APIs for auto-scaling workloads, achieving 100% increase in fault tolerance',
        'Defined IAM policies and Vagrant-based dev environments, reducing onboarding time by 30%',
      ],
      icon: 'techmahindra',
    },
  ];

  return (
    <Section
      title={
        <>
          <div className="minecraft-section-title">
            <img
              src="/assets/images/enchanting-table.png"
              alt="Enchanting Table"
              className="mr-2 inline-block h-10 w-10"
            />
            <GradientText>EXPERIENCE QUESTS</GradientText>
          </div>
        </>
      }
    >
      <div className="minecraft-experiences space-y-6">
        {experiences.map((exp) => (
          <ExperienceItem
            key={exp.company}
            title={exp.title}
            company={exp.company}
            period={exp.period}
            location={exp.location}
            achievements={exp.achievements}
            icon={exp.icon}
          />
        ))}
      </div>
    </Section>
  );
};

export { Experience };
