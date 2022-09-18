const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  title: String,

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

  registeredAt: {
    type: Date,
    default: Date.now,
  },
});

const Prjoects = mongoose.model("Prjoects", projectSchema);
export { Prjoects };
