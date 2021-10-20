import React, { Component } from 'react'
import Head from 'next/head'

import Navb from '../components/Nav'

import { Container, Row, Col } from 'react-bootstrap';

export default function withLayout(Child) {
  return class extends Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <>
          <Head>
            <title>Template</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navb />
          <Container>
            <Child {...this.props} />
          </Container>
        </>
      )
    }
  }
}
