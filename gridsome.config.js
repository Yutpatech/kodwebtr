// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'KodWeb',
  icon: './src/favicon.svg',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/posts/**/*.md',
        remark: {
          // remark options
        },
        refs: {
          authors: {
            typeName: 'Author',
            create: true
          },
          categories: {
            typeName: 'Category',
            create: true
          },
          tags: {
            typeName: 'Tag',
            create: true
          },
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/categories/**/*.md',
        typeName: 'Categories',
        refs: {
          posts: {
            typeName: 'Post',
          },
        },
      },
    },
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: '/cms' 
      }
    } 
  ],
  templates: {
    Post: '/blog/:title',
    Tag: [
      {
        path: '/blog/category/:title',
        componenent: '~/templates/Category.vue',
      },
    ],
  }
}
