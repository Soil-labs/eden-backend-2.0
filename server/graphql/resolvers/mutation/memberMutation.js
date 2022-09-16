"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const memberModel_1 = require("../../../models/memberModel");
module.exports = {
  addMember: (parent, args, context, info) =>
    __awaiter(void 0, void 0, void 0, function* () {
      const {
        discordName,
        _id,
        discordAvatar,
        discriminator,
        bio,
        hoursPerWeek,
        previusProjects,
        invitedBy,
        serverID,
      } = args.fields;
      console.log("Mutation > addMember > args.fields = ", args.fields);
      if (!_id)
        throw new apollo_server_express_1.ApolloError("_id is required, the IDs come from Discord");
      let fields = {};
      fields._id = _id;
      fields.registeredAt = new Date();
      if (discordName) fields.discordName = discordName;
      if (discordAvatar) fields.discordAvatar = discordAvatar;
      if (discriminator) fields.discriminator = discriminator;
      if (bio) fields.bio = bio;
      //let membersData = await Members.findOne({ _id: fields._id })
      let membersData = yield new memberModel_1.Members(fields);
      membersData.save();
      return membersData;
    }),
};
