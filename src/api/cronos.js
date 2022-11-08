import { cronos } from "./rest";

export const getUserCourses = () => {
  cronos.post('/graphql', {
    query: `query {
      UserCourses(userCode: "12345"){
          courseCode
          groupCode
          name   
          professor{
              code
              username
              name
          }
          schedules{
              day
              building
              classroom
              timeOfStart
              timeOfEnd
          }            
      }
  }`,
    variables: {}
  }).then((response) => {
    return response.data.UserCourses;
  }).catch(() => {
    console.log('Error!!');
    return [];
  });
}
