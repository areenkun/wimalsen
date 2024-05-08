import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'wimalsen.pages.dev',
  title: 'Wimalsen',
  subtitle: 'Asistensi Mengajar MTs Almaarif 01 Singosari (•̀ᴗ•́ )و',
  lang: 'en-US',
  description: 'Asistensi Mengajar MTs Almaarif 01 Singosari',
  author: {
    avatar: '/assets/avatar.webp',
    name: 'Wimalsen',
    status: '🤤',
    bio: 'Bani Danang<br> kumpulan manusia random mangasitwa uin malang di MTs Almaarif 01 Singosari 🦍'
  },
  themeColor: '#3D4451'
}
