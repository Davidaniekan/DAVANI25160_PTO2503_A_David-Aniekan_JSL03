# 📝 JSL03 Project Brief: Console-Based Task Manager

## 📖 Project Overview (🧩 Launch Career Kanban Board)

The **Launch Career Kanban Board** is a simple, browser-based task management tool that organizes tasks into **TODO**, **DOING**, and **DONE** columns.  
While the HTML and CSS establish the static, responsive layout, the **JavaScript logic powers the dynamic functionality** — enabling users to create new tasks through prompts, validate inputs, assign unique IDs, and filter completed tasks.

This project is designed as a learning exercise in **JavaScript input handling, data validation, and array manipulation**.

---

## 🛠️ Technologies Used

- **HTML5** – Semantic structure of the Kanban board.
- **CSS3** – Responsive layout using Flexbox and media queries.
- **JavaScript (ES6)** – Dynamic task creation, validation, and filtering logic.
- **Google Fonts** – *Plus Jakarta Sans* for modern typography.

---

## ✨ Key Features

### JavaScript Functionality
- 📋 **Initial Task Array** – Preloaded with sample tasks containing `id`, `title`, `description`, and `status`.
- 📝 **Prompt-Driven Task Creation** – On load, users can add up to **3 new tasks** using browser `prompt()` dialogs.
- ✅ **Status Validation** – Only accepts `"todo"`, `"doing"`, or `"done"`. Invalid entries trigger a re-prompt.
- 🔢 **Auto-Incrementing IDs** – Each task gets a unique sequential `id` starting from 4.
- 🔍 **Completed Task Filtering** – Generates a list of all tasks marked `done`.
- 🖥 **Console Logging - Outputs:**
    - All tasks(existing + newly added)
    - Completed tasks only

### HTML & CSS Highlights
- **Sidebar** with board navigation.
- **Three Columns**: TODO, DOING, DONE with color-coded indicators.
- **Responsive Design** with mobile-friendly layout adjustments.

---

## 📂 Project Structure
```
📁 project-root
│── index.html       # Static layout and structure
│── styles.css       # Styling and responsiveness
│── scripts.js       # JavaScript task logic
│── assets/          # Icons, logos, and images
```
---

## ⚙️ Setup Instructions
1. **Download or Clone** the repository.
2. Keep all files (`index.html`, `styles.css`, `scripts.js`, and `assets/`) in the same directory.
3. Open `index.html` in any modern browser.
4. Make sure pop-ups and prompts are enabled in your browser settings.

---

## 🚀 How It Works
1. When the page loads:
   - Default tasks are initialized in the `initialTasks` array.
   - The browser will prompt you to enter details for up to **3 new tasks**.
2. For each new task:
   - Enter the **Title** → e.g., `Learn Node.js`
   - Enter the **Description** → e.g., `Practice backend development`
   - Enter the **Status** → must be one of: `todo`, `doing`, or `done`
     - If invalid, you’ll be asked again until correct.
3. After the final task:
   - An alert will notify you that you’ve reached the task entry limit.
   - All tasks and completed tasks are logged to the console.

---

## ▶️ Example Console Output
```javascript
All tasks: [
  { id: 1, title: "Launch Epic Career", description: "Create a killer Resume", status: "todo" },
  { id: 2, title: "Master JavaScript", description: "Get comfortable with the fundamentals", status: "doing" },
  { id: 3, title: "Contribute to Open Source Projects", description: "Gain practical experience and collaborate with others in the software development community", status: "done" },
  { id: 4, title: "Learn Node.js", description: "Practice backend development", status: "todo" }
]

Completed tasks: [
  { id: 3, title: "Contribute to Open Source Projects", description: "Gain practical experience and collaborate with others in the software development community", status: "done" }
]
```
---

## 🔄 Interaction Flow

1. **User Input** via `prompt()` dialogs.

2. **Validation** ensures only correct statuses are accepted.

3. **Storage** in `initialTasks` array.

4. **Filtering** creates `completedTasks` list.

5. **Output** displayed in browser console.

---

## 👤 Author

**David Aniekan**  
Frontend learner & builder.
[GitHub](https://github.com/Davidaniekan) | [LinkedIn](https://linkedin.com/in/david-aniekan)