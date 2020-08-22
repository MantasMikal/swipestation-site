import React from "react";
import styles from "./Grid.module.scss";

const Grid = (props) => {
  const { style } = props;
  return (
    <div className={styles.Grid} style={style}>
      {props.children}
    </div>
  );
};

export default Grid;
