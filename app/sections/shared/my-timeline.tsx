import { OldSkoolWebsiteFrame } from '../home/old-skool-website';

interface YearProps {
  children: React.ReactNode;
  year: string;
}

const Year = ({ children, year }: YearProps) => (
  <div className="relative flex flex-col items-start pb-3 text-body md:flex-row md:pb-5">
    <div className="top-[0] m-[0] flex text-2xl leading-[0.8] md:sticky md:w-col md:text-humongous">
      {year}
    </div>
    <div className="max-w-7xl md:ml-col">{children}</div>
  </div>
);

interface ItemProps {
  children: React.ReactNode;
  title: string;
}

const Item = ({ children, title }: ItemProps) => (
  <div className="mb-3 space-y-3 md:mb-4">
    <h2 className="text-lg font-medium md:text-xl">{title}</h2>
    {children}
  </div>
);

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="pt-3 text-lg font-medium">{children}</h3>
);

export const MyTimeline = () => {
  return (
    <div>
      <Year year="Now">
        <Item title="Building frontend.fyi">
          <p>
            I'm currently focussing my attention on building frontend.fyi — a
            new platform where I teach people the craft in frontend.
          </p>
          <p>More soon... 😉</p>
        </Item>
        <Item title="Helping companies as a freelancer">
          <p>
            Besides the time I invest in building frontend.fyi, I'm also helping
            companies build great products as a freelancer.
          </p>

          <p>
            Currently I'm helping{' '}
            <a
              className="underline"
              href="https://www.cal.com"
              target="_blank"
              rel="noreferrer"
            >
              Cal.com
            </a>{' '}
            build their amazing open source event scheduler.
          </p>
        </Item>
      </Year>
      <Year year="2021- 2022">
        <Item title="Principal frontend engineer at DEPT®">
          <p>
            At{' '}
            <a
              className="underline"
              href="https://www.deptagency.com"
              target="_blank"
              rel="noreferrer"
            >
              DEPT®
            </a>{' '}
            I've worked as a principal frontend engineer. During my time there I
            enabled a group of over 30 frontend engineers to do their best work.
            My responsibilities were laying technical foundations in projects,
            creating technical vision, supporting and educating other engineers,
            advising clients and projects and finding the right balance between
            quality and time / effort.
          </p>
        </Item>
      </Year>
      <Year year="2018- 2021">
        <Item title="Freelance frontend engineer">
          <p>
            From 2018 to 2021 I've helped multiple companies build great
            products as a freelancer.
          </p>

          <SubTitle>Xebia</SubTitle>
          <p>
            I joined Xebia as a freelance frontend engineer, helping them in
            building a serious gaming platform, converting their current
            'analog' games into digital version. We've setup a platform that can
            be reused for multiple different games.
          </p>

          <SubTitle>Dutch Ministry of Health</SubTitle>
          <p>
            During the peak of the Covid pandemic I joined the Dutch Ministry of
            Health, Welfare and Sport on their endeavour to provide as much
            information around the pandemic as possible.
          </p>

          <p>
            We've build multiple greenfield JAM-stack websites (SSG rendered
            with Next) focused on informing the Dutch citizen about travel
            regulations, travel restrictions, and quarantine compliancy. Finally
            we've also build a registration platform for any citizens traveling
            to the Netherlands, providing the citizens with a certificate which
            would be validated at the border.
          </p>

          <p>
            <a
              className="underline"
              href="https://reizentijdenscorona.rijksoverheid.nl"
              target="_blank"
              rel="noreferrer"
            >
              reizentijdenscorona.
              <wbr />
              rijksoverheid.nl
            </a>
            ,{' '}
            <a
              className="underline"
              href="https://quarantainecheck.rijksoverheid.nl"
              target="_blank"
              rel="noreferrer"
            >
              quarantainecheck.
              <wbr />
              rijksoverheid.nl
            </a>{' '}
            and{' '}
            <a
              className="underline"
              href="https://quarantaineverklaring.rijksoverheid.nl"
              target="_blank"
              rel="noreferrer"
            >
              quarantaineverklaring.
              <wbr />
              rijksoverheid.nl
            </a>
            .
          </p>

          <SubTitle>Dutch Police</SubTitle>
          <p>
            During the Covid pandemic I joined the Dutch Police in creating
            internal dashboarding. These dashboards helped the Dutch government
            in keeping track on all statistics around the pandemic — ranging
            from available hospital beds to fines.
          </p>

          <p>
            The goal of the dashboard was creating a platform that could be used
            for any future crisis. Currently the tool is being used to help
            Ukrainian refugees in the Netherlands in finding a place to stay as
            quickly and efficiently as possible.
          </p>

          <SubTitle>Rabobank</SubTitle>
          <p>
            Working with the Rabobank Data4Food program creating web
            applications for visualizing data for farmers.
          </p>

          <SubTitle>Lead frontend at VodafoneZiggo</SubTitle>
          <p>
            As the lead frontend engineer my main task was creating solid
            foundations for both the new My Vodafone and My Ziggo environments
            and guiding the three teams in their daily work.
          </p>

          <p>
            My responsibilities were: Joining the different teams in their
            development work; Supporting, coaching and teaching the engineers,
            doing code reviews, pair programming, etc; Consulting Vodafone in
            their digital roadmap. Part of that is creating plans to improve the
            other legacy modules as well. And start implementing these plans;
            Creating more bridges (especially technical, coding standards,
            techniques used, etc) between the differently located Vodafone and
            Ziggo digital teams. Making sure there is one vision / direction for
            the digital department.
          </p>
        </Item>
      </Year>
      <Year year="2016- 2018">
        <Item title="Senior frontend engineer at DEPT®">
          <p>
            In my day to day work at TamTam/Dept I worked as a senior frontend
            engineer creating anything ranging from single page apps to smaller
            sexy campaign websites and everything in between.
          </p>
          <p>
            Besides the engineering work, I worked hard on improving the overall
            frontend level of the company, bringing in new standards, coaching
            the engineers and maintain the frontend setup we used in most of our
            projects.
          </p>
        </Item>
      </Year>
      <Year year="2014- 2016">
        <Item title="Freelance frontend engineer at Vodafone Netherlands">
          <p>
            As an external specialist I joined the internal Vodafone Digital
            team to help build, maintain and improve their own website, with a
            big focus on the My Vodafone environment.
          </p>
        </Item>
      </Year>
      <Year year="Way back..">
        <Item title="Do I even remember this time?">
          <p>
            The web surely was a whole different thing back than. Since 2011 I'm
            professionally working in web development, and until 2014 I've
            mainly worked at different online agencies.
          </p>

          <div className="pointer-events-none absolute left-1/3 -top-5 w-1/2 rotate-12 overflow-hidden opacity-10">
            <OldSkoolWebsiteFrame />
          </div>
        </Item>
      </Year>
    </div>
  );
};
