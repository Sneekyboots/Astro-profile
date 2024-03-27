import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Sriranjini KS</GradientText> 👋
        </>
      }
      description={
        <>
          Stack developer with experience in React Native, web development,{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            React Native, web development, and AWS Service Integrations.
          </a>{' '}
          Backend development experience with{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Django and Node.js.
          </a>{' '}
          Multilingual, quick learner, and eager to contribute full-stack skills
          and passion for AWS cloud technologies.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar2.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/sriranjini-ks">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
