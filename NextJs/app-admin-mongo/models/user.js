import mongoose from "mongoose";
import moment from "moment";

const Schema = mongoose.Schema;

const user = new Schema(
  {
    name: {
      type: String,
      default: null,
    },
    firstName: {
      type: String,
      default: null,
    },
    lastName: {
      type: String,
      default: null,
    },
    alias: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      default: null,
    },
    token: {
      type: String,
      default: null,
    },
    since: {
      type: Number,
      default: () => moment().unix(),
    },
    status: {
      type: String,
      default: "active",
    },
  },
  { collection: "Users" }
);

mongoose.models = {};

const User = mongoose.model("Users", user);

export default User;
