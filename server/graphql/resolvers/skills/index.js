"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findSkills_1 = __importDefault(require("./query/findSkills"));
const findSkill_1 = __importDefault(require("./query/findSkill"));
const createSkill_1 = __importDefault(require("./mutation/createSkill"));
const createSkills_1 = __importDefault(require("./mutation/createSkills"));
exports.default = {
    // Queries
    Query: { findSkills: findSkills_1.default, findSkill: findSkill_1.default },
    // Mutations
    Mutation: { createSkill: createSkill_1.default, createSkills: createSkills_1.default },
};
