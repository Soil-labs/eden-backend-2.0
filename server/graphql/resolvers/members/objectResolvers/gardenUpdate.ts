import { ApolloError } from "apollo-server-express";

const gardenUpdate = async (parent: any, args: any, context: any, info: any) => {
  // console.log("parent = " , parent)

  try {
    const gardenUpdate = parent.gardenUpdate;

    // let epicData = await Epic.find({ _id: gardenUpdate.epicID });

    // let taskData = await ProjectUpdate.find({ _id: gardenUpdate.taskID });

    return {
      //   epic: epicData,
      //   task: taskData,
    };
  } catch (err: any) {
    throw new ApolloError(err.message, err.extensions?.code || "DATABASE_SEARCH_ERROR", {
      component: "userResolver > members",
      user: context.req.user?._id,
    });
  }
};
export default gardenUpdate;
