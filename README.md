Here’s a detailed breakdown of the entire workflow for the interactive Kanban board application built with ReactJS, including an explanation of each code file and its role in the project.

### Project Structure
The project structure typically looks like this:

```
/kanban-app
|-- /src
|   |-- App.js
|   |-- KanbanBoard.js
|   |-- TicketCard.js
|   |-- AddTicketForm.js
|   |-- GroupingSelector.js
|   |-- SortingSelector.js
|   |-- /css
|       |-- App.css
|       |-- KanbanBoard.css
|       |-- AddTicketForm.css
|       |-- GroupingSelector.css
|       |-- SortingSelector.css
|-- package.json
|-- index.html
|-- index.js
```

### Workflow Overview
1. **Fetching Data:** The application fetches ticket data from an external API.
2. **State Management:** The application manages the tickets, grouping, and sorting preferences using React's state management.
3. **User Interaction:** Users can add new tickets, group tickets by status/user/priority, and sort tickets by title or priority.
4. **Rendering UI:** The UI dynamically updates to reflect user interactions, displaying tickets in a Kanban-style layout.
5. **Persistent State:** The application saves the user's view state to `localStorage` to retain it even after page reloads.

### Detailed File Breakdown

#### 1. **index.js**

- **Purpose:** The entry point of the React application. It renders the `App` component into the DOM, applying global styles.

#### 2. **App.js**

- **Purpose:** Main component of the application.
- **Responsibilities:**
  - Fetches data from the API when the component mounts (`useEffect`).
  - Stores and updates ticket data using the `useState` hook.
  - Handles the addition of new tickets.
  - Groups and sorts tickets based on user selection.
  - Renders the `GroupingSelector`, `SortingSelector`, `AddTicketForm`, and `KanbanBoard`.

#### 3. **AddTicketForm.js**

- **Purpose:** Provides a form for users to add new tickets.
- **Responsibilities:**
  - Collects user input for ticket title, description, user assignment, status, and priority.
  - Handles form submission and calls the `addTicket` function passed as a prop to add the new ticket to the list.

#### 4. **KanbanBoard.js**

- **Purpose:** Renders the Kanban board layout.
- **Responsibilities:**
  - Receives grouped and sorted tickets as props.
  - Renders each group of tickets as columns in the Kanban board.
  - Renders individual `TicketCard` components for each ticket.

#### 5. **TicketCard.js**

- **Purpose:** Represents individual tickets on the Kanban board.
- **Responsibilities:**
  - Displays the ticket's title, description, assigned user, status, and priority.
  - Uses helper functions to determine the color and label for the ticket's priority.

#### 6. **GroupingSelector.js**

- **Purpose:** Allows users to select how to group tickets.
- **Responsibilities:**
  - Displays a dropdown for selecting the grouping criteria (status, user, or priority).
  - Updates the `groupBy` state in the parent component when the selection changes.

#### 7. **SortingSelector.js**

- **Purpose:** Allows users to select how to sort tickets.
- **Responsibilities:**
  - Displays a dropdown for selecting the sorting criteria (priority or title).
  - Updates the `sortBy` state in the parent component when the selection changes.


  <!-- 1- npm i   // instal node modules
       2 - npm run dev  // server run
        -->
