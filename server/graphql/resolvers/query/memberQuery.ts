import { ApolloError } from "apollo-server-express";
import { Members } from "../../../models/memberModel";


module.exports = {
    findMember: async (parent:{parent:any}, args:{args:any, fields:any}, context: {context:any}, info: {info:any}) => {
        const {_id,serverID} = args.fields;
        console.log("Query > findMember > args.fields = " , args.fields)
        if (!_id) {
            throw new ApolloError("No id provided");
          }
        let memberData = await Members.findOne({ _id: _id })
        console.log("memberData = " , memberData)

        return memberData
    }
}