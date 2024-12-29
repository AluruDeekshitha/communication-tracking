# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
### Detailed Setup and Deployment Instructions

1. **Clone the Repository:**
   - Use the command: `git clone https://github.com/your-repository-url.git`
   - Navigate into the folder: `cd your-repository-folder`

2. **Install Dependencies:**
   - Run: `npm install`

3. **Environment Configuration:**
   - Create a `.env` file in the root directory if needed.
   - Add variables such as API keys or backend URLs.

4. **Run the Application Locally:**
   - Start the development server: `npm run dev`
   - Open the app in your browser at `http://localhost:3000`.

5. **Build for Production:**
   - Create a production-ready build: `npm run build`

6. **Deploy the Application:**
   - **Vercel:** Use the `vercel` command.
   - **Netlify:** Drag and drop the `dist` folder after running the build.
   - **Custom Hosting:** Upload the `dist` folder to your server.

---

### Notes on Application Functionality

- **Dashboard Module:**
  - Displays communication history with highlights for overdue (red) and due-today (yellow) communications.
  - Tooltips show notes for past communications.

- **Communication Modal:**
  - Users can log new communications by specifying type, date, and notes.

- **Notification System:**
  - Dedicated sections display overdue and upcoming communications with counters.

- **Calendar Module:**
  - Tracks past communications and manages schedules for future interactions.

- **Interactivity:**
  - Add, edit, or delete communication logs.
  - Override highlight statuses for flexibility.

- **Responsive Design:**
  - Works on desktop, tablet, and mobile devices using Tailwind CSS.

---

### Known Limitations

1. **Static Data:**
   - Uses mock/static data for communications and companies.
   - Requires backend integration for dynamic data.

2. **Tooltip Issues:**
   - Tooltips may behave inconsistently on mobile devices.

3. **Performance:**
   - May slow down with a large number of companies or communications.

4. **Reporting Module:**
   - Analytics features are partially implemented.

5. **No Authentication:**
   - User authentication and role-based access are not included.