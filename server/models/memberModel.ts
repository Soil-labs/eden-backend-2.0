const mongoose = require("mongoose");

const memberSchema = mongoose.Schema({
  discordId: {
    type: String,
    index: {
      unique: true,
    },
  },

  name: {
    type: String,
    maxlength: 100,
  },
  avatar: String,
  discriminator: String,
  onbording: {
    signupFinish: Boolean,
    percentage: Number,
  },

  skills: [
    {
      skillID: mongoose.Schema.Types.ObjectId,
      level: {
        type: String,
        enum: ["LEARNING", "JUNIOR", "MID", "SENIOR", "OTHER"],
      },
    },
  ],

  projects: [
    {
      projectID: mongoose.Schema.Types.ObjectId,
      projectRoleID: mongoose.Schema.Types.ObjectId,
      phase: {
        type: String,
        enum: ["OPEN", "CLOSED"],
      },
    },
  ],

  servers: [String],

  general: {
    content: {
      bio: String,
      interest: String,
      mostProud: String,
      showCaseAbility: String,
    },
    hoursPerWeek: Number,
    timeZone: String,
    links: [
      {
        name: {
          type: String,
          enum: [
            "GITHUB",
            "LINKEDIN",
            "INSTAGRAM",
            "YOUTUBE",
            "TWITTER",
            "DEWORK",
            "LENS",
            "OTHER",
          ],
        },
        url: String,
        nameCustom: String,
        imgCustom: String,
      },
    ],
  },

  registeredAt: {
    type: Date,
    default: Date.now,
  },
});

const Members = mongoose.model("Members", memberSchema);
export { Members };
