export interface SocialLink {
  label: string;
  href: string;
  handle?: string;
  external?: boolean;
}

export const SITE = {
  name: 'João Lima',
  monogram: 'JL',
  role: 'Software, Systems & Essays on Interactive Worlds and Literature',
  location: 'Brazilian roots · Building & writing across code, games, and fiction',
  tagline:
    'Welcome to my corner of the internet — a curated home for the software and prototypes I build, alongside essays exploring game design mechanics and fiction literature.',
  bioParagraphs: [
    'I am a builder and writer originally from Brazil. By day, I design and engineer software systems; outside of work, I spend my time prototyping interactive ideas, dissecting why certain games stay with us long after the credits roll, and reading fiction.',
    'This site serves as a high-level hub for two ongoing threads of my work: technical & creative projects, and short critical essays on game design and literature (published either right here in Markdown or syndicated on Substack and Medium).',
  ],
  interests: [
    {
      label: 'Software & Prototypes',
      detail: 'Tools, web experiments, and interactive mechanics built from scratch.',
    },
    {
      label: 'Game Design Essays',
      detail: 'Systems design, narrative pacing, player agency, andludonarrative harmony.',
    },
    {
      label: 'Fiction & Literature',
      detail: 'Short reviews and reflections on speculative fiction, Latin American literature, and classic novels.',
    },
  ],
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/jgdclima',
      handle: '@jgdclima',
      external: true,
    },
    {
      label: 'Substack',
      href: 'https://substack.com',
      handle: 'Substack',
      external: true,
    },
    {
      label: 'Medium',
      href: 'https://medium.com',
      handle: 'Medium',
      external: true,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com',
      handle: 'LinkedIn',
      external: true,
    },
    {
      label: 'Email',
      href: 'mailto:hello@example.com',
      handle: 'Get in touch',
      external: false,
    },
  ] satisfies SocialLink[],
};

/**
 * Prefixes internal paths with Astro's configured BASE_URL so links work seamlessly
 * whether hosted at https://jgdclima.github.io/portfolio/ or at root (/).
 */
export function withBase(path: string): string {
  if (!path || path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:') || path.startsWith('#')) {
    return path;
  }
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  if (normalizedPath === '/') {
    return base ? `${base}/` : '/';
  }
  return `${base}${normalizedPath}`;
}
