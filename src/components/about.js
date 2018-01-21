import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class About extends Component {
  render() {

    const {
      profileImage,
      aboutHeader,
      aboutText,
      iconSet
    } = this.props;

    // TODO: Need to fix in order to scale for all cases
    let gridDivide = 12 / iconSet.length;
    let gridClass = 'col-md-' + gridDivide;

    return (
      <div className="about" id="about">
        <div className="container">
          <div className="row about-section">
            <ProfileImage
              profileImagePath={profileImage}
            />
            <ProfileText
              aboutHeader={aboutHeader}
              aboutText={aboutText}
            />
          </div>
          <div className='row about-section'>
            {iconSet.map((icon, i) => {
              return (
                <div className={gridClass + ' col-4'} key={i}>
                  <img className='about-icon' src={icon.src} alt='icon'/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  aboutHeader: PropTypes.string,
  aboutText: PropTypes.string,
  iconSet: PropTypes.array,
  profileImage: PropTypes.string
};


class ProfileImage extends Component {
  render() {
    const {
      profileImagePath
    } = this.props;

    return (
      <div className="col-md-6 col-lg-4 about-content profile-picture-container">
        <img
          className="profile-picture"
          alt="User Profile Picture"
          src={profileImagePath}
        />
      </div>
    );
  }
}

ProfileImage.propTypes = {
  profileImagePath: PropTypes.string,
};


class ProfileText extends Component {

  render() {

    const {
      aboutHeader,
      aboutText,
    } = this.props;

    return (
      <div className="col-md-6 col-lg-8 about-content">
        <h2>{aboutHeader}</h2>
        <div className="about-text">
          <p>{aboutText}</p>
        </div>
      </div>
    );
  }

}

ProfileText.propTypes = {
  aboutHeader: PropTypes.string,
  aboutText: PropTypes.string,
};
