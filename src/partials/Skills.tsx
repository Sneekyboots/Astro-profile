import { GradientText, Section } from 'astro-boilerplate-components';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: string;
  color: string;
}

const SkillCategory = (props: SkillCategoryProps) => {
  const { title, skills, icon, color } = props;

  return (
    <div className="minecraft-experience-item mb-8 transition-transform duration-300 hover:scale-105">
      <div className="minecraft-panel minecraft-card relative p-5">
        {/* Minecraft-style decorative corners */}
        <div
          className={`absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 ${color}`}
        ></div>
        <div
          className={`absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 ${color}`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 ${color}`}
        ></div>
        <div
          className={`absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 ${color}`}
        ></div>

        <div className="flex items-start">
          {/* 3D item frame for icon */}
          <div className="minecraft-item-frame mr-4 flex h-16 w-16 items-center justify-center">
            <div className="text-3xl" style={{ imageRendering: 'pixelated' }}>
              {icon}
            </div>
          </div>

          <div className="flex-1">
            <h3
              className={`minecraft-font mb-4 text-xl font-bold ${color.replace(
                'border-',
                'text-'
              )}`}
            >
              {title}
            </h3>

            {/* Minecraft inventory-style skill grid */}
            <div className="minecraft-inventory-grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="minecraft-inventory-slot transition-transform hover:scale-110"
                >
                  <span className="text-shadow text-center text-xs font-bold text-white">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['TypeScript', 'Rust', 'Python', 'JavaScript', 'C#', 'Solidity'],
      icon: '⚔️',
      color: 'border-red-500',
    },
    {
      title: 'Databases & Storage',
      skills: [
        'MySQL',
        'MongoDB',
        'PostgreSQL',
        'Firebase',
        'Firestore',
        'DynamoDB',
        'S3',
      ],
      icon: '📦',
      color: 'border-blue-500',
    },
    {
      title: 'Frameworks & Runtime',
      skills: [
        'Node.js',
        'Bun.js',
        'React',
        'Angular',
        'Astro',
        'Next.js',
        'Flutter',
      ],
      icon: '🔧',
      color: 'border-green-500',
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        'AWS Lambda',
        'CloudFormation',
        'EC2',
        'IAM',
        'Vagrant',
        'Git',
        'GitHub',
      ],
      icon: '☁️',
      color: 'border-purple-500',
    },
    {
      title: 'Game Development',
      skills: [
        'Unity',
        'GameMaker',
        'Android Studio',
        'ARCore',
        'Flame Engine',
      ],
      icon: '🎮',
      color: 'border-yellow-500',
    },
    {
      title: 'Blockchain & ZK',
      skills: ['Ethereum', 'ZoKrates', 'Web3.js', 'IPFS', 'Smart Contracts'],
      icon: '⛓️',
      color: 'border-cyan-500',
    },
  ];

  return (
    <Section
      title={
        <>
          <div className="minecraft-section-title">
            <div className="mr-3 text-3xl">🛠️</div>
            <GradientText>SKILL INVENTORY</GradientText>
          </div>
        </>
      }
    >
      <div className="minecraft-experiences space-y-6">
        {skillCategories.map((category) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            skills={category.skills}
            icon={category.icon}
            color={category.color}
          />
        ))}
      </div>
    </Section>
  );
};

export { Skills };
