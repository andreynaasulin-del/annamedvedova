import type { Lang } from './translations';

export function bgDesktop(section: number, lang: Lang): string {
  if (lang === 'ua') return `/images/backgrounds/ua/bg-s${section}-full.jpg`;
  return `/images/backgrounds/bg-s${section}-full.jpg`;
}

export function bgMobile(section: number, lang: Lang): string {
  if (lang === 'ua') return `/images/mobile/ua/s${section}.jpg`;
  return `/images/mobile/s${section}.jpg`;
}
