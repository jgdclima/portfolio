export interface SocialLink {
  label: string;
  href: string;
  handle?: string;
  external?: boolean;
}

export const SITE = {
  name: 'João Lima',
  monogram: 'JL',
  role: 'Software, Quality, User Experience, Process Optimization',
  location: 'Vancouver, BC · Building & writing across code, games, and fiction',
  tagline:
    'This is my little home for side projects, thought experiments, and essays exploring game design, narrative fiction, and other tangential rabbit holes. Who knows where we\'ll end up?',
  bioParagraphs: [
    'I am a tech and interactive systems (with an emphasis in games) nerd from Brazil. By day, I design/build/analyse software systems; outside of work, I spend my time brainstorming prototyping interactive ideas, and dissecting why some experiences feel so much more engaging than others.',
    'This site serves as a high-level hub for two ongoing threads of my work: technical & creative projects, and short critical essays on game design and narrative.',
  ],
  interests: [
    {
      label: 'Software',
      detail: 'Quality Assurance, Development Workflows, Internal Tools, User Experience.',
    },
    {
      label: 'Game Design',
      detail: 'Systems design, narrative pacing, player agency, learning curves.',
    },
    {
      label: 'Narrative',
      detail: 'Magic systems, character development, theming, worldbuilding.',
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
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/joaoakabrazil',
      handle: 'LinkedIn',
      external: true,
    },
    {
      label: 'Email',
      href: 'mailto:theotherlima@gmail.com',
      handle: 'Get in touch!',
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
