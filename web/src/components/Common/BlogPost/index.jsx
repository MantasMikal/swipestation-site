import React from "react";
import { object, string, array } from "prop-types";
import { formatDate } from "lib/helpers";
import { useScrollPercentage } from "react-scroll-percentage";

import BlockContent from "../../block-content";
import Container from "Primitive/Container";
import Media from "Common/Media";
import Type from "Primitive/Type";
import Badge from "Common/Badge";
import SocialBlock from "../SocialShare/SocialBlock";

import styles from "./BlogPost.module.scss";


const BlogPost = (props) => {
  const {
    _rawBody,
    title,
    mainImage,
    publishedAt,
    category,
    url,
  } = props;
  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  });
  return (
    <article className={styles.Root}>
      <Media media={mainImage} alt={title} />
      <div
        className={styles.LoadingBar}
        style={{ width: `${percentage * 100}%` }}
      />
      <Container className={styles.Container} size="medium" gutter center>
        <div ref={ref} className={styles.Content}>
          {title && (
            <div className={styles.TitleWrapper}>
              <Type as="h1" size="displayLarge" className={styles.Title}>
                {title}
              </Type>
              <div className={styles.DateWrapper}>
                {publishedAt && (
                  <Type as="time" size="small" className={styles.Date}>
                    {formatDate(publishedAt)}
                  </Type>
                )}
              </div>
              <div className={styles.CategoryWrapper}>
                {category &&
                  category.length > 0 &&
                  category.map((cat) => (
                    <Badge content={cat.title} color={cat.color.hex} />
                  ))}
              </div>
            </div>
          )}
          {_rawBody && <BlockContent blocks={_rawBody} />}
        </div>
        <div className={styles.SocialShare}>
          <SocialBlock url={url} />
        </div>
      </Container>
    </article>
  );
};

BlogPost.propTypes = {
  _rawBody: array,
  title: string,
  mainImage: object,
  publishedAt: string,
  category: array,
  url: string,
};

export default BlogPost;
