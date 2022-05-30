import { $fetch } from 'ohmyfetch';

const GITHUB_QUERY = `query {
    user(login: "chrstnfrrs") {
        repositories (first: 100) {
            nodes {
                id
                name
                homepageUrl
                url
                description
                repositoryTopics (first: 100) {
                    nodes {
                        topic {
                            name
                        }
                    }
                }
            }
        }
    }
}`;

const frameworks = ['vue', 'react', 'solid', 'svelte'];

// @ts-ignore
export default defineEventHandler(async (event) => {
  const { data } = await $fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
    body: {
      query: GITHUB_QUERY,
    },
  });

  const projects = data.user.repositories.nodes
    .filter((repo) =>
      repo.repositoryTopics.nodes.some(
        (repoTopic) => repoTopic.topic.name === 'frontend-mentor',
      ),
    )
    .reduce((acc, repo) => {
      const framework = repo.repositoryTopics.nodes.find((repoTopic) =>
        frameworks.includes(repoTopic.topic.name),
      )?.topic.name;

      acc.push({
        description: repo.description,
        framework: framework,
        homepageUrl: repo.homepageUrl,
        name: repo.name,
        url: repo.url,
      });

      return acc;
    }, []);

  return projects;
});
