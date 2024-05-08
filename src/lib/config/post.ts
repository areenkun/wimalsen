import type { PostConfig } from '$lib/types/post'

export const post: PostConfig = {
    comment: {
        use: ['Giscus'],
        style: 'boxed', // comment system bar styles: none / bordered / lifted / boxed
        giscus: {
          repo: 'areenkun/blog',
          repoID: 'R_kgDOL4lp4g',
          category: 'Comments',
          categoryID: 'DIC_kwDOL4lp4s4CfNfe',
          reactionsEnabled: true, // reactions: true / false
          inputPosition: 'top', // position of comment box: top / bottom
          lang: 'en', // language
          theme: 'preferred_color_scheme', // theme
          loading: 'lazy',
          crossorigin="anonymous"
        }
      }
}
