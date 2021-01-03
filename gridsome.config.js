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
          Category: {
            typeName: 'Category'
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/categories/**/*.md',
        typeName: 'Category',
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
    Category: [
      {
        path: '/blog/category/:title',
        componenent: '~/templates/Category.vue',
      },
    ],
  }
}
