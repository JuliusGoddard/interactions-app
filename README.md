PROJECT PLAN:

1. Create React App using npx create-react-app
2. Configure eslint settings using standard configuration (eslint comes installed with Create-React-App but needs extra configuration and .eslintignore needs to be created.)
3. Set up Cypress for unit testing.
4. Tests ensure that Header, Footer, Raw Data and Graph will be present.
5. Install axios library to help fetch data from API
6. Add all basic components + App.js and Index.js
7. Fetch data using a combination of Axios.get, React.useState and React.useEffect.
8. Present Raw Data in HTML table
9. Use CanvasJS to present percentages (calculated by counting the number of occurences of sector_id divided by the total number of entries x 100) in a bar chart 
10. Add Header and Footer
11. Add "Show Data" button for UI so that users can show or hide the data using React.useState(true)
12. Install CSS preprocesser: TailwindCSS - configured as per Tailwind Documentation
13. Style All components
14. Run tests and Lint and correct all mistakes/errors
15. Set up Simple workflow to ensure CI/CD
16. Initialize git repository
17. Deploy to Netlify for Production

PLANS FOR IMPROVEMENT OF APP

1. CRUD system with backend (Possibly Laravel or Django) which allows users to add, edit or remove instances of interactions
2. Multiple views displaying data in different ways: chart view, list view. Views could be managed with React Router.
3. Functionality for users to login and edit data, along with signup system.
4. Functionality for multiple users: using Websockets for example.
5. Possbility for SEO improvements using Server-Side Rendering: using the Next.JS framework for example

INSTRUCTIONS FOR USE

REQUIREMENTS FOR USAGE: Visual Studio Code w/ terminal

1. git clone https://github.com/JuliusGoddard/interactions-app.git
2. cd interactions-app
3. npm install
4. npm start

PRODUCTION MODE VERSION OF APP

https://storied-gingersnap-67b0e2.netlify.app/

