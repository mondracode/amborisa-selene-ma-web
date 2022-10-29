import { cronos } from "./rest";

export const getCourses = async () => {
  const result = await cronos.post('/graphql', {
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
  });

  console.log(result.data.data);
}
