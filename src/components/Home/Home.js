import React from "react";
import { Link } from "react-router-dom";
import MyPhoto from "../MyPhoto/MyPhoto";
import Button from "../Button/Button";
import LinkList from "../LinkList/LinkList";
import Logo from "./hemant garg.jpg";

import "./Home.css";
class Home extends React.Component {
  goToResume() {
    window.open(
      "https://drive.google.com/file/d/1PAOnEvstpYvVID3WjKXgNvxtlGTB5GWW/view?usp=sharing"
    );
  }

  render() {
    return (
      <main className="Home">
        <MyPhoto logo={Logo} width={"27rem"} height={"27rem"} />
        <h1 className="my-name" style={{ animationDelay: 1.5 + "s" }}>
          Hemant Garg
        </h1>
        <h3 className="my-tagline" style={{ animationDelay: 2 + "s" }}>
          A Full Stack Web Developer who plays Guitar{" "}
        </h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/projects">
            <Button
              delay="2.5"
              color="#6D214F"
              text="PROJECTS"
              iconClass="fas fa-briefcase"
            />
          </Link>
          <Button
            delay="2.8"
            onclick={this.goToResume}
            color="#b71540"
            text="RESUME"
            iconClass="fas fa-location-arrow"
          />
        </div>
        <div className="social-link-container">
          <LinkList />
        </div>
      </main>
    );
  }
}

export default Home;
