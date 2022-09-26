import classNames from 'classnames';
import { Container } from '~/components/container';
import { StarTwelveIcon } from '~/components/icons/star-twelve';
import { SectionTitle } from '~/components/section-title';

interface SectionProps {
  children: React.ReactNode;
  illustrationTitle: string;
  illustrationUrl: string;
  illustrationWidth: number;
  isReverse?: boolean;
}

const Section = ({
  children,
  illustrationTitle,
  illustrationUrl,
  illustrationWidth,
  isReverse,
}: SectionProps) => (
  <section
    className={classNames(
      'relative mb-4 flex justify-between py-3 font-serif text-xl leading-tight last:mb-[0] [&_em]:font-mono [&_em]:text-[3.6rem] [&_em]:not-italic',
      isReverse && 'flex-row-reverse text-right'
    )}
  >
    <div className="w-[60%] space-y-4">{children}</div>
    <div className="flex">
      <div
        className={classNames(
          'flex h-[500px] w-[310px] flex-col items-center rounded-massive border',
          isReverse ? 'rotate-[-9deg]' : 'rotate-[9deg]'
        )}
      >
        <span
          className="relative mt-5 block h-[150px] w-[150px]"
          style={{ clipPath: 'url(#star)' }}
        >
          <StarTwelveIcon />
          <img
            src={illustrationUrl}
            alt="Old skool spining logo of the best browser ever made"
            width={illustrationWidth}
            className={`absolute left-1/2 top-1/2 max-h-[none] max-w-none -translate-x-1/2 -translate-y-1/2 w-[${illustrationWidth}px]`}
          />
        </span>
        <div className="grain mt-auto flex h-[40%] w-full items-center justify-center overflow-clip rounded-b-massive bg-gray40 font-mono text-body uppercase text-white">
          {illustrationTitle}
        </div>
      </div>
    </div>
  </section>
);

export const PastDecade = () => {
  return (
    <Container className="mb-5">
      <SectionTitle className="mb-4">The past decade</SectionTitle>
      <Section
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
      </Section>

      <Section
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
          This make me realise that I needed to <em>&gt;= focus &lt;=</em>.
        </p>
      </Section>
    </Container>
  );
};
