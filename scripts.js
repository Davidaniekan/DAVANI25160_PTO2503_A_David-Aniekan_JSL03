// Initial list of tasks already on the board
let initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];

// Maximum number of new tasks a user can add in this run
let maxTasks = 3;

// Next available ID for new tasks (incremented after each addition)
let nextId = 4;

// Loop to add new tasks, up to the maximum allowed
for (let i = 0; i < maxTasks; i++) {
  let taskTitle = prompt(`Enter task ${nextId} title:`);   // Prompt the user for the title of the new task
  let taskDescription = prompt(`Enter task ${nextId} description:`);   // Prompt the user for the description of the new task
  let taskStatus = prompt(
    `Enter task ${nextId} status (todo, doing, done):`
  ).toLowerCase();   // Prompt for status and normalize to lowercase for consistency

  // Validate that the entered status is correct; re-prompt if not
  while (
    taskStatus !== "todo" &&
    taskStatus !== "doing" &&
    taskStatus !== "done"
  ) {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    taskStatus = prompt(
      `Enter task ${nextId} status (todo, doing, done):`
    ).toLowerCase();
  }

  // Create the new task object
  let newTask = {
    id: nextId,
    title: taskTitle,
    description: taskDescription,
    status: taskStatus,
  };

  // Add the new task to the task list
  initialTasks.push(newTask);

  // Increment ID for the next task
  nextId++;

  // If this was the last allowed addition, show a notification
  if (i === maxTasks - 1) {
    alert(
      "There are enough tasks on your board, please check them in the console"
    );
  }
}

// Filter out only the completed tasks for quick viewing
let completedTasks = initialTasks.filter((task) => task.status === "done");

// Display all tasks in the console
console.log("All tasks:", initialTasks);

// Display completed tasks in the console
console.log("Completed tasks:", completedTasks);
