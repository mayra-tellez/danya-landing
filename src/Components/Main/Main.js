import profilePic from "../../images/profilePic.png";
import yogaIcon from "../../images/yogaIconTeal.svg";
import fitnessIcon from "../../images/fitnessIconTeal.svg";
// import nutritionIcon from "../../images/nutritionIcon.svg";
// import wellnessIcon from "../../images/wellnessIcon.svg";
import baristaIcon from "../../images/baristaIcon.svg";

import "./Main.css";

function Main() {
  return (
    <main>
      <section className="main-landing">
        <h1>Lorem Ipsum</h1>
      </section>
      <section className="main-intro">
        <h3>One on One <br/> Training</h3>
        <img src={profilePic} alt="Danya" />
        <h3>Personalized <br/> Solutions</h3>
      </section>
      <section className="main-offerings">
        <h2>Wellness Your Way / Your Way to Wellness</h2>
        <div className="offerings-container">
          <article>
            <img className="offerings-icons" src={yogaIcon} alt="yoga icon" />
            <h4>Yoga</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel blandit nulla.</p>
          </article>
          <article>
            <img className="offerings-icons" src={fitnessIcon} alt="fitness icon" />
            <h4>Fitness</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel blandit nulla.</p>
          </article>
          <article>
            <img className="offerings-icons" src={baristaIcon} alt="nutrition icon" />
            <h4>Nutrition</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel blandit nulla.</p>
          </article>
        </div>
      </section>
      <section className="main-contact">
        <h2>Get in touch to learn more</h2>
      </section>
    </main>
  );
}

export default Main;