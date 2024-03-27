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
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Heistyway:An RPG Game built on flutter and flame"
        description="This exciting RPG, built with Flutter and Flame, lets you embark on a thrilling journey with a cast of unforgettable characters, including:
        The Pink Powerhouse: A surprisingly strong and sassy warrior with a penchant for vibrant hues. The Shell-Shocked Ninja: This unconventional turtle may not blend into the shadows, but his agility and sharp katanas are undeniable. (Add more character descriptions here! Highlight their unique abilities and personalities.) "
        link="https://github.com/Sneekyboots/Global-games-hackathon-sub"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Flame</Tags>
            <Tags color={ColorTags.LIME}>Game Dev</Tags>
            <Tags color={ColorTags.SKY}>Flutter UI</Tags>
            <Tags color={ColorTags.ROSE}>Android Studio</Tags>
          </>
        }
      />
      <Project
        name="Food-zone"
        description="Feast Your Eyes (Before Your Stomach Does): We're talking stunning UI, so smooth and delicious you'll want to take a bite (don't worry, the virtual calories don't count!)."
        link="https://github.com/Sneekyboots/food-zone.git"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>React native</Tags>
            <Tags color={ColorTags.EMERALD}>Android Studio</Tags>
            <Tags color={ColorTags.YELLOW}>Sanity</Tags>
            <Tags color={ColorTags.ROSE}>expo </Tags>
          </>
        }
      />
      <Project
        name="Ar projects"
        description="Unleash a jet turbine in your room! My ARCore projects bring AR magic to life: a virtual garden, furniture try-on, and a battling (or friendly) dragon!"
        link="https://github.com/Sneekyboots/garden-ai.git"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>ARCore</Tags>
            <Tags color={ColorTags.INDIGO}>Unity</Tags>
            <Tags color={ColorTags.ROSE}>C#</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
