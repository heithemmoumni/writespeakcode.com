import React from 'react'
import Img from 'gatsby-image'

import styles from './section.module.css'

const Section = ({ children, img, imgAlt, imgStyle }) => {
  return (
    <section className={img ? styles.photoSection : styles.section}>
      {img ? (
        <Img
          alt={imgAlt}
          fluid={img}
          imgStyle={imgStyle}
          className={styles.image}
        />
      ) : (
        ''
      )}
      <div className={styles.content}>{children}</div>
    </section>
  )
}

export default Section
