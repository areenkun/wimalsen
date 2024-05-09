import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'wimalsen.is-cool.dev',
  title: 'Wimalsen',
  subtitle: 'Teaching Assistantship of MTs Almaarif 01 Singosari',
  lang: 'en-US',
  description: 'Asistensi Mengajar MTs Almaarif 01 Singosari',
  author: {
    avatar: '/assets/avatar.webp',
    name: 'Wimalsen',
    status: '🫠',
    bio: 'Official Website of the <br>Teaching Assistantship <br>MTs Almaarif 01 Singosari'
  },
  themeColor: '#3D4451'
}
