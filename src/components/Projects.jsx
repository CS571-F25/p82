// src/components/Projects.jsx
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Campus Pathfinder",
    timeframe: "2024 · UW–Madison",
    description:
      "Graph-based route-finding tool to help students find the fastest paths between campus buildings.",
    tech: "Java, Graph algorithms, HTML/CSS",
  },
  {
    title: "Note App (Android)",
    timeframe: "2024 · CS 407",
    description:
      "Compose-based note-taking app with reminders and scheduled notifications.",
    tech: "Kotlin, Jetpack Compose, Room",
  },
  {
    title: "Personal Portfolio",
    timeframe: "2025 · Web Project",
    description:
      "This website – an interactive place to show my resume, projects, and interests.",
    tech: "React, Vite, Bootstrap",
  },
];

export default function Projects() {
  return (
    <section className="app-page">
      <div className="container">
        <h1 className="mb-4">Projects</h1>
        <div className="row g-4">
          {projects.map((p) => (
            <div key={p.title} className="col-md-4">
              <ProjectCard {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
