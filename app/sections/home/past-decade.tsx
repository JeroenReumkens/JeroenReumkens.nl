import { BadgeAndText } from '~/app/components/badge-and-text';
import { Container } from '~/app/components/container';
import { CtaButton } from '~/app/components/cta-button';
import { SectionTitle } from '~/app/components/section-title';

export const PastDecade = () => {
  return (
    <Container className="mb-5">
      <SectionTitle>The past decade</SectionTitle>
      <BadgeAndText
        illustrationAlt="Old skool spining logo of the best browser ever made"
        illustrationTitle="Webmaster"
        illustrationUrl="/img/gifs/explorer.gif"
        illustrationWidth={50}
      >
        <p>
          Back in the beginning, you started out as a <em>webdeveloper</em>, or
          even a <em>webmaster</em>. Building full experiences, ranging from{' '}
          <em>HTML</em>, <em>CSS</em>, some <em>JavaScript</em> and also lots of{' '}
          <em>PHP</em> and <em>Wordpress</em> in my case.
        </p>

        <p>
          Just like everyone back in the days I even built my own <em>CMS</em>.
        </p>
      </BadgeAndText>

      <BadgeAndText
        illustrationAlt="Mind blown animation"
        illustrationTitle="Focus"
        illustrationUrl="/img/gifs/mind-blown.gif"
        illustrationWidth={250}
        isReverse
      >
        <p>
          The name <em>`webmaster`</em> was probably well deserved because you
          were responsible for building everything from <em>A==&gt;Z</em>.
        </p>

        <p>
          Though it didn't take long before I started to realize that there was
          this one part I was inspired by from day one — leaving an impression
          on peoples faces when they use my products.
        </p>

        <p>
          This made me realise that I needed to <em>&gt;= focus &lt;=</em> and
          specialise myself on frontend.
        </p>

        <CtaButton
          to="/about-jeroen"
          subtitle="past work experience, projects, etc"
        >
          More about my experience
        </CtaButton>
      </BadgeAndText>
    </Container>
  );
};
