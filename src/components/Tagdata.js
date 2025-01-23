import React, { useState } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const Tagdata = () => {
  const ddata = useStaticQuery(graphql`
    {
      allWpNews(sort: { fields: date, order: DESC }) {
        nodes {
          author_name {
            tagName
            author
            fieldGroupName
            filterByTagName
          }
          excerpt
          uri
          date(formatString: "MMMM DD, YYYY")
          title
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          tags {
            nodes {
              name
            }
          }
        }
      }
    }
  `)

  const [dshowhideTag, dshowhideTagvalue] = useState("")

  const dtagAllData = ddata.allWpNews.nodes
  // console.log("tagAllData", tagAllData)

  const dtagNewData = dtagAllData.map(post => post.tags)
  // console.log("tagNewData", tagNewData)

  const dtagNewData2 = dtagNewData.map(post => post.nodes)
  // console.log("tagNewData2", tagNewData2)

  const dfilteredTagVal = []

  const dtagFilterLogic = dtagNewData2.map(post => {
    // console.log("post", post.length);
    for (var i = 0; i < post.length; i++) {
      // console.log("post[i]", post[0]);
      dfilteredTagVal.push(post[0])
    }
  })

  // console.log(filteredTagVal)

  /////remove repetiton in aaray
  let dduplicate = dfilteredTagVal.map(post => post.name)

  function removeDuplicates(dupdatedData) {
    return [...new Set(dupdatedData)]
  }

  const dnewData = removeDuplicates(dduplicate)

  ////show more

  // console.log(newData.length, "newDatalength")
  // console.log(newData, "newDatalength")
  const dlimit = 7
  const dnewAllData = dnewData
  // console.log(dnewAllData, "dnew")
  const dfilterednewData = dnewAllData.splice(0, dlimit)
  //  console.log(newData, "newData")
  console.log(dfilterednewData.length, "d")
  const limitdata = dfilterednewData

  const dsetshowMore = () => {
    dshowhideTagvalue(s => !s)
  }

  return (
    <div>
      <div className="basic-multi-select-main">
        {dfilterednewData.length > dlimit ? (
          <>
            <div className="cluster-inner">
              {dfilterednewData.map(post => (
                <>
                  <Link to={`/tag/${post}`} className="button-tag">
                    <div>{post}</div>
                  </Link>
                  {/* <Link to={`/tag/${post}`} className="button-tag"><div>scrum</div></Link> */}
                </>
              ))}
              {dnewAllData.map(post => (
                <>
                  <Link
                    to={`/tag/${post}`}
                    className={
                      dshowhideTag ? "button-tag d-none" : "button-tag"
                    }
                  >
                    <div>{post}</div>
                  </Link>
                </>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="cluster-inner">
              {dfilterednewData.map(post => (
                <>
                  <Link to={`/tag/${post}`} className="button-tag">
                    <div>{post}</div>
                  </Link>
                  {/* <Link to={`/tag/${post}`} className="button-tag"><div>scrum</div></Link> */}
                </>
              ))}
              {dnewAllData.map(post => (
                <>
                  <Link
                    to={`/tag/${post}`}
                    className={
                      dshowhideTag ? "button-tag " : "button-tag d-none"
                    }
                  >
                    <div>{post}</div>
                  </Link>
                </>
              ))}

              {/* {dfilterednewData.length > dlimit ? ( */}
                <span className="more-button btn" onClick={dsetshowMore}>
                  More Tags
                </span>
              {/* ) : (
                ""
              )} */}
            </div>
          </>
        )}
        {/* show more tag*/}
        {/* <div className={dshowhideTag ? "tagdrawer2" : "tagdrawer"}>
          <div className="">
            <div className="cluster-tags">
              {dnewAllData.map(post => (
                <>
                  <Link to={`/tag/${post}`} className="button-tags">
                    <div>{post}</div>
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Tagdata
