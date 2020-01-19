import React from 'react'
import Layout from '../../components/Layout'
import { Link } from 'gatsby'

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <br/>
          <h2>Merci pour votre mail, vous aurez une réponse dans les plus brefs délais !</h2>
          <br/>
          <Link to="/" className="has-text-primary"> <button className="button">Retourner à l'accueil</button></Link>
        </div>
      </div>
    </section>
  </Layout>
)
