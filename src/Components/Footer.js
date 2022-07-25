
function Footer() {
  return (
    <footer>
      <article>
        Socials
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Link to Arbonne?</li>
        </ul>
      </article>
      <article>
        Footer Menu
        <nav>
          <ul>
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