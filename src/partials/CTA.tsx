import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Subscribe to my <GradientText>Newsletters</GradientText>
        </>
      }
      description="Love to interact and disscuss on more than one platform, I share my knowledge here. I will try to update it in the future. Stay tuned."
    />
  </Section>
);

export { CTA };
