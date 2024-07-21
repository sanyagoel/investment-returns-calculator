# React + Vite

If you're considering getting started with investing, an investment calculator can help you figure out how to meet your goals. It can show you how your initial investment, frequency of contributions, and risk tolerance can all affect the way your money grows.

This project is an Investment Return Calculator built with React. It allows users to input their initial investment, annual contributions, rate of return, and investment duration to calculate and visualize their investment growth over time. 
This project represents my second React project, undertaken just a week after starting to learn React. 

# React Concepts Applied
State Management: The project utilizes React's useState hook to manage and update the state of user inputs and the display of results. This ensures that any changes in user input are dynamically reflected in the results.

State Lifting and Sharing: State lifting is employed to share state across components. The parent App component holds the state for user inputs and passes down values and state-updating functions to child components. This allows for centralized management of state and consistent updates across components.

Component Structure: The application is divided into three main components:

Header Component: Displays the title and any other introductory information.

Inputinfo Component: Handles user input by capturing values such as initial investment, annual contribution, rate of return, and duration. It updates the state in the parent App component through callback functions.

Resultdata Component: Receives computed data from the parent component and displays it in a structured format, including a formatted table showing the investment growth over time.

#CSS and Animations
CSS Styling: The project makes use of CSS for styling components and creating a visually appealing user interface.

Keyframes and Animations: I learned about keyframes and animations in CSS and applied this knowledge to enhance the user experience by incorporating smooth transitions and animations in the UI.
