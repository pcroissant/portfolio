import photo from './assets/photo.jpg';
import logo_github from './assets/logo_github.png';
import logo_linkedin from './assets/logo_linkedin.png';
import logo_mail from './assets/logo_mail.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="Header-Picture" alt="Photo d'identité" />
        <p className="Header-Text">
          <span className="Header-Text-Name">Pierrick Croissant</span><br />Élève ingénieur à l'
          <a className="App-Link" href="https://ensc.bordeaux-inp.fr/fr" target="_blank">
            ENSC</a><br />
          <p className="Header-Links">
            <a href="https://github.com/pcroissant" target="_blank">
              <img className="Header-Links-Logo" src={logo_github} />
            </a>
            <a href="https://www.linkedin.com/in/pcroissant/" target="_blank">
              <img className="Header-Links-Logo" src={logo_linkedin} />
            </a>
            <a href="mailto:pcroissant@ensc.fr" target="_blank">
              <img className="Header-Links-Logo" src={logo_mail} />
            </a>
          </p>
        </p>
      </header>
      <body className="App-body">
        <p>WORK IN PROGRESS</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac leo molestie nisi gravida facilisis sed at odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam nunc justo, fermentum ac vestibulum non, lobortis sed diam. Phasellus efficitur ligula et libero porta blandit eget at massa. In nec sapien placerat, consectetur ante ut, condimentum quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultricies nibh massa, at pulvinar velit molestie et. Ut aliquet ullamcorper sem, ac fringilla enim aliquet eleifend. Pellentesque eu hendrerit magna. Duis ac mi ac felis laoreet porta ac nec orci. Aenean suscipit tortor vel pretium efficitur. Nunc vehicula, quam eget venenatis tristique, mauris diam ultrices ante, ornare tincidunt lacus dui sed sapien. Quisque dapibus lorem eget condimentum porttitor.
        <p>Maecenas at neque diam. Proin ut dignissim massa, quis porta neque. Duis non lectus porttitor, iaculis nibh ut, ultricies nunc. Vivamus non mauris venenatis, ultricies eros eu, lacinia nibh. Nunc quis dignissim nisl. Fusce sit amet tellus ultrices, volutpat neque sit amet, euismod quam. Donec mollis dignissim sem, vitae vulputate magna. Vestibulum lacinia neque eros, vitae vulputate turpis rhoncus id. Vivamus ut mauris tincidunt, suscipit lectus eget, rutrum odio. Fusce neque justo, ultrices id dui nec, dictum molestie ligula. Proin augue sapien, dignissim in arcu eu, ornare elementum erat. Nulla viverra leo porttitor vestibulum hendrerit. Donec rutrum efficitur maximus. Cras dapibus, leo vel varius porttitor, nibh velit sollicitudin ipsum, eu faucibus ligula ligula sed lectus. Quisque vestibulum, mi quis faucibus fermentum, mi nibh pellentesque ligula, vel fermentum enim enim ut nunc.</p></p>
      </body>
    </div>
  );
}

export default App;
