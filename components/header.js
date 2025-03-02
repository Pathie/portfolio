class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
          nav {
            display: flex;
            justify-content: space-between;
            padding-left: 64px;
            padding-right: 64px;
            border-bottom-style: solid;
            border-width: 1px;
          }
  
          ul li{
            padding: 0;
            display: inline;
            list-style-type: none;
            margin: 8px;
          }
  
          a {
            color: #000;
            font-size: 16px;
            line-height: 1.6;
            letter-spacing: 1px;
          }
  
          a:hover {
            //box-shadow: inset 0 -1px 0 0 #000;
            background-color: #DCFF78;
          }
        </style>
        <header>
          <nav>
          <h1>Patricia Lieske · mindful digital product designer</h1>
            <ul>
              <li><a href="index.html">Work</a></li> 
              <li><a href="about.html">About</a></li>
            </ul>
          </nav>
        </header>
      `;
  }
}

customElements.define("header-component", Header);
