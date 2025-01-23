module.exports = {

  plugins: [
    {
 
      resolve: `gatsby-source-wordpress`,
      options: {
        url:`https://tryscrumlive.vervebot.io/graphql`,
        schema: {
          perPage: 10,
          requestConcurrency: 2,
          previewRequestConcurrency: 2,
          timeout: 3600000
        },
        options: {
    debug: {
      graphql: {
        copyHtmlResponseOnError: false
      }
    }
  },
        verbose: true
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `@debiki/gatsby-plugin-talkyard`,
      options: {
        talkyardServerUrl: 'https://comments.tryscrum.com'
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-143505900-1", 
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.tryscrum.com',
        sitemap: 'https://www.tryscrum.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
          // shortname: `tryscrum-com`
          shortname: `tryscrum`
      }
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/eb_widgets.js', 
      },
    },
    {
      resolve: "gatsby-plugin-antd",
      options: {
        style: true,
      },
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        javascriptEnabled: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
          rule: {
              include: `${__dirname}/src/svg/`,
          },
      },
    },
  
  ],
}