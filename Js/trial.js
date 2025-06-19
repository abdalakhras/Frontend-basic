
const defaultDates = {};
listOfTasks = [
    { id: 1, taskname: "Task A" },
    { id: 2, taskname: "Task B" },
    { id: 3, taskname: "Task C" }
]

listOfTasks.forEach(task => {
  defaultDates[task.id] = '2022-04-17';
});
console.log(defaultDates)


 listOfTasks.reduce((acc, task) => {
    acc[task.id] = '2022-04-17';
    console.log(acc)
    console.log(acc[2])
    return acc;
  }, {})
  