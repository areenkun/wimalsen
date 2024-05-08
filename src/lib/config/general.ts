import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'cmyk',
    text: '🖨 Light'
  },
  {
    name: 'dracula',
    text: '🧛 Dark'
  },
  {
    name: 'valentine',
    text: '🌸 Valentine'
  },
  {
    name: 'aqua',
    text: '💦 Aqua'
  },
  {
    name: 'synthwave',
    text: '🌃 Synthwave'
  },
  {
    name: 'night',
    text: '🌃 Night'
  },
  {
    name: 'lofi',
    text: '🎶 Lo-Fi'
  },
  {
    name: 'lemonade',
    text: '🍋 Lemonade'
  },
  {
    name: 'cupcake',
    text: '🧁 Cupcake'
  },
  {
    name: 'garden',
    text: '🏡 Garden'
  },
  {
    name: 'retro',
    text: '🌇 Retro'
  },
  {
    name: 'black',
    text: '🖤 Black'
  }
]

export const head: HeadConfig = {
    custom: ({ dev }) =>
    dev
      ? []
      : [
          // Block Baiduspider
          '<meta name="keywords" content="Universitas Islam Negeri Maulana Malik Ibrahim Malang, UIN Malang, Community Service, Asistensi Mengajar, KKM, Kuliah Kerja Mahasiswa, Kuliah Kerja Nyata, Areen, areen-c, Areen-kun, areen.cx, areenc, About Areen, Areen el-Haq, js, html, css, website, personal site, blog, jekyll, SvelteKit">'
        ],
}


export const header: HeaderConfig = {
  search: {
    provider: 'google'
  },
  
  nav: [
    {
      text: 'Religious Moderation',
      link: 'https://wimalsen.pages.dev/?tags=Moderasi%20Beragama'
    },
    {
      text: 'Social Service',
      link: 'https://wimalsen.pages.dev/?tags=Bakti%20Sosial'
    },
    {
      text: 'Others',
      link: 'https://areen.is-a.dev/'
    }
  ]
}

export const footer: FooterConfig = {
  nav: [
    {
      text: 'Feed',
      link: '/atom.xml'
    },
    {
      text: 'Sitemap',
      link: '/sitemap.xml'
    }
  ]
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    year: '2-digit',
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }
}

export const feed: FeedConfig = {}
