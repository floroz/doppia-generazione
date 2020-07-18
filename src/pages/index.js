import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <img src={require("../images/doppiag-logo.png")} className="logo" />
      <h1 style={{ color: "var(--secondary-color)" }} className="title">
        @doppiagenerazione
      </h1>
      <img
        src={require("../images/doppiag-hero.jpg")}
        style={{ maxWidth: 450 }}
        className="hero"
      />
    </Layout>
  )
}

export default IndexPage
