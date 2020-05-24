import React from "react";
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import { Helmet } from "react-helmet";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <meta charSet='utf-8' />
          <link
            href='https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Open+Sans&display=swap'
            rel='stylesheet'
          />
        </Helmet>
        <div
          className='full-width-image-container margin-top-0'
          style={{
            backgroundImage: `url('/img/blog-couverture.jpg')`,
            backgroundPosition: "center center",
            fontFamily: "Cinzel Decorative, cursive",
          }}
        >
          <h1
            className='has-text-weight-bold is-size-1'
            style={{
              boxShadow:
                "0.5rem 0 0 rgb(11, 19, 3, 0.3), -0.5rem 0 0 rgb(11, 19, 3, 0.3)",
              backgroundColor: "rgb(11, 19, 3, 0.3)",
              color: "white",
              padding: "1rem",
              borderRadius: "15px",
            }}
          >
            Actualités
          </h1>
        </div>
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
