import api, { route } from "@forge/api";
import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getText', (req) => {
    console.log(req);

    return 'Hello, world!';
});


export const getProjectsData = async (issueIdOrKey) => {

    const response = await api.asApp().requestJira(route`/rest/api/3/project?expand=lead`, {
        headers: {
            'Accept': 'application/json'
        }
    });

    const projectData = await response.json();
    return projectData;    
  };


  export const getProjectsIssueData = async ({payload,context}) => {

    const response = await api.asApp().requestJira(route`/rest/api/3/search?jql=project=${payload.id}`, {
        headers: {
            'Accept': 'application/json'
        }
    });
  
    const issueData = await response.json();
    return issueData;
  };

 resolver.define('getProjectsData', getProjectsData);
 resolver.define('getProjectsIssueData', getProjectsIssueData);

export const handler = resolver.getDefinitions();

