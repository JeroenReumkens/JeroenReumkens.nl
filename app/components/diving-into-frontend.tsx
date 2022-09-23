import { useRef } from 'react';
import { useMotion } from '~/utils/use-motion';
import { Container } from './container';
import { GrainSection } from './grain-section';
import { animate, scroll } from 'motion';

export const DivingIntoFrontend = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useMotion([sectionRef], ([section]) => {
    scroll(
      animate(section, {
        borderTopLeftRadius: [0, '120px'],
        borderTopRightRadius: [0, '120px'],
      }),
      {
        target: section,
        offset: ['start end', 'start center'],
      }
    );
  });

  return (
    <GrainSection ref={sectionRef} color="black">
      <Container className="text-body text-white md:text-humongous">
        More soon..
      </Container>
    </GrainSection>
  );
};
