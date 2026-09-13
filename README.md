# Dev Stack

## Project Overview
Dev Stack is a modern, responsive web application built with React and Tailwind CSS. It allows developers to explore, compare, and build their ideal technology stack for frontend, backend, databases, and tooling options.

## Built With
- React + Vite
- Tailwind CSS
- JavaScript (ES6+)

## Core Features
1. **Interactive Navigation & Hero Section:** Designed with clean typography, gradient accents, and responsive layout.
2. **Technology Explorer:** Categorized sections to browse and select your preferred development tools.
3. **Fully Responsive Layout:** Optimized smoothly for desktops, tablets, and mobile viewports.





React Questions & Answers

1. What is JSX, and why is it used in React?
   JSX is a syntax extension for JavaScript that allows writing HTML-like code directly inside JavaScript. It makes UI code much easier to read and write.

2. What is the difference between props and state?
   Props: Read-only data passed down from a parent component to a child component.
   State:Internal data managed within a component that can change over time and trigger re-renders.

3. What does the useState hook do, and where did you use it in this project?
   `useState` allows functional components to manage and track dynamic state. In this project, it is used to handle toggles or interactive states.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
   `useEffect` handles side effects like fetching data. It is needed for loading JSON data asynchronously after the component mounts.

5. why does every item in a `.map()` list need a unique key prop?
   A unique `key` helps React identify which items have changed, added, or removed, optimizing rendering performance.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
   Conditional rendering displays different UI elements based on conditions (e.g., showing an "empty stack" message when no tools are selected).

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parent to Child: Passed down using props.
Child to Parent:The parent passes a callback function down via props, which the child calls to send data back up.

