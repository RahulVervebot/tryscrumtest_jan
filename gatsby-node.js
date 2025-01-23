const path = require(`path`)
// const chunk = require(`lodash/chunk`)
// const { Console } = require("console")
/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */

 exports.createPages = async ({ actions, graphql }) => {

  const result = await graphql(`

    {
      allWpCourseCategory {
        nodes {
          course_categories {
        coursesIncludes {
          courseDetails {
            semiTitle
            subTitle
            url
            h2Title
            buttonLink
            buttonTag
            title
            logo {
              mediaItemUrl
            }
            courseDescription
          }
          courseHeader {
            banner {
              mediaItemUrl
            }
            breadcrumb
            description
            heading
          }
             courseBottom {
            qa
            summary
          }
        }
      }
        }
      }
      allWpNews {
        nodes {
          tags {
            nodes {
              name
            }
          }
          title
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          uri
          id
        }
      }
        allWpArticles {
        nodes {
          tags {
            nodes {
              name
            }
          }
          title
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          uri
          id
        }
      }
        
      allWpPost {
        nodes {
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          title
          uri
          id
          acfcoursePage {
            course1 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
            }
            course2 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
            }
            course3 {
              date1
              fieldGroupName
              location
              time1
              trainer
              url
            }
            course4 {
              date1
              fieldGroupName
              location
              trainer
              time1
              url
            }
            options {
              certificate
              certificationBody
              curriculum
              feeStructure
              fieldGroupName
              guidlineUrl
              included
              instructions
              logisticsAndPrerequisites
              pduScrumAllianceSeus
              prerequisites
              trustPilotRating
              video
              whoCanAttend
              why
              duration
              thecourse
              benefits
              heroBreadcrumb
              heroContent
              heroHeading
              country
              customUrl
            }
          }
        }
      }
      
    }
  `)

  const posts = result.data.allWpNews.nodes
  const articlespost = result.data.allWpArticles.nodes

  posts.forEach(post => {
    actions.createPage({
      path: post.uri,
      component: require.resolve("./src/templates/post-template.js"),
      context: {
        id: post.id,
      },
    })
  })
  //in post
  posts.forEach(post => {
    actions.createPage({
      //path: uricoursepage,
      path: "in/"+post.uri,
      component: require.resolve("./src/templates/country/post-template.js"),
      context: {
        id: post.id,
      },
    })
  })
 // Blog List Pages
    const graphqlResult = await graphql(/* GraphQL */ `
      {
        wp {
          readingSettings {
            postsPerPage
          }
        }
      }
    `)

    const { postsPerPage } = graphqlResult.data.wp.readingSettings
    // createPage is an action passed to createPages
    // See https://www.gatsbyjs.com/docs/actions#createPage for more info
    await actions.createPage({
      path: `blogs`,
      // use the blog post archive template as the page component
      component: path.resolve(`./src/templates/blog-post-archive.js`),

      // `context` is available in the template as a prop and
      // as a variable in GraphQL.
      context: {
        // the index of our loop is the offset of which posts we want to display
        // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
        // etc
        
        // We need to tell the template how many posts to display too
        postsPerPage,
      },
    })
  
    await actions.createPage({
      path: `in/blogs`,
      // use the blog post archive template as the page component
      component: path.resolve(`./src/templates/country/blog-post-archive.js`),

      // `context` is available in the template as a prop and
      // as a variable in GraphQL.
      context: {
        // the index of our loop is the offset of which posts we want to display
        // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
        // etc
        
        // We need to tell the template how many posts to display too
        postsPerPage,
      },
    })


  //single articles template

  articlespost.forEach(post => {
    actions.createPage({
      path: post.uri,
      component: require.resolve("./src/templates/single-article-template"),
      context: {
        id: post.id,
      },
    })
  })

  //in post
  articlespost.forEach(post => {
    actions.createPage({
      path: "in"+post.uri,
      component: require.resolve("./src/templates/country/single-article-template"),
      context: {
        id: post.id,
      },
    })
  })


  // for articles new pages creating:


  await actions.createPage({
    path: `articles`,
    // use the blog post archive template as the page component
    component: path.resolve(`./src/templates/articles-post-archive.js`),

    // `context` is available in the template as a prop and
    // as a variable in GraphQL.
    context: {
      // the index of our loop is the offset of which posts we want to display
      // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
      // etc
      
      // We need to tell the template how many posts to display too
      postsPerPage,
    },
  })

  await actions.createPage({
    path: `in/articles`,
    // use the blog post archive template as the page component
    component: path.resolve(`./src/templates/country/articles-post-archive.js`),

    // `context` is available in the template as a prop and
    // as a variable in GraphQL.
    context: {
      // the index of our loop is the offset of which posts we want to display
      // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
      // etc
      
      // We need to tell the template how many posts to display too
      postsPerPage,
    },
  })

  //Tags
  const tagAllData = result.data.allWpNews.nodes
  console.log("tagAllData", tagAllData)
  const tagNewData = tagAllData.map(post => post.tags)
  console.log("tagNewData", tagNewData)
  const tagNewData2 = tagNewData.map(post => post.nodes)
  console.log("tagNewData2", tagNewData2)
  const filteredTagVal = [];
  const tagFilterLogic = tagNewData2.map(post =>
    {
      console.log("post", post.length);
      for (var i = 0; i < post.length; i++) {
          console.log("post[i]", post[0]);
          filteredTagVal.push(post[0]);
        }
  })

  console.log("filteredTagVal_gatsby_node_js_file", filteredTagVal);

  filteredTagVal.forEach(list => {
    actions.createPage({
      path: `/tag/${list.name}`,
      component: require.resolve(`./src/pages/tag.js`),
      context: {
        name : list.name,
      },
    })
  })
  filteredTagVal.forEach(list => {
    actions.createPage({
      path: `in/tag/${list.name}`,
      component: require.resolve(`./src/pages/in/tag.js`),
      context: {
        name : list.name,
      },
    })
  })
  // New Blogs URL To Solve Sharing Problem
  await actions.createPage({
    path: `tryscrum-blogs`,
      // use the blog post archive template as the page component
      component: path.resolve(`./src/templates/blog-post-archive.js`),
      // `context` is available in the template as a prop and
      // as a variable in GraphQL.
      context: {
        // the index of our loop is the offset of which posts we want to display
        // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
        // etc
        // We need to tell the template how many posts to display too
        postsPerPage,
      },
    })
    //All Courses List
    const courseslist = result.data.allWpPost.nodes
    courseslist.forEach(courseslist => {
      actions.createPage({
        path: `certifications`,
        component: require.resolve("./src/templates/course-archive.js"),
        context: {
          id: courseslist.id,
        },
      })
    })

    courseslist.forEach(courseslist => {
      actions.createPage({
        path: `in/certifications`,
        component: require.resolve("./src/templates/country/certification-in.js"),
        context: {
          id: courseslist.id,
        },
      })
    })

//categories link
const coursesCategory = result.data.allWpCourseCategory.nodes


  coursesCategory.forEach(item => {
    const incoursecategory = item.course_categories.coursesIncludes.courseDetails.url;
  
    // Check if incoursecategory contains "/in/" anywhere in the URL
    const componentPath = incoursecategory.includes('/in/')
      ? require.resolve("./src/templates/country/categories.js")
      : require.resolve("./src/templates/categories.js");
  
    actions.createPage({
      path: incoursecategory,
      component: componentPath,
    });
  });

    courseslist.forEach(courseslist => {
      actions.createPage({
        path: `public-events`,
        component: require.resolve("./src/templates/public-events.js"),
        context: {
          id: courseslist.id,
        },
      })
    })

    // Single Course template
    const course = result.data.allWpPost.nodes
    course.forEach(course => {
      let pathPrefix = 'certifications';
      if (course.categories.nodes[0].name == 'Agile') {
        pathPrefix = 'certifications/agile';
      }
      else if(course.categories.nodes[0].name == 'Scrum'){
        pathPrefix = 'certifications/agile/scrum';
      }
      else if(course.categories.nodes[0].name == 'Faciliation'){
        pathPrefix = 'certifications/agile/scrum/facilitation';
      }
      else if(course.categories.nodes[0].name == 'Leadership'){
        pathPrefix = 'certifications/agile/scrum/leadership';
      }
      else if(course.categories.nodes[0].name == 'Scaling'){
        pathPrefix = 'certifications/agile/scrum/scaling';
      }
      else if(course.categories.nodes[0].name == 'Master'){
        pathPrefix = 'certifications/agile/scrum/scrum-master';
      }
      else if(course.categories.nodes[0].name == 'Product Owner'){
        pathPrefix = 'certifications/agile/scrum/product-owner';
      }
      else if(course.categories.nodes[0].name == 'Developer'){
        pathPrefix = 'certifications/agile/scrum/developer';
      }
      else if(course.categories.nodes[0].name == 'Kanban'){
        pathPrefix = 'certifications/agile/kanban';
      }
      else{
        pathPrefix = 'certifications';
      }
    if(course.acfcoursePage.options.country == 'in'){
      actions.createPage({
        path: `${course.acfcoursePage.options.country}${'/'}${pathPrefix}${'/'}${course.acfcoursePage.options.customUrl}`,
        component: require.resolve("./src/templates/country/in.js"),
        context: {
        id: course.id,
          },
        })
    }

    else if(course.acfcoursePage.options.country == 'aus'){
      actions.createPage({
        path: `${course.acfcoursePage.options.country}${'/'}${pathPrefix}${'/'}${course.acfcoursePage.options.customUrl}`,
        component: require.resolve("./src/templates/country/aus.js"),
        context: {
        id: course.id,
          },
        })
    }
    else{
      actions.createPage({
      path: `${pathPrefix}${course.uri}`,
      component: require.resolve("./src/templates/agile.js"),
      context: {
      id: course.id,
        },
      })
    }
  })
}