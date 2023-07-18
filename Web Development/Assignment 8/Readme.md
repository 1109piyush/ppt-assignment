# Assignment 8

**Q.1 Whats React and its pros and cons?**

<u>_Answer -_</u> React is a popular open-source JavaScript library used for building user interfaces, particularly for web applications. It was developed by Facebook and is widely adopted due to its component-based architecture, which allows developers to create reusable UI components.

- Pros -

  1. Component-based: React's component-based approach fosters code reusability and maintainability, enhancing development efficiency.
  2. Virtual DOM: React's Virtual DOM minimizes direct manipulation of the actual DOM, improving performance by updating only the necessary components.
  3. One-way data flow: Unidirectional data flow simplifies debugging and makes the application more predictable.
  4. Large community and ecosystem: React has a vast community with numerous libraries and resources available for faster development.
  5. React Native: Developers can use React to build mobile applications as well, using the React Native framework.

- Cons -

  1. Steeper learning curve: React's concepts may be challenging for beginners and require familiarity with JavaScript.
  2. Boilerplate code: Some developers find React code bases to be verbose, requiring extra setup and boilerplate code.
  3. Frequent updates: React's rapid development pace might lead to version compatibility issues and additional effort to keep up with updates.
  4. Performance concerns: While Virtual DOM boosts performance, React might not be the best choice for extremely high-performance applications.
  5. SEO challenges: React apps might face SEO issues if server-side rendering is not implemented correctly.

**Q.2 What do you understand by Virtual Dom?**

<u>_Answer -_</u> The Virtual DOM is a concept in React where a lightweight copy of the actual DOM is maintained. When there are changes to a component's state or data, a new Virtual DOM is created. React then efficiently compares the previous Virtual DOM with the new one to identify minimal changes needed to update the real DOM. This process reduces the costly direct manipulation of the DOM and results in faster rendering of user interfaces, making React more efficient and performant, especially in complex applications with frequent updates.

**Q.3 Difference between Virtual Dom vs Real Dom.**

<u>_Answer -_</u> The main difference between the Virtual DOM and the Real DOM lies in their nature and how they are used in web development:

- Virtual DOM -

  - Nature: The Virtual DOM is a lightweight, in-memory representation of the actual DOM.
  - Purpose: It acts as an intermediary layer between the application's state and the Real DOM.
  - Working: When there are changes in a component's state or data, React creates a new Virtual DOM, which is compared to the previous one for changes.
  - Efficiency: This approach allows React to perform minimal, targeted updates to the Real DOM, reducing the overall computational cost and enhancing rendering performance.

- Real DOM -

  - Nature: The Real DOM is the actual hierarchical structure representing the HTML elements of a web page.
  - Purpose: It reflects the current state of the user interface and allows interaction with the web page.
  - Working: Any updates made to the Real DOM trigger the browser to reflow and repaint, which can be resource-intensive, especially in complex web applications.
  - Efficiency: Direct manipulation of the Real DOM can lead to performance issues, as updating it frequently can cause a significant overhead.

**Q.4 Whats component? Types of component.**

<u>_Answer -_</u> There are two primary types of components: Class Components and Functional Components. Class Components are JavaScript classes that extend `React.Component` and can manage state and use lifecycle methods. Functional Components are JavaScript functions that receive props and return JSX elements, and with the introduction of hooks, they can also manage state and use lifecycle-like methods. Functional components are now more commonly used due to their simplicity and clean syntax, while class components are used in older React code bases or when specific features like `PureComponent` optimization are needed.

**Q.5 Difference between class & function based component.**

<u>_Answer -_</u> Class-based components are JavaScript classes that extend `React.Component`. They can manage state using `this.state` and handle lifecycle methods like `componentDidMount`, `componentDidUpdate`, etc. Class components were commonly used in older React applications for building complex components.

With the introduction of hooks in React, functional components gained prominence. Function-based components are JavaScript functions that receive props and return JSX elements. Initially, they were stateless, but hooks like `useState` now allow functional components to manage state and emulate lifecycle behavior through `useEffect`. Hooks have simplified the codebase, making functional components more concise, readable, and easier to maintain.

Due to the cleaner syntax, better modularity, and improved code organization provided by hooks, functional components have become the preferred choice for most use cases in modern React development. However, class components still exist and may be necessary for specific scenarios or when working with older React codebases that have not migrated to functional components with hooks.

**Q.6 Explain react component life cycle.**

<u>_Answer -_</u> React component lifecycle refers to the various stages a component goes through during its existence, from creation to destruction. Each stage provides developers with specific methods to perform actions and interact with the component at different points in its lifecycle. However, with the introduction of React hooks, the traditional lifecycle methods are being replaced with hook equivalents.

The main phases in the React component lifecycle are:

- Mounting -

  - `constructor()`: Initializes state and binds event handlers.
  - `render()`: Returns JSX to render the component's UI.
  - `componentDidMount()`: Executes after the component is rendered to the DOM. Suitable for tasks requiring interaction with external APIs or setting up subscriptions.

- Updating -

  - `render()`: Re-renders the component's UI with updated state and props.
  - `componentDidUpdate(prevProps, prevState)`: Executes after a component updates. Useful for performing side effects based on changes in props or state.

- Unmounting -

  - `componentWillUnmount()`: Executes just before a component is removed from the DOM. Suitable for cleanup tasks like unsubscribing from event listeners or canceling network requests.

- Error Handling -

  - `componentDidCatch(error, info)`: Catches errors in child components during rendering and provides a fallback UI.

However, with the advent of hooks, components now primarily rely on the following hooks instead of lifecycle methods:

- `useState`: For managing component state.
- `useEffect`: To perform side effects (equivalent to `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined).
- `useContext`, `useReducer`, etc.: For managing more complex state and logic.

React encourages developers to use functional components with hooks as they simplify the code and make it easier to manage state and side effects in a more declarative and straightforward manner.

**Q.7 Explain Prop Drilling in React & Ways to avoid it.**

<u>_Answer -_</u> Prop drilling in React refers to the process of passing props down through multiple layers of nested components to reach a specific component that needs access to the data. This can lead to a cumbersome and inefficient way of handling data flow since intermediate components may not need the data themselves but are required to pass it down anyway.

Ways to avoid prop drilling in React -

- Context API: React's Context API allows us to create a context at the top level of our component tree, making the data accessible to all components in the tree without the need for explicit prop passing.

- Redux or MobX: State management libraries like Redux or MobX centralize the application's state, making it accessible from any component without prop drilling.

- React's useContext hook: This hook allows us to consume context within functional components, reducing the need for prop drilling.

- Component Composition: Rather than nesting components deeply, consider breaking them into smaller, more focused components that can be composed together as needed, reducing the need for prop drilling.

- React Router: When dealing with routing and shared data, React Router can help avoid prop drilling by providing a location object and match parameters to the components that need them.

By adopting these strategies, we can improve code maintainability and reduce complexity, ensuring that data is efficiently accessible to the components that need it without the need for excessive prop drilling.

**Q.8 Create a Counter Web App using React.**

- **Develop a web application using React that functions as a counter.**
- **Include two buttons in the UI:**

  1. **"Increment" button:**

  - **On clicking this button, the counter value should be incremented by one.**

  2. **"Decrement" button:**

  - **On clicking this button, the counter value should be decremented by one.**

- **Implement the counter logic using React's state management.**
- **Ensure that the counter value is displayed in the UI and updates in real-time when incremented or decremented.**
- **Use appropriate React components and hooks to manage the counter state and handle button click events.**

<u>_Answer -_</u> [Click Here](./Counter%20App/)