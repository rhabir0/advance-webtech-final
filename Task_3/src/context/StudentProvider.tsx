import {
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  StudentContext,
  type Student,
} from "./StudentContext";

interface StudentProviderProps {
  children: ReactNode;
}

const initialStudents: Student[] = [
  {
    name: "Rubai",
    id: 101,
    avatar: "https://i.pravatar.cc/150?img=12",
    gpa: 3.8,
    major: "Computer Science",
    courses: ["React", "JavaScript", "Database"],
  },
  {
    name: "Tusher",
    id: 102,
    avatar: "https://i.pravatar.cc/150?img=68",
    gpa: 3.6,
    major: "EEE",
    courses: ["Circuit", "Physics"],
  },
  {
    name: "Afrin",
    id: 103,
    avatar: "https://i.pravatar.cc/150?img=47",
    gpa: 3.9,
    major: "BBA",
    courses: ["Finance", "Marketing"],
  },
  {
    name: "Akib",
    id: 104,
    avatar: "https://i.pravatar.cc/150?img=59",
    gpa: 3.7,
    major: "CSE",
    courses: ["React", "Python"],
  },
];

function StudentProvider({
  children,
}: StudentProviderProps) {

  const [students, setStudents] =
    useState<Student[]>(() => {
      const savedStudents =
        localStorage.getItem("students");

      if (savedStudents) {
        return JSON.parse(savedStudents);
      }

      return initialStudents;
    });

  useEffect(() => {
    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );
  }, [students]);

  const addStudent = (student: Student) => {
    setStudents((prev) => [
      ...prev,
      student,
    ]);
  };

  const removeStudent = (id: number) => {
    setStudents((prev) =>
      prev.filter(
        (student) => student.id !== id
      )
    );
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
        removeStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;