import React from "react"
import SEO from "../components/seo"
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components'
import Layout from "../components/layout"
// import { Link } from "gatsby"
// import RetroButton from "../components/retroButton"



const Classes = styled.div`
  .container{
   padding-top:96px;
  }
  a{
    margin:8px;
    padding:16px 8px;
  }
  img{
    filter: grayscale(90%);
  }
  img:hover{
    filter: grayscale(5%);
  }
`


const IndexPage = ({ location }) => {

  return (
    <Layout animateKey={location.key}>
      <SEO title="Home" />
      <Classes>
        <Container fluid="lg" className="container">
          <Row
            className="d-flex justify-content-center">
            <Col className="d-flex align-items-center justify-content-center">
              <div>
                <h1> <span role="img" aria-label="hello">👋</span> Hey, I'm Hamza !!</h1>
                <p>I’m a JAMSTACK developer, and a designer.</p>
              </div>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <img src="img/jamstack.png" alt="jamstack" />
            </Col>
          </Row>
        </Container>
        <Container
          fluid="lg"
          className="mt-5 container">
          <h3 className="d-block">Technologies i use</h3>
          <Row>
            <Col xs={4}
              className="d-flex flex-column align-items-center">
              <h2>DATA SOURCES</h2>

              <a
                href="https://strapi.io/">
                <img src="img/StrapiJS.svg" alt="Strapi" width="128px" />
              </a>
              <a
                href="https://www.netlifycms.org/">
                <img src="img/NetlifyCMS.svg" alt="Netlify CMS" width="128px" />
              </a>

            </Col>
            <Col xs={4}
              className="d-flex flex-column align-items-center">
              <h2>BUILD</h2>

              <a
                href="https://getbootstrap.com/">
                <img src="img/Bootstrap.svg" alt="Bootstrap" width="128px" />
              </a>
              <a
                href="https://reactjs.org/">
                <img src="img/ReactJS.svg" alt="React" width="128px" />
              </a>
              <a
                href="https://www.gatsbyjs.com/">
                <img src="img/GatsbyJS.svg" alt="Gatsby" width="128px" />
              </a>

            </Col>
            <Col xs={4}
              className="d-flex flex-column align-items-center">
              <h2>DEPLOY 	&amp; CDN</h2>

              <a
                href="https://www.netlify.com/" >
                <img src="img/Netlify.svg" alt="Netlify" width="128px" />
              </a>
              <a
                href="https://github.com/" >
                <img src="img/GitHub.svg" alt="Netlify" width="128px" />
              </a>
            </Col>
          </Row>
        </Container>
      </Classes>
    </Layout>
  )
}


export default IndexPage
