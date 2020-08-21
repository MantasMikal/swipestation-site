import React from "react";
import PropTypes from "prop-types";
import classnames from 'classnames'
import { useDarkContext } from "Context/DarkContext";

import BlockContent from "../../block-content";
import Container from "Primitive/Container";
import Type from "Primitive/Type";

import styles from "./ContactSection.module.scss";


const ContactSection = ({ body, venues, title }) => {
  const isDark = useDarkContext();
  return (
    <Container
      className={classnames(isDark && styles.isDark)}
      size="wide"
      center
      gutter
      spacious
      withNavSpace
      as="section"
    >
      <Type as="h1" size="displayLarge" className={styles.Title}>
        {title}
      </Type>
      {body && (
        <div className={styles.Body}>
          <BlockContent blocks={body} />
        </div>
      )}
    </Container>
  );
};

ContactSection.propTypes = {};

export default ContactSection;
