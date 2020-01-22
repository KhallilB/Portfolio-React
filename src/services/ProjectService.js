import axios from 'axios';

export default class ProjectService {
  constructor() {
    this.addProject = this.addProject.bind(this);
    this.getProjects = this.getProjects.bind(this);
  }

  addProject(projectName, description, repository, url) {
    return axios
      .post(
        'https://khallib-portfolio.herokuapp.com/api/newproject',
        {
          projectName,
          description,
          repository,
          url
        }
      )
      .then(res => {
        console.log(res);
        return Promise.resolve(res);
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }

  getProjects() {
    return axios
      .get(
        'https://khallib-portfolio.herokuapp.com/api/allprojects'
      )
      .then(res => {
        console.log(res);
        return Promise.resolve(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
