import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

export default class Footer extends Component {
  render() {
    const {
      copyrightText,
      socialAccounts
    } = this.props;
    return (
      <footer>
        <div className='container'>
          <div className='contact'>
            {
              socialAccounts.map((account, i) => {
                return (
                  <SocialIcon
                    key={i}
                    socialAccount={{
                      name: account.name,
                      link: account.link
                    }}
                  />
                );
              })
            }
            <p dangerouslySetInnerHTML={{
              __html: copyrightText ? copyrightText
                : 'Copyright &copy; 2017 Bao'
            }}/>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  copyrightText: PropTypes.string,
  socialAccounts: PropTypes.array
};

class SocialIcon extends Component {

  render() {
    const {
      socialAccount
    } = this.props;
    return (
      <div className='social-link'>
        <a href={socialAccount.link}>
          <FontAwesome
            name={socialAccount.name.toLowerCase()}
          />
        </a>
      </div>
    );
  }
}

SocialIcon.propTypes = {
  socialAccount: PropTypes.object
};
