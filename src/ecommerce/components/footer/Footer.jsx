import { FooterHeartIcon } from '../../icons/footer';

export const Footer = () => {
  return (
    <footer className="bg-darkGray p-14 text-center">
      <span className="tracking-widest text-white">
        Made with <FooterHeartIcon className="mx-2 inline h-[1rem] w-[1rem] fill-white" /> by{' '}
        <a
          className="inline"
          target="_blank"
          href="https://www.linkedin.com/in/andres-poblete-dev/">
          Adrs
        </a>
      </span>
    </footer>
  );
};
