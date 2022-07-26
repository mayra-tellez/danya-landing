import profilePic from "../../images/profilePic.png";
import yogaIcon from "../../images/yogaIcon.svg";
import fitnessIcon from "../../images/fitnessIcon.svg";
// import nutritionIcon from "../../images/nutritionIcon.svg";
// import wellnessIcon from "../../images/wellnessIcon.svg";
import baristaIcon from "../../images/baristaIconSeafoam.svg";
import birdIllustration from "../../images/littleBird.svg";

import "./Main.css";

function Main() {
  return (
    <main>
      <section className="main-landing">
        <h1>Danya Téllez</h1>
      </section>
      <section className="main-offerings">
        <h2>Wellness Your Way / Your Way to Wellness</h2>
        <div className="offerings-container">
          <article>
            <div className="offerings-icon-container">
              <img className="offerings-icon" src={yogaIcon} alt="yoga icon" />
            </div>
            <h4 className="offering-heading">Yoga</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel blandit nulla.</p>
          </article>
          <article>
            <div className="offerings-icon-container">
              <img className="offerings-icon" src={fitnessIcon} alt="fitness icon" />
            </div>
            <h4 className="offering-heading">Fitness</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel blandit nulla.</p>
          </article>
          <article>
            <div className="offerings-icon-container">
              <img className="offerings-icon" src={baristaIcon} alt="nutrition icon" />
            </div>
            <h4 className="offering-heading">Nutrition</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel blandit nulla.</p>
          </article>
        </div>
      </section>
      <section className="main-intro">
        <h3>One on One <br/> Training</h3>
        <img src={profilePic} alt="Danya" />
        <h3>Personalized <br/> Solutions</h3>
      </section>
      <section className="main-contact">
        <h2>Get in touch to learn more</h2>
        <img src={birdIllustration} alt="bird illustration" />
      </section>
    </main>
  );
}

export default Main;