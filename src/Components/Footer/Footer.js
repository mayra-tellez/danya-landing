import "./Footer.css";

function Footer() {
  return (
    <footer>
      <article className="socials-article">
        Socials
        <ul className="socials-list">
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Arbonne?</li>
        </ul>
      </article>
      <article>
        Footer Menu
        <nav>
          <ul className="footer-nav-list">
            <li>
              <a>Purpose</a>
            </li>
            <li>
              <a>Training</a>
            </li>
            <li>
              <a>Arbonne</a>
            </li>
          </ul>
        </nav>
      </article>
      <article>
        Get in Touch
        <form>
          <label>
            Email:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </article>
    </footer>
  );
}

export default Footer;