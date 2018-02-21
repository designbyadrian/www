import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import Nav from '../components/Nav'

import styles from './page.module.sass'

export default ({ data }) => {
  const tags = data.allContentfulTag.edges.map(({ node }) => node);

  return (
    <span>
      <Helmet
        title={`Nothing by Design by Adrian`}
      />
      <div className={styles.container}>
        <FontAwesomeIcon size="7x" icon={['fas', 'meh']} />
        <h1 className={styles.header}>Oops</h1>
        <p className={styles.p}>We're all out of that one!<br />How about something else from the menu:</p>
        <Nav tags={tags} links />
      </div>
    </span>
  );
}

export const query = graphql`
  query MissingPageQuery {
    allContentfulTag {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`
