import { Hero, Intro, Title } from '~/components/hero';
import { Layout } from '~/components/layout';

export default function AboutJeroen() {
  return (
    <Layout>
      <Hero className='[--bg-title:"Who_dis"]'>
        <Intro>
          <Title>About me</Title>
          <p className="mb-3">More soon..</p>
        </Intro>
      </Hero>
    </Layout>
  );
}
