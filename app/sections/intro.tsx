import { GrainSection } from '~/components/grain-section';

export const Intro = () => {
  return (
    <GrainSection className="overflow-hidden rounded-b-massive after:rounded-b-massive">
      <div className="height-full flex items-center justify-center">
        <div className="mt-auto flex h-full max-w-[80rem] flex-col items-center justify-center">
          <h1
            className="mb-5 font-mono text-humongous font-medium leading-[0.9]"
            lang="nl-NL"
          >
            Jeroen
            <span className="font-mono text-xl font-regular" aria-hidden>
              [yuhˈroon]
            </span>{' '}
            Reumkens
          </h1>

          <p className="ml-col mb-5 text-body">
            is a passionate frontend engineer with over a decade of professional
            experience building the best experiences on the web.
          </p>
          <p className="ml-col mb-5 text-body">
            I also mentor teams & individuals, learn more.
          </p>
        </div>
        <div className="ml-auto">
          <img
            className="rounded-massive border shadow-hard"
            src="/img/who-dis.jpg"
            alt="This is me..."
          />
        </div>
      </div>
    </GrainSection>
  );
};
