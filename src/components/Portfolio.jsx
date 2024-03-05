import Project from "./Project";
import audiophiles from "../assets/images/portfolio/audiophiles.png";
import friends from "../assets/images/portfolio/friends.png";
import employeeTracker from "../assets/images/portfolio/employee_tracker.png";
import textEditor from "../assets/images/portfolio/text_editor.png";
import weather from "../assets/images/portfolio/weather_dashboard.png";
import palette from "../assets/images/portfolio/palette_pair.png";


function Portfolio() {
  const projects = [
    {
      id: 0,
      title: "Audiophiles",
      github: "https://github.com/Erik-Aku/Audiophiles",
      deployed: "https://mighty-spire-51902-9cbcd11d8451.herokuapp.com/",
      image: audiophiles,
    },
    {
      id: 1,
      title: "Friends and Thoughts",
      github: "https://github.com/Erik-Aku/Friends-And-Thoughts",
      deployed: "https://drive.google.com/file/d/1-NFJvqL7Pv6ya0TN8curi-TXwnFHtcdK/view?usp=sharing",
      image: friends,
    },
    {
      id: 2,
      title: "Employee Tracker",
      github: "https://github.com/Erik-Aku/Employee-Tracker",
      deployed: "https://drive.google.com/file/d/1CDOX7aYKJDaIPi0SbFw7ndk3elmUPyLB/view?usp=sharing",
      image: employeeTracker,
    },
    {
      id: 3,
      title: "Text-Editor-PWA",
      github: "https://github.com/Erik-Aku/Text-Editor-PWA",
      deployed: "https://text-editor-pwa-hgt1.onrender.com/",
      image: textEditor,
    },
    {
      id: 4,
      title: "Weather-Dashboard",
      github: "https://github.com/Erik-Aku/Weather-Dashboard",
      deployed: "https://erik-aku.github.io/Weather-Dashboard/",
      image: weather,
    },
    {
      id: 5,
      title: "Palette-Pair",
      github: "https://github.com/Erik-Aku/Palette-Pair",
      deployed: "https://erik-aku.github.io/Palette-Pair/",
      image: palette,
    },
  ];
  return (
    <section>
      <div className="portfolio">
        <h1>Portfolio</h1>
      </div>

      <div>
        {projects.map((project) => (
          // ensuring to pass projects component with a key
          <Project project={project} key={project.id}></Project>
        ))}
      </div>
    </section>
  );
}

// export Portfolio Component
export default Portfolio;
