import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import Content, { HTMLContent } from "../components/Content";

export const AboutPageTemplate = ({
  title,
  firstTitle,
  firstParagraph,
  secondTitle,
  secondParagraph,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className='section section--gradient'>
      <Helmet>
        <meta charSet='utf-8' />
        <link
          href='https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Open+Sans&family=Sacramento&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <div className='container'>
        <div
          className='full-width-image-container margin-top-1'
          style={{
            backgroundImage: `url(/img/arbre_de_vie_gustav_klimt.jpg)`,
            backgroundPosition: "center center",
            marginTop: "-10%",
            height: "450px",
            fontFamily: "Cinzel Decorative, cursive",
          }}
        >
          <div className='columns'>
            <div
              className='column is-7'
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2
                className='title is-size-1 has-text-weight-bold is-bold-light'
                style={{
                  boxShadow:
                    "0.5rem 0 0 rgb(11, 19, 3, 0.3), -0.5rem 0 0 rgb(11, 19, 3, 0.3)",
                  backgroundColor: "rgb(11, 19, 3, 0.3)",
                  color: "white",
                  padding: "1rem",
                  borderRadius: "15px",
                  fontFamily: "Cinzel Decorative, cursive",
                }}
              >
                {title}
              </h2>
            </div>
            <div className='column' style={{ textAlign: "center" }}>
              <img
                src='/img/catherine.jpg'
                alt=''
                style={{
                  maxWidth: "45%",
                  height: "auto",
                  borderRadius: "160px",
                }}
              />
            </div>
          </div>
        </div>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <div
              className='section'
              style={{
                textAlign: "justify",
                fontFamily: "Open Sans",
                marginTop: "25px",
              }}
            >
              <h3
                className='has-text'
                style={{
                  textAlign: "center",
                  fontSize: "35px",
                  fontFamily: "Sacramento, cursive",
                  fontWeight: "bold",
                }}
              >
                {firstTitle}
              </h3>

              <div>{firstParagraph}</div>
              <br />
              <div>{secondParagraph}</div>
              <h3
                className='has-text'
                style={{
                  textAlign: "center",
                  fontSize: "35px",
                  fontFamily: "Sacramento, cursive",
                  marginTop: "20px",
                  fontWeight: "bold",
                }}
              >
                {secondTitle}
              </h3>
              <PageContent className='content' content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  firstTitle: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        firstTitle={post.frontmatter.firstTitle}
        firstParagraph={post.frontmatter.firstParagraph}
        secondTitle={post.frontmatter.secondTitle}
        secondParagraph={post.frontmatter.secondParagraph}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        firstTitle
        firstParagraph
        secondTitle
        secondParagraph
      }
    }
  }
`;
