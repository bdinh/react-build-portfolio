import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import PropTypes from 'prop-types';

export default class Landing extends Component {
  render() {
    const {
      headerText,
      subheaderText,
      pageScrollText
    } = this.props;

    return (
      <div className='landing-strip'>
        <p className='landing-header'>{headerText}</p>
        <p className='landing-subheader'>
          {subheaderText}
        </p>
        <div className='page-scroll'>
          <a className='page-scroll-text' href='#'>
            {pageScrollText ? pageScrollText : 'Learn More'}
            <br/>
            <FontAwesome
              name='chevron-down'
            />
          </a>
        </div>
      </div>
    );
  }

}

Landing.propTypes = {
  headerText: PropTypes.string,
  pageScrollText: PropTypes.string,
  subheaderText: PropTypes.string
};
