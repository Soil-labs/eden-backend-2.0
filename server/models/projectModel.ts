const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  title: String,
  description: String,

  teamMembers: [
    {
      memberID: String,
      roleID: mongoose.Schema.Types.ObjectId,
      phase: {
        type: String,
        enum: ["SHORTLISTED", "ENGAGED", "COMMITTED", "REJECTED", "INVITED"],
      },
    },
  ],

  roles: [
    {
      _id: String,
      title: String,
      conent: {
        description: String,
        dateRangeStart: String,
        dateRangeEnd: String,
        hoursPerWeek: Number,
        budget: {
          token: String,
          perHour: String,
          totalBudget: String,
        },
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
      phase: {
        type: String,
        enum: ["OPEN", "CLOSED"],
      },
    },
  ],

  serverID: [String],
  gardenServerID: String,

  registeredAt: {
    type: Date,
    default: Date.now,
  },
});

const Projects = mongoose.model("Projects", projectSchema);
export { Projects };
