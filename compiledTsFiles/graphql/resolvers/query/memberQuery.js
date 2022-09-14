"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const memberModel_1 = require("../../../models/memberModel");
module.exports = {
    findMember: (parent, args, context, info) => __awaiter(void 0, void 0, void 0, function* () {
        const { _id, serverID } = args.fields;
        console.log("Query > findMember > args.fields = ", args.fields);
        if (!_id) {
            throw new apollo_server_express_1.ApolloError("No id provided");
        }
        let memberData = yield memberModel_1.Members.findOne({ _id: _id });
        console.log("memberData = ", memberData);
        return memberData;
    })
};
