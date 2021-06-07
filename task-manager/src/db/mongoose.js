const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("this is no email");
      }
    },
  },
  completed: {
    type: Boolean,
  },
});

const task = new Task({
  description: "12345",
  completed: false,
});

task
  .save()
  .then((task) => {
    console.log(task);
  })
  .catch((error) => {
    console.log(error);
  });
