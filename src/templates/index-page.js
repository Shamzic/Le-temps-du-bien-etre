import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features2 from "../components/Features2";
import BlogRoll from "../components/BlogRoll";

import "./index-page-style.css";
import { Helmet } from "react-helmet";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <Helmet>
      <meta charSet='utf-8' />
      <link
        href='https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Open+Sans&display=swap'
        rel='stylesheet'
      />
    </Helmet>
    <div
      className='full-width-image margin-top-0'
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
          fontFamily: "Cinzel Decorative, cursive",
        }}
      >
        <h1
          className='has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen'
          style={{
            boxShadow:
              "rgb(11, 19, 3, 0.6) 0.5rem 0px 0px, rgb(11, 19, 3, 0.6) -0.5rem 0px 0px",
            backgroundColor: "rgb(11, 19, 3, 0.6)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
            borderRadius: "15px",
          }}
        >
          {title}
        </h1>
        <h3
          className='has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen'
          style={{
            boxShadow:
              "rgb(11, 19, 3, 0.6) 0.5rem 0px 0px, rgb(11, 19, 3, 0.6) -0.5rem 0px 0px",
            backgroundColor: "rgb(11, 19, 3, 0.6)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
            textAlign: "center",
            borderRadius: "15px",
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section
      className='section section--gradient'
      style={{
        fontFamily: "Open Sans",
      }}
    >
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div className='content'>
                  <div
                    className='tile'
                    style={{
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
                    <h4 className='title'>{mainpitch.title}</h4>
                  </div>
                  <div className='tile'>
                    <p
                      className='subtitle'
                      style={{
                        fontStyle: "italic",
                        marginBottom: "5%",
                        fontSize: "17px",
                      }}
                    >
                      {mainpitch.description}
                    </p>
                  </div>
                </div>
                <div className='columns'>
                  <div className='column is-12'>
                    <h4
                      className='has-text is-size-3'
                      style={{
                        textAlign: "center",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      {heading}
                    </h4>
                    <p style={{ fontFamily: "Open Sans, sans-serif" }}>
                      {description}{" "}
                    </p>
                  </div>
                </div>
                <Features2 gridItems={intro.blurbs} />
                <div className='columns'>
                  <div className='column is-12 has-text-centered'>
                    <Link className='btn' to='/products'>
                      Voir toutes les prestations
                    </Link>
                  </div>
                </div>
                <div className='column is-12'>
                  <h3 className='has-text-weight-semibold is-size-3.5'>
                    Dernières actualités
                  </h3>
                  <BlogRoll />
                  <div className='column is-12 has-text-centered'>
                    <Link className='btn' to='/blog'>
                      Lire plus
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
