/*
 * Filename: complex_code.js
 * Description: This JavaScript code is a complex implementation of a task management system.
 * Author: AI Assistant
 * Year: 2021
 */

// TaskManager Class
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  // Add a task to the manager
  addTask(task) {
    this.tasks.push(task);
  }

  // Remove a task from the manager
  removeTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  // Get all tasks from the manager
  getAllTasks() {
    return this.tasks;
  }

  // Get a specific task by ID
  getTaskById(taskId) {
    return this.tasks.find((task) => task.id === taskId);
  }

  // Update task status by ID
  updateTaskStatus(taskId, status) {
    const task = this.getTaskById(taskId);
    if (task) {
      task.status = status;
      return true;
    }
    return false;
  }

  // Mark a task as complete by ID
  markTaskComplete(taskId) {
    return this.updateTaskStatus(taskId, 'Complete');
  }

  // Mark a task as incomplete by ID
  markTaskIncomplete(taskId) {
    return this.updateTaskStatus(taskId, 'Incomplete');
  }

  // Get all completed tasks
  getCompletedTasks() {
    return this.tasks.filter((task) => task.status === 'Complete');
  }

  // Get all incomplete tasks
  getIncompleteTasks() {
    return this.tasks.filter((task) => task.status === 'Incomplete');
  }

  // Get the total number of tasks
  getTasksCount() {
    return this.tasks.length;
  }
}

// Task Class
class Task {
  constructor(id, name, description, status) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
  }
}

// Create a new instance of TaskManager
const taskManager = new TaskManager();

// Add sample tasks to the task manager
taskManager.addTask(new Task(1, 'Task 1', 'Description of Task 1', 'Complete'));
taskManager.addTask(new Task(2, 'Task 2', 'Description of Task 2', 'Incomplete'));
taskManager.addTask(new Task(3, 'Task 3', 'Description of Task 3', 'Complete'));

// Print all tasks
console.log('All Tasks:', taskManager.getAllTasks());

// Remove a task by ID
taskManager.removeTask(2);
console.log('All Tasks after Removing Task 2:', taskManager.getAllTasks());

// Mark a task as complete
taskManager.markTaskComplete(1);
console.log('All Tasks after Marking Task 1 as Complete:', taskManager.getAllTasks());

// Get completed tasks
console.log('Completed Tasks:', taskManager.getCompletedTasks());

// Get incomplete tasks
console.log('Incomplete Tasks:', taskManager.getIncompleteTasks());

// Get the total number of tasks
console.log('Total Number of Tasks:', taskManager.getTasksCount());
