import React from "react"
import Layout from "../components/layout"
import styles from "./index.module.scss"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Doppia Generazione" />
      <img
        src={require("../images/doppiag-logo.png")}
        className={styles.logo}
      />

      <h1 className={styles.title}>
        <a href="https://www.instagram.com/doppia_generazione/">
          @doppiagenerazione
        </a>
      </h1>
      <iframe
        src="https://open.spotify.com/follow/1/?uri=spotify:user:mzmgpr7kev4o0d2bobfbaj1k0&size=basic&theme=light"
        width="200"
        height="25"
        scrolling="no"
        frameBorder="0"
        className={styles.spotify}
        allowtransparency="true"
      ></iframe>
      <div className={styles.hero}>
        <h2>Doppia Generazione</h2>
        <p>
          nasce con l'obiettivo di colmare un gap informativo e generazionale
          nel mondo dell'imprenditoria italiana, focalizzandosi su modelli di
          business duraturi e radicati ma, allo stesso tempo, sull'affermarsi di
          realta' imprenditoriali 2.0, vogliose di cambiamento e nuove
          opportunità
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
