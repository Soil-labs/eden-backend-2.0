"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Members = void 0;
const mongoose = require("mongoose");
const memberSchema = mongoose.Schema({
    _id: {
        type: String,
        unique: true,
    },
    discordName: {
        type: String,
        maxlength: 100,
    },
    discordAvatar: String,
    discriminator: String,
    bio: String,
});
const Members = mongoose.model("Members", memberSchema);
exports.Members = Members;