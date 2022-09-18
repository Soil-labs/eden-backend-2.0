import { ApolloError } from "apollo-server-express";
import { Projects } from "../../../../models/projectModel";

const projects = async (parent: any, args: any, context: any, info: any) => {
  // console.log("parent 2321= " , parent)
  // console.log("parent 2321= " , parent.projects)

  const projectsInfo = parent.projects;

  try {
    if (!projectsInfo || projectsInfo.length === 0) {
      return [];
    }

    // console.log("projectsInfo = " , projectsInfo)

    let position: any = {};

    let projectID_all = projectsInfo.map((info: any, idx: number) => {
      position[info.projectID] = idx;
      return info.projectID;
    });

    let projectData = await Projects.find({ _id: projectID_all });

    //console.log("position = " , position)
    //console.log("projectID_all = " , projectID_all)
    //console.log("projectData = " , projectData)

    // projectsInfo = projectsInfo.map(info=>{return ({
    //    info: info.projectID
    // })})

    let projectData_disp = [];
    for (let i = 0; i < projectData.length; i++) {
      let info = projectData[i];

      let displayData: any = {
        info: info._doc,
        roleID: projectsInfo[position[info._id]].roleID,
        champion: projectsInfo[position[info._id]].champion,
        favorite: projectsInfo[position[info._id]].favorite,
        phase: projectsInfo[position[info._id]].phase,
      };

      let roleUser;

      displayData.info.role.filter((roleN: any) => {
        if (roleN.id == displayData.roleID) {
          roleUser = roleN;
        }
      });

      if (roleUser) displayData = { ...displayData, role: roleUser };

      projectData_disp.push(displayData);
    }

    //console.log("projectData_disp = " , projectData_disp)

    return projectData_disp;
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "DATABASE_SEARCH_ERROR", {
      component: "userResolver > skills",
      user: context.req.user?._id,
    });
  }
};
export default projects;
