import Image from 'next/image';
import whoDisImage from '~/public/img/who-dis.jpg';

export const WhoDisPicture = () => (
  <Image
    className="rounded-massive border shadow-hard"
    src={whoDisImage}
    alt="Me wearing glasses, a white blouse and having a very short beard, sitting in a coffee bar."
    placeholder="blur"
  />
);
