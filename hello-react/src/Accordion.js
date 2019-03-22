import css from "./Accordion.module.css";

import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import { random } from 'lodash-es';

class Accordion extends Component {
  render() {
    /** @type {string[]} items */
    let { title = "", items = [], opened = false, selected = "", onSelected, onToggle } = this.props;

    items = items.map(item => {
      const classes = classNames(css.item, {
        [css.itemSelected]: item === selected
      });

      console.log(random(0, Number.MAX_SAFE_INTEGER));

      return (
        <div className={classes} key={item} onClick={() => onSelected(item)}>
          {item}
        </div>
      );
    });

    // let icon;
    // if (opened) {
    //   icon = <span>open</span>;
    // } else {
    //   icon = <span>close</span>;
    // }

    return (
      <div className="Accordion">
        <div className={css.title} onClick={onToggle}>
          <span>{title}</span>
          {opened ? (
            <span dangerouslySetInnerHTML={{ __html: "&uarr;" }} />
          ) : (
            <span dangerouslySetInnerHTML={{ __html: "&darr;" }} />
          )}
        </div>
        {opened && <div className="Accordion-items">{items}</div>}
      </div>
    );
  }
}

Accordion.propTypes = {
  title: PropTypes.string,
};

export { Accordion };
