import "./App.css";

import DashboardHeader from "./components/DashboardHeader";
import StudentCard from "./components/StudentCard";

function App() {
  return (
    <div>

      <DashboardHeader
        title="Student Dashboard"
        tagline="Manage your students and courses"
      />

      <main className="student-container">

        <StudentCard
          name="Rubai"
          id={101}
          avatar="https://i.pravatar.cc/150?img=12"
          gpa={3.8}
          major="Computer Science"
          courses={["React", "JavaScript", "Database"]}
        />

        <StudentCard
          name="Tushar"
          id={102}
          avatar="https://i.pravatar.cc/150?img=68"
          gpa={3.6}
          major="EEE"
          courses={["Circuit", "Physics"]}
        />

        <StudentCard
          name="Afrin"
          id={103}
          avatar="https://i.pravatar.cc/150?img=47"
          gpa={3.9}
          major="BBA"
          courses={["Finance", "Marketing"]}
        />

        <StudentCard
          name="Akib"
          id={104}
          avatar="https://i.pravatar.cc/150?img=59"
          gpa={3.7}
          major="CSE"
          courses={["React", "Python"]}
        />

      </main>

      <footer>
        <p>© 2026 Student Dashboard</p>
      </footer>

    </div>
  );
}

export default App;