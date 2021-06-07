const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const Task = mongoose.model("Task", {
  description: { type: String },
  completed: { type: Boolean },
});

const task = new Task({
  description: "Learn Mongoose",
  completed: false,
});

task
  .save()
  .then((me) => {
    console.log(me);
  })
  .catch((error) => {
    console.log(error);
  });
