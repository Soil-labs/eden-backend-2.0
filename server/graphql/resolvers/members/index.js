"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findMember_1 = __importDefault(require("./query/findMember"));
const addMember_1 = __importDefault(require("./mutation/addMember"));
exports.default = {
    // Queries
    findMember: findMember_1.default,
    // Mutations
    addMember: addMember_1.default,
};
