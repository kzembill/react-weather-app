import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer className="mt-1">
          👌This website was coded by {" "}
          <a 
          href="https://www.linkedin.com/in/kaliope-caras-90333064?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3ByIipoITAToCLGeflU0HH2w%3D%3D" 
          target="_blank"
          rel="noreferrer"
          title="Kalli Caras' LinkedIn"
          >
            Kalli Caras
          </a> {" "}
          and is {" "}
          <a 
          href=""
          target="_blank"
          rel="noreferrer"
          title="Source code on GitHub"
          >
            Open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
