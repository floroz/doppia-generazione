import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./404.module.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Pagina non trovata" />
    <h1 className={styles.title}>Ops.. questa pagina non esiste.</h1>
    <Link to="/" className={styles.link}>
      Ritorna alla Home Page
    </Link>
  </Layout>
)

export default NotFoundPage
