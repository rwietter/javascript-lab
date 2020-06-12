import React, { Component } from "react";
import PropTypes from "prop-types";
import { kea } from "kea";

import { put, call } from "redux-saga/effects";
import { delay } from "redux-saga";

const API_URL = "https://api.github.com";

@kea({
  actions: () => ({
    setUsername: (username) => ({ username }),
    setRepositories: (repositories) => ({ repositories }),
    setFetchError: (message) => ({ message }),
  }),

  reducers: ({ actions }) => ({
    username: [
      "keajs",
      PropTypes.string,
      {
        [actions.setUsername]: (_, payload) => payload.username,
      },
    ],
    repositories: [
      [],
      PropTypes.array,
      {
        [actions.setUsername]: () => [],
        [actions.setRepositories]: (_, payload) => payload.repositories,
      },
    ],
    isLoading: [
      true,
      PropTypes.bool,
      {
        [actions.setUsername]: () => true,
        [actions.setRepositories]: () => false,
        [actions.setFetchError]: () => false,
      },
    ],
    error: [
      null,
      PropTypes.string,
      {
        [actions.setUsername]: () => null,
        [actions.setFetchError]: (_, payload) => payload.message,
      },
    ],
  }),

  selectors: ({ selectors }) => ({
    sortedRepositories: [
      () => [selectors.repositories],
      (repositories) =>
        repositories.sort((a, b) => b.stargazers_count - a.stargazers_count),
      PropTypes.array,
    ],
  }),

  start: function* () {
    const { setUsername } = this.actions;
    const username = yield this.get("username");
    yield put(setUsername(username));
  },

  takeLatest: ({ actions, workers }) => ({
    [actions.setUsername]: workers.fetchRepositories,
  }),

  workers: {
    *fetchRepositories(action) {
      const { setRepositories, setFetchError } = this.actions;
      const { username } = action.payload;

      yield delay(100); // debounce for 100ms

      const url = `${API_URL}/users/${username}/repos?per_page=250`;
      const response = yield window.fetch(url);

      if (response.status === 200) {
        const json = yield response.json();
        yield put(setRepositories(json));
      } else {
        const json = yield response.json();
        yield put(setFetchError(json.message));
      }
    },
  },
})
class ExampleGithubScene extends Component {
  render() {
    const {
      username,
      isLoading,
      repositories,
      sortedRepositories,
      error,
    } = this.props;
    const { setUsername } = this.actions;

    return (
      <div className="example-github-scene">
        <div style={{ marginBottom: 20 }}>
          <h1>Search for a github user</h1>
          <input
            value={username}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : repositories.length > 0 ? (
          <div>
            Found {repositories.length} repositories for user {username}!
            {sortedRepositories.map((repo) => (
              <div key={repo.id}>
                <a href={repo.html_url} target="_blank">
                  {repo.full_name}
                </a>
                {" - "}
                {repo.stargazers_count} stars, {repo.forks} forks.
              </div>
            ))}
          </div>
        ) : (
          <div>{error ? `Error: ${error}` : "No repositories found"}</div>
        )}
      </div>
    );
  }
}
export default ExampleGithubScene;
