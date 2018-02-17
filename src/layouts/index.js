import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './index.module.sass'
import './index.sass'

const TemplateWrapper = props => {

  const setTheme = theme => {
    console.log(`setTheme(${theme})`);
  };

  return (
    <div className={styles.flexWrapper}>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.container}>
          <main>
            {props.children({ ...props, setTheme })}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
