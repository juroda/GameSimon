import React, { Component } from 'react';
import { Flex, Box } from 'reflexbox';

import GoOctoface from 'react-icons/lib/go/octoface';
import TiSocialInstagram from 'react-icons/lib/ti/social-instagram';
import TiSocialLinkedin from 'react-icons/lib/ti/social-linkedin';
import TiSocialTwitter from 'react-icons/lib/ti/social-twitter';
import { REPO_URL_GIT, REPO_URL_INSTAGRAM, REPO_URL_LINKEDIN, REPO_URL_TWITTER } from '../constants';
import Header from '../components/Header';
import { connect } from 'react-redux';

export class Shell extends Component {
  render() {
    const { highscore, style, children } = this.props;
    return (
      <Flex align="center" justify="center" style={{ width: '100%', height: '100%', ...style }} >
        <Header p={2} justify="space-between" flex>
          <Box>
            HIGH SCORE: {highscore} <br />
          </Box>
          <Box>
            <a href={REPO_URL_GIT} target="_blank">
              <GoOctoface size={40} color={'white'} />
            </a>
            <a href={REPO_URL_INSTAGRAM} target="_blank">
              <TiSocialInstagram size={40} color={'white'} margin-left={'5px'} />
            </a>
            <a href={REPO_URL_TWITTER} target="_blank">
              <TiSocialTwitter size={40} color={'white'} margin-left={'5px'} />
            </a>
            <a href={REPO_URL_LINKEDIN} target="_blank">
              <TiSocialLinkedin size={40} color={'white'} margin-left={'5px'} />
            </a>
          </Box>
        </Header>
        <Box>
          {children}
        </Box>
      </Flex>
    );
  }
}

export default connect(
  ({ game }) => game,
)(Shell);
