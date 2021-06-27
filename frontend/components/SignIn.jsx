import React from 'react';
import GitHubIcon from './Icons/GitHubIcon';
import constants from '../constants';

import '../assets/stylesheets/login.scss';

const SignIn = () => {
  const handleClick = (provider) => {
    if (provider === 'github') {
      window.location = `${constants.GITHUB_AUTHORIZE_URL}?client_id=${constants.GITHUB_CLIENT_ID}&redirect_uri=${constants.GITHUB_REDIRECT_URI}&scope=read:user`;
    } else {
      window.location = `${constants.GITLAB_AUTHORIZE_URL}?client_id=${constants.GITLAB_CLIENT_ID}&redirect_uri=${constants.GITLAB_REDIRECT_URI}&response_type=code&scope=read_user+read_repository`;
    }
  };

  return (
    <div className="container">
      <div className="login">
        <h1 className="login__heading">Hey there!</h1>
        <p className="login__description">
          To get started, login or signup via your GitHub or GitLab account.
        </p>
        <div className="login__links">
          <button
            type="button"
            className="login__links__button"
            onClick={() => handleClick('github')}
          >
            <div className="login__links__button__icon">
              <GitHubIcon />
            </div>
            Login via GitHub
          </button>
          <button
            type="button"
            className="login__links__button"
            onClick={() => handleClick('gitlab')}
          >
            <div className="login__links__button__icon">
              <GitHubIcon />
            </div>
            Login via GitLab
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
