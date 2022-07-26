import "./Main.css";
import profilePic from "../../images/profilePic.png";

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
            <img src="" alt="yoga icon" />
            <h4>Yoga</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel blandit nulla.</p>
          </article>
          <article>
            <img src="" alt="fitness icon" />
            <h4>Fitness</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel blandit nulla.</p>
          </article>
          <article>
            <img src="" alt="nutrition icon" />
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