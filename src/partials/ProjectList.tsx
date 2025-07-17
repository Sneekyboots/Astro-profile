import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        <div className="minecraft-section-title">
          <img
            src="/assets/images/minecraft-chest.png"
            alt="Minecraft Chest"
            className="mr-2 inline-block h-10 w-10"
            style={{ imageRendering: 'pixelated' }}
          />
          <GradientText>
            <span className="minecraft-font">CRAFTED PROJECTS</span>
          </GradientText>
        </div>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Zero-Knowledge Proof-of-Location System"
        description="Engineered ZoKrates circuit to verify geolocation claims without revealing coordinates. Deployed verifier contract on Ethereum testnet for tamper-proof audit trails. Revolutionary privacy-preserving location verification system."
        link="https://github.com/Sneekyboots"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'ZK Proof System',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>ZoKrates</Tags>
            <Tags color={ColorTags.LIME}>Ethereum</Tags>
            <Tags color={ColorTags.SKY}>Blockchain</Tags>
            <Tags color={ColorTags.ROSE}>Zero-Knowledge</Tags>
          </>
        }
      />
      <Project
        name="Bhoomi - Agricultural Analytics Platform"
        description="Google @ HackforChange Qualified project. Developed agricultural analytics platform delivering real-time soil and crop advisories. Leveraged Firebase Auth and AWS Lambda for seamless user onboarding and data processing."
        link="https://github.com/Sneekyboots"
        img={{ src: '/assets/images/project-fire.png', alt: 'Bhoomi Platform' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Firebase</Tags>
            <Tags color={ColorTags.EMERALD}>AWS Lambda</Tags>
            <Tags color={ColorTags.YELLOW}>Agriculture</Tags>
            <Tags color={ColorTags.ROSE}>Analytics</Tags>
          </>
        }
      />
      <Project
        name="Cyto Sherlock - AI Pathology Assistant"
        description="AWS Hackathon $250 Bounty Winner! Created AI pathology assistant with AWS SageMaker PartyRock to auto-generate diagnostic reports. Built AWS Lex chatbot for interactive patient consultations."
        link="https://github.com/Sneekyboots"
        img={{ src: '/assets/images/project-maps.png', alt: 'Cyto Sherlock' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>AWS SageMaker</Tags>
            <Tags color={ColorTags.INDIGO}>AWS Lex</Tags>
            <Tags color={ColorTags.ROSE}>AI/ML</Tags>
            <Tags color={ColorTags.SKY}>Healthcare</Tags>
          </>
        }
      />
      <Project
        name="NFT Dashboard & Marketplace"
        description="Implemented React/Web3.js frontend for minting, listing, and trading NFTs with royalty smart contracts on IPFS. Complete decentralized marketplace with advanced features."
        link="https://github.com/Sneekyboots"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'NFT Marketplace',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>React</Tags>
            <Tags color={ColorTags.EMERALD}>Web3.js</Tags>
            <Tags color={ColorTags.YELLOW}>IPFS</Tags>
            <Tags color={ColorTags.ROSE}>Smart Contracts</Tags>
          </>
        }
      />
      <Project
        name="Gamers DAO"
        description="Built on Q Blockchain and Metaschool Internship program. Decentralized autonomous organization for gamers with governance features and token economics."
        link="https://github.com/Sneekyboots"
        img={{ src: '/assets/images/project-fire.png', alt: 'Gamers DAO' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Q Blockchain</Tags>
            <Tags color={ColorTags.INDIGO}>DAO</Tags>
            <Tags color={ColorTags.ROSE}>Gaming</Tags>
            <Tags color={ColorTags.SKY}>DeFi</Tags>
          </>
        }
      />
      <Project
        name="AR Applications with ARCore"
        description="Android applications with ARCore featuring furniture placement, garden visualization, and interactive 3D models. Unleash AR magic: virtual garden, furniture try-on, and interactive experiences!"
        link="https://github.com/Sneekyboots/garden-ai.git"
        img={{ src: '/assets/images/project-maps.png', alt: 'AR Projects' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>ARCore</Tags>
            <Tags color={ColorTags.INDIGO}>Unity</Tags>
            <Tags color={ColorTags.ROSE}>C#</Tags>
            <Tags color={ColorTags.VIOLET}>Android</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
