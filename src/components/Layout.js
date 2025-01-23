import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import appleTouch from "../assets/images/favicons/apple-touch-icon.png"
import fav32 from "../assets/images/favicons/favicon-32x32.png"
import fav16 from "../assets/images/favicons/favicon-16x16.png"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-modal-video/css/modal-video.min.css"
import "../assets/plugins/fontawesome-free-5.11.2-web/css/all.min.css"
import "../assets/plugins/kipso-icons/style.css"
import "../assets/css/animate.min.css"
import "../assets/css/style.css"
import "../assets/css/responsive.css"
import homeBanner from "../assets/images/socialbanners/tryScrum_home.png"
import enterpriseBanner from "../assets/images/socialbanners/management.png"
import blogsBanner from "../assets/images/socialbanners/blogs.png"
import whitepaperBanner from "../assets/images/socialbanners/whitepaper.png"
import coursesBanner from "../assets/images/socialbanners/coaching-banner.jpg"
import aboutUsBanner from "../assets/images/socialbanners/about.png"
import contactUsBanner from "../assets/images/socialbanners/contact-us.png"
import tools from "../assets/images/try-Scrum-imgaes/imgs/leadership-coaching-canvas_three.jpg"
import agilecoaching from "../assets/images/try-Scrum-imgaes/imgs/social-media-banner.png"
// import headerbanner from "../assets/images/anniversary-banner.png"
import Modal from "react-modal"
import WhatsAppShare from "./WhatsAppShare"
import ReferIcon from "./ReferIcon"
import { get } from "lodash"
import GoogleTagManager from "./GoogleTagManager"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

Modal.setAppElement("#___gatsby")

const Layout = props => {
  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [modalOpened, Open] = React.useState(true)
  const [currentpage, setCurrentPage] = useState()


  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00"
  }

  function closeModal() {
    setIsOpen(false)
    Open(false)
  }
  useEffect(() => {
    // Add the Zoho SalesIQ script
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      window.$zoho=window.$zoho || {};
      $zoho.salesiq=$zoho.salesiq||{ready:function(){}};
    `;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.id = "zsiqscript";
    script2.src = "https://salesiq.zohopublic.in/widget?wc=siq038c7a737b0b3714aa8c09566d74ce580435675b897f00106794ea55dd3f1861";
    script2.defer = true;
    document.body.appendChild(script2);

    // Cleanup scripts when the component unmounts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);
  useEffect(() => {
    let noscript = document.createElement("noscript")
    let iframe = document.createElement("iframe")
    iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-T5K5Q6W3"

    noscript.appendChild(iframe)
    document.body.appendChild(noscript)
  })
  useEffect(() => {
    setCurrentPage(window.location.href); // Safe to use window here
}, [])
  return (
    <>
      <div>
       
       
        <WhatsAppShare />
        <Helmet>
          {/* <GoogleTagManager /> */}
          {/* <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T5K5Q6W3"
          height="0" width="0" style="display:none;visibility:hidden"></iframe> */}

          {/* course 1 */}
          <title>Professional Scrum Master</title>
          <script type="application/ld+json">
            {`
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Become a Great Professional Scrum Master ",
      "description": "Professional Scrum Master training with tryScrum is intense and creative.",
      "provider": {
        "@type": "Organization",
        "name": "We Humanize Organizations",
        "sameAs": "https://www.tryscrum.com/professional-scrum-master/"
      }
   `}
          </script>
          {/* course  2*/}
          <title>Certified Agile Leadership for Teams</title>
          <script type="application/ld+json">
            {`
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Certified Agile Leadership for Teams",
      "description": "All participants completing the Certified Agile Leadership for Teams course will receive CAL-T Credentials from Scrum Alliance.",
      "provider": {
        "@type": "Organization",
        "name": "We Humanize Organizations",
        "sameAs": "https://www.tryscrum.com/certified-agile-leadership-for-teams-cal-t/"
      }
   `}
          </script>
          {/* course 3 */}
          <title>Certified Professional Agile Coaching</title>
          <script type="application/ld+json">
            {`
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Become a Skilled Coach",
      "description": "The Agile Coaching program at tryScrum teaches you the skills needed to be successful as a coach and shows you how to be a valuable coach to any Agile Team.",
      "provider": {
        "@type": "Organization",
        "name": "We Humanize Organizations",
        "sameAs": "https://www.tryscrum.com/icagile/"
      }
   `}
          </script>
          {/* course 4  */}
          <title>Advanced Scrum Master (PSM II)</title>
          <script type="application/ld+json">
            {`
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Become an exceptional Scrum Master ",
      "description": "There are a ton of credentials for Scrum Masters. But, the PSM II training focuses on skills and traits needed to grow as a Scrum Master.",
      "provider": {
        "@type": "Organization",
        "name": "We Humanize Organizations",
        "sameAs": "https://www.tryscrum.com/professional-scrum-master-ii/"
      }
   `}
          </script>
         <html lang="en" />

          <meta
            name="google-site-verification"
            content="ylDTqVy_N1ll6kX2-LK_dN3K0WgfyVPfMFYCWCFoMkQ"
          />

          <title>{props.pageTitle}</title>

          <meta charSet="UTF-8" />
          <meta name="description" content={props.metaDesc} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="apple-touch-icon" sizes="180x180" href={appleTouch} />
          <link rel="icon" type="image/png" sizes="32x32" href={fav32} />
          <link rel="icon" type="image/png" sizes="16x16" href={fav16} />
          <link rel="canonical" href={currentpage} />
          <meta
            name="google-site-verification"
            content="3aN2km0JzUaYeKSeO2e7ZU-mcOOtBUm0s9w1KwMxNbE"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://tryscrum.com" />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9022361939391082"
            crossorigin="anonymous"
          ></script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-11391492046"
          ></script>
          <script>
            {`window.dataLayer = window.dataLayer || []
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'AW-11391492046');`}
          </script>

          <script>
            {`(function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-T5K5Q6W3');`}
          </script>

          <meta
            name="twitter:card"
            content="Professional Scrum Certification"
          />
          <meta property="twitter:domain" content="https://tryscrum.com" />
          <meta property="twitter:url" content="https://tryscrum.com" />
          {props.pageName == "home" ? (
            <meta property="og:image" content={homeBanner} />
          ) : null}
          {props.pageName == "home" ? (
            <meta name="twitter:image" content={homeBanner} />
          ) : null}

          {props.pageName == "enterprise_coaching_consulting" ? (
            <meta property="og:image" content={enterpriseBanner} />
          ) : null}
          {props.pageName == "enterprise_coaching_consulting" ? (
            <meta name="twitter:image" content={enterpriseBanner} />
          ) : null}

          {/* Individual courses and blogs page image update */}
          {props.pageloc === "individual" ? (
            <meta property="og:image" content={props.pageName} />
          ) : null}
          {props.pageloc === "individual" ? (
            <meta name="twitter:image" content={props.pageName} />
          ) : null}

          {props.pageName == "blogs" ? (
            <meta property="og:image" content={blogsBanner} />
          ) : null}
          {props.pageName == "blogs" ? (
            <meta name="twitter:image" content={blogsBanner} />
          ) : null}

          {props.pageName == "agile-coaching" ? (
            <meta property="og:image" content={agilecoaching} />
          ) : null}
          {props.pageName == "agile-coaching" ? (
            <meta name="twitter:image" content={agilecoaching} />
          ) : null}

          {props.pageName == "whitepapers" ? (
            <meta property="og:image" content={whitepaperBanner} />
          ) : null}
          {props.pageName == "whitepapers" ? (
            <meta name="twitter:image" content={whitepaperBanner} />
          ) : null}

          {props.pageName == "whitepapers-building-blocks" ? (
            <meta property="og:image" content={props.image} />
          ) : null}
          {props.pageName == "whitepapers-building-blocks" ? (
            <meta name="twitter:image" content={props.image} />
          ) : null}

          {props.pageName == "the-stages-of-agile-transformation" ? (
            <meta property="og:image" content={props.image} />
          ) : null}
          {props.pageName == "the-stages-of-agile-transformation" ? (
            <meta name="twitter:image" content={props.image} />
          ) : null}

          {props.pageName == "tools" ? (
            <meta
              property="og:title"
              content="tryScrum Toolkit - Team Coaching Canvas"
            />
          ) : (
            <meta property="og:title" content={props.pageTitle} />
          )}
          {props.pageName == "tools" ? (
            <meta
              property="og:description"
              content="The Canvas plays the role of a guide for the Agile Coaches."
            />
          ) : (
            <meta property="og:description" content={props.metaDesc} />
          )}

          {props.pageName == "tools" ? (
            <meta
              name="twitter:title"
              content="tryScrum Toolkit - Team Coaching Canvas"
            />
          ) : (
            <meta name="twitter:title" content={props.pageTitle} />
          )}
          {props.pageName == "tools" ? (
            <meta
              name="twitter:description"
              content="The Canvas plays the role of a guide for the Agile Coaches."
            />
          ) : (
            <meta name="twitter:description" content={props.metaDesc} />
          )}

          {props.pageName == "tools" ? (
            <meta property="og:image" content={tools} />
          ) : null}
          {props.pageName == "tools" ? (
            <meta name="twitter:image" content={tools} />
          ) : null}

          {props.pageName == "courses" ? (
            <meta
              property="og:title"
              content="Explore our online and In-Person training to help you succeed with agile"
            />
          ) : (
            <meta property="og:title" content={props.pageTitle} />
          )}
          {props.pageName == "courses" ? (
            <meta
              property="og:description"
              content="Explore our Agile courses to foster experiential learning through practical and actionable advice, tips andreal-world examples for building a capable and resilient Organisation."
            />
          ) : (
            <meta property="og:description" content={props.metaDesc} />
          )}

          {props.pageName == "courses" ? (
            <meta
              name="twitter:title"
              content="Explore our online and In-Person training to help you succeed with agile"
            />
          ) : (
            <meta name="twitter:title" content={props.pageTitle} />
          )}
          {props.pageName == "courses" ? (
            <meta
              name="twitter:description"
              content="Explore our Agile courses to foster experiential learning through practical and actionable advice, tips andreal-world examples for building a capable and resilient Organisation."
            />
          ) : (
            <meta name="twitter:description" content={props.metaDesc} />
          )}

          {props.pageName == "courses" ? (
            <meta property="og:image" content={coursesBanner} />
          ) : null}
          {props.pageName == "courses" ? (
            <meta name="twitter:image" content={coursesBanner} />
          ) : null}

          {props.pageName == "aboutus" ? (
            <meta property="og:image" content={aboutUsBanner} />
          ) : null}
          {props.pageName == "aboutus" ? (
            <meta name="twitter:image" content={aboutUsBanner} />
          ) : null}

          {props.pageName == "contactus" ? (
            <meta property="og:image" content={contactUsBanner} />
          ) : null}
          {props.pageName == "contactus" ? (
            <meta name="twitter:image" content={contactUsBanner} />
          ) : null}

          {props.pageName == "agile-coach-competencies" ? (
            <meta property="og:image" content={props.image} />
          ) : null}
          {props.pageName == "agile-coach-competencies" ? (
            <meta name="twitter:image" content={props.image} />
          ) : null}

          {props.pageName == "team-coaching-capabilities" ? (
            <meta property="og:image" content={props.image} />
          ) : null}
          {props.pageName == "team-coaching-capabilities" ? (
            <meta name="twitter:image" content={props.image} />
          ) : null}

          {props.pageName == "business-coaching-capabilities" ? (
            <meta property="og:image" content={props.image} />
          ) : null}
          {props.pageName == "business-coaching-capabilities" ? (
            <meta name="twitter:image" content={props.image} />
          ) : null}

          {props.pageName == "leadership-coaching-capabilities" ? (
            <meta property="og:image" content={props.image} />
          ) : null}
          {props.pageName == "leadership-coaching-capabilities" ? (
            <meta name="twitter:image" content={props.image} />
          ) : null}

          {props.pageName == "promote-self-management" ? (
            <meta property="og:image" content={props.image} />
          ) : null}
          {props.pageName == "promote-self-management" ? (
            <meta name="twitter:image" content={props.image} />
          ) : null}


          {props.pageName == "maintaining-authentic-distance" ? (
            <meta property="og:image" content={props.image} />
          ) : null}
          {props.pageName == "maintaining-authentic-distance" ? (
            <meta name="twitter:image" content={props.image} />
          ) : null}

          {props.pageName == "promote-software-craftsmanship" ? (
            <meta property="og:image" content={props.image} />
          ) : null}
          {props.pageName == "promote-software-craftsmanship" ? (
            <meta name="twitter:image" content={props.image} />
          ) : null}

          {props.pageName == "tryscrum-trainer" ? (
            <meta property="og:image" content={props.image} />
          ) : null}
          {props.pageName == "tryscrum-trainer" ? (
            <meta name="twitter:image" content={props.image} />
          ) : null}

          {props.pageName == "webcast" ? (
            <meta property="og:image" content={props.image} />
          ) : null}
          {props.pageName == "webcast" ? (
            <meta name="twitter:image" content={props.image} />
          ) : null}

          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,500i,600,700,800%7CSatisfy&display=swap"
            rel="stylesheet"
          />
    
        </Helmet>
     
        <div className="page-wrapper">{props.children}</div>
       
      </div>
    </>
  )
}

export default Layout
