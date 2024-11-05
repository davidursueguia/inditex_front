# Podcaster app

Application that queries the top 100 podcasts from the iTunes API and displays them in a list. This list can be filtered in real time through a title and author search bar. You can access each podcast by clicking on them to view more information, including a list of all episodes. You can click on an episode to navigate to a view where you can listen to it. The API queries are cached for 24 hours, so each time a value is retrieved, it is stored in memory.
## Get started
1. Clone the Repository: Open a terminal and run the following command to clone the repository:

   ```git clone https://github.com/davidursueguia/inditex_front.git ```

2. Navigate to the Project Directory: Change to the project directory that you just cloned:

   ```cd inditex_front```
3. Install Dependencies: Run the following command to install the project dependencies:

   ```npm install```
4. Set Up CORS Access: To ensure that API requests work correctly, visit the following link and click on "Request temporary access to the demo server":

   ``` https://cors-anywhere.herokuapp.com/corsdemo ```
5. Run the Project: Once you have completed the previous steps, you can start the project with the following command:

   ```npm run dev```

6. Run build: Run the following command to build the project:

   ```npm run build```

## Tests

Run the following command to run the tests:

   ```npm run test```

## Tools

For the development of this app, the following tools have been used:

- React Testing Library: A library for testing React components focusing on user interactions.
- Jest: A JavaScript testing framework for writing unit and integration tests.
- Axios: A promise-based HTTP client for making API requests.
- Material UI: A React UI framework that offers pre-designed, customizable components.
- Styled-Components: A library for styling React components using tagged template literals.
- Vite: A modern build tool that provides fast development and optimized builds.

## Author

David Ursueguia
