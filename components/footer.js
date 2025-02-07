class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
          footer {
            display: flex;
            justify-content: space-between;
            padding-left: 64px;
            padding-right: 64px;
            border-top-style: solid;
            border-width: 1px;
          }
  
          ul li {
           padding: 0;
            display: inline;
            list-style-type: none;
            margin: 8px;
          }
  
          a {
            color: #000;
          }
  
          a:hover {
            // box-shadow: inset 0 -1px 0 0 #000;
            background-color: #DCFF78;

          }
        </style>
        <footer>
        <p>© 2025 Patricia Lieske. All rights reserved.</p>
          <ul>
            <li><a href="https://www.behance.net/patricialieske" target=”_blank”>Behance</a></li>
            <li><a href="https://dribbble.com/pathie" target=”_blank”>Dribble</a></li>
            <li><a href="https://www.linkedin.com/in/patricia-lieske-11939bb9/" target=”_blank”>LinkedIn</a></li>
          </ul>
        </footer>
      `;
  }
}

customElements.define("footer-component", Footer);
