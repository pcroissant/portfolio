import photo from './assets/photo.jpg';
import logo_github from './assets/logo_github.png';
import logo_linkedin from './assets/logo_linkedin.png';
import logo_mail from './assets/logo_mail.png';

// import { Navbar, Nav, NavLink } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from "@fortawesome/free-solid-svg-icons"

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={photo} className="Header-Picture" alt="Identité" />
        <p className="Header-Text">
          <span className="Header-Text-Name">Pierrick Croissant</span><br />Élève ingénieur à l'
          <a className="App-Link" href="https://ensc.bordeaux-inp.fr/fr" target="_blank" rel="noreferrer">
            ENSC</a><br />
          <p className="Header-Links">
            <a href="https://github.com/pcroissant" target="_blank" rel="noreferrer">
              <img className="Header-Links-Logo" src={logo_github} alt="Logo GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/pcroissant/" target="_blank" rel="noreferrer">
              <img className="Header-Links-Logo" src={logo_linkedin} alt="Logo Linkedin" />
            </a>
            <a href="mailto:pcroissant@ensc.fr" target="_blank" rel="noreferrer">
              <img className="Header-Links-Logo" src={logo_mail} alt="Logo Mail" />
            </a>
          </p>
        </p>
      </header>
      {/* <Navbar className="App-navbar">
          <Nav pills className="mr-auto">
            <NavLink className="Navbar-Link" href="#"><FontAwesomeIcon icon={Icons.faHome} size="1x" /></NavLink>
            <NavLink className="Navbar-Link" href="#formations">Formations</NavLink>
            <NavLink className="Navbar-Link" href="#experiences">Expériences</NavLink>
            <NavLink className="Navbar-Link" href="#wip">Work in progress</NavLink>
          </Nav>
      </Navbar> */}
      <body className="App-body">
          <h1 name="formations" className="Body-Title"><FontAwesomeIcon icon={Icons.faGraduationCap} size="1x" /> FORMATIONS</h1>
          <ul>
            <div className="Body-Entry">
              <div className="Body-Entry-Left">
                <li>
                  <strong className="Body-Entry-Title">DIPLÔME D’INGÉNIERIE COGNITIQUE (2018 - 2021)</strong><br />
                  <a href="https://ensc.bordeaux-inp.fr/fr" className="Body-Entry-Subtitle" target="_blank" rel="noreferrer">École Nationale Supérieure de Cognitique</a><br /><br />
                  <p>
                    Ingénierie Cognitique : Biologie, Facteurs Humains, UX, KM<br />
                    Sciences Fondamentales : Programmation, Mathématiques, Traitement du Signal/Automatique
                  </p>
                </li>
              </div>
              <div className="Body-Entry-Right">
                <FontAwesomeIcon icon={Icons.faMapMarkerAlt} size="1x" />
                <a href="https://goo.gl/maps/GwSunWTqEVz5MQnB7" className="Body-Entry-Link" target="_blank" rel="noreferrer">
                  Bordeaux
              </a>
              </div>
            </div>
            <div className="Body-Entry">
              <div className="Body-Entry-Left">
                <li>
                  <strong className="Body-Entry-Title">LICENCE DE SCIENCES COGNITIVES (2015 - 2018)</strong><br />
                  <a href="https://www.univ-lyon2.fr/" className="Body-Entry-Subtitle" target="_blank" rel="noreferrer">Université Lumière Lyon II</a><br /><br />
                  <p>
                    Formation pluridisciplinaire et approfondie sur les disciplines relatives à la cognition humaine, animale et artificielle.
                  </p>
                </li>
              </div>
              <div className="Body-Entry-Right">
                <FontAwesomeIcon icon={Icons.faMapMarkerAlt} size="1x" />
                <a href="https://goo.gl/maps/fqXkK5b74bCyD2z2A" className="Body-Entry-Link" target="_blank" rel="noreferrer">
                  Lyon
              </a>
              </div>
            </div>
          </ul>

          <h1 name="experiences" className="Body-Title"><FontAwesomeIcon icon={Icons.faBriefcase} size="1x" /> EXPÉRIENCES</h1>
          <ul>
            <div className="Body-Entry">
              <div className="Body-Entry-Left">
                <li>
                  <strong className="Body-Entry-Title">INGÉNIEUR MACHINE LEARNING (2020)</strong><br />
                  <a href="https://www.wiidii.com/" className="Body-Entry-Subtitle" target="_blank" rel="noreferrer">Wiidii</a><br /><br />
                  <p>
                    Création et maintenance de features dans une architecure en micro-services, gestion de base de données graphe, gestion de datasets, utilisation et fine-tunning de modèle de NLP, développement d'interface web, documentation d'API, tests unitaires, intégration d'une chaine de productionen méthode agile.
                  </p>
                </li>
              </div>
              <div className="Body-Entry-Right">
                <FontAwesomeIcon icon={Icons.faMapMarkerAlt} size="1x" />
                <a href="https://g.page/Wiidii?share" className="Body-Entry-Link" target="_blank" rel="noreferrer">
                  Bordeaux
              </a>
              </div>
            </div>
            <div className="Body-Entry">
              <div className="Body-Entry-Left">
                <li>
                  <strong className="Body-Entry-Title">UX DESIGNER (2019)</strong><br />
                  <a href="https://lucine.fr/" className="Body-Entry-Subtitle" target="_blank" rel="noreferrer">Lucine</a><br /><br />
                  <p>
                    Organisation d'atélier de co-idéation, montage vidéo, création de personas, fonctionnement en méthode agile, travail équipe, organisation événementiel.
                  </p>
                </li>
              </div>
              <div className="Body-Entry-Right">
                <FontAwesomeIcon icon={Icons.faMapMarkerAlt} size="1x" />
                <a href="https://goo.gl/maps/xqauJx9atBZ71dvn7" className="Body-Entry-Link" target="_blank" rel="noreferrer">
                  Bordeaux
              </a>
              </div>
            </div>
          </ul>

          <h1 name="wip" className="Body-Title"><FontAwesomeIcon icon={Icons.faCogs} size="1x" /> WORK IN PROGRESS</h1><br />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac leo molestie nisi gravida facilisis sed at odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam nunc justo, fermentum ac vestibulum non, lobortis sed diam. Phasellus efficitur ligula et libero porta blandit eget at massa. In nec sapien placerat, consectetur ante ut, condimentum quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultricies nibh massa, at pulvinar velit molestie et. Ut aliquet ullamcorper sem, ac fringilla enim aliquet eleifend. Pellentesque eu hendrerit magna. Duis ac mi ac felis laoreet porta ac nec orci. Aenean suscipit tortor vel pretium efficitur. Nunc vehicula, quam eget venenatis tristique, mauris diam ultrices ante, ornare tincidunt lacus dui sed sapien. Quisque dapibus lorem eget condimentum porttitor.
        <p>Maecenas at neque diam. Proin ut dignissim massa, quis porta neque. Duis non lectus porttitor, iaculis nibh ut, ultricies nunc. Vivamus non mauris venenatis, ultricies eros eu, lacinia nibh. Nunc quis dignissim nisl. Fusce sit amet tellus ultrices, volutpat neque sit amet, euismod quam. Donec mollis dignissim sem, vitae vulputate magna. Vestibulum lacinia neque eros, vitae vulputate turpis rhoncus id. Vivamus ut mauris tincidunt, suscipit lectus eget, rutrum odio. Fusce neque justo, ultrices id dui nec, dictum molestie ligula. Proin augue sapien, dignissim in arcu eu, ornare elementum erat. Nulla viverra leo porttitor vestibulum hendrerit. Donec rutrum efficitur maximus. Cras dapibus, leo vel varius porttitor, nibh velit sollicitudin ipsum, eu faucibus ligula ligula sed lectus. Quisque vestibulum, mi quis faucibus fermentum, mi nibh pellentesque ligula, vel fermentum enim enim ut nunc.</p></p>  <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac leo molestie nisi gravida facilisis sed at odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam nunc justo, fermentum ac vestibulum non, lobortis sed diam. Phasellus efficitur ligula et libero porta blandit eget at massa. In nec sapien placerat, consectetur ante ut, condimentum quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultricies nibh massa, at pulvinar velit molestie et. Ut aliquet ullamcorper sem, ac fringilla enim aliquet eleifend. Pellentesque eu hendrerit magna. Duis ac mi ac felis laoreet porta ac nec orci. Aenean suscipit tortor vel pretium efficitur. Nunc vehicula, quam eget venenatis tristique, mauris diam ultrices ante, ornare tincidunt lacus dui sed sapien. Quisque dapibus lorem eget condimentum porttitor.
        <p>Maecenas at neque diam. Proin ut dignissim massa, quis porta neque. Duis non lectus porttitor, iaculis nibh ut, ultricies nunc. Vivamus non mauris venenatis, ultricies eros eu, lacinia nibh. Nunc quis dignissim nisl. Fusce sit amet tellus ultrices, volutpat neque sit amet, euismod quam. Donec mollis dignissim sem, vitae vulputate magna. Vestibulum lacinia neque eros, vitae vulputate turpis rhoncus id. Vivamus ut mauris tincidunt, suscipit lectus eget, rutrum odio. Fusce neque justo, ultrices id dui nec, dictum molestie ligula. Proin augue sapien, dignissim in arcu eu, ornare elementum erat. Nulla viverra leo porttitor vestibulum hendrerit. Donec rutrum efficitur maximus. Cras dapibus, leo vel varius porttitor, nibh velit sollicitudin ipsum, eu faucibus ligula ligula sed lectus. Quisque vestibulum, mi quis faucibus fermentum, mi nibh pellentesque ligula, vel fermentum enim enim ut nunc.</p></p>  <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac leo molestie nisi gravida facilisis sed at odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam nunc justo, fermentum ac vestibulum non, lobortis sed diam. Phasellus efficitur ligula et libero porta blandit eget at massa. In nec sapien placerat, consectetur ante ut, condimentum quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin ultricies nibh massa, at pulvinar velit molestie et. Ut aliquet ullamcorper sem, ac fringilla enim aliquet eleifend. Pellentesque eu hendrerit magna. Duis ac mi ac felis laoreet porta ac nec orci. Aenean suscipit tortor vel pretium efficitur. Nunc vehicula, quam eget venenatis tristique, mauris diam ultrices ante, ornare tincidunt lacus dui sed sapien. Quisque dapibus lorem eget condimentum porttitor.
        <p>Maecenas at neque diam. Proin ut dignissim massa, quis porta neque. Duis non lectus porttitor, iaculis nibh ut, ultricies nunc. Vivamus non mauris venenatis, ultricies eros eu, lacinia nibh. Nunc quis dignissim nisl. Fusce sit amet tellus ultrices, volutpat neque sit amet, euismod quam. Donec mollis dignissim sem, vitae vulputate magna. Vestibulum lacinia neque eros, vitae vulputate turpis rhoncus id. Vivamus ut mauris tincidunt, suscipit lectus eget, rutrum odio. Fusce neque justo, ultrices id dui nec, dictum molestie ligula. Proin augue sapien, dignissim in arcu eu, ornare elementum erat. Nulla viverra leo porttitor vestibulum hendrerit. Donec rutrum efficitur maximus. Cras dapibus, leo vel varius porttitor, nibh velit sollicitudin ipsum, eu faucibus ligula ligula sed lectus. Quisque vestibulum, mi quis faucibus fermentum, mi nibh pellentesque ligula, vel fermentum enim enim ut nunc.</p></p>
      </body>
    </div>
  );
}

export default App;
