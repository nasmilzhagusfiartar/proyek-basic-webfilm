import { Card, Container, Row, Col, Image } from "react-bootstrap";
import avengersImage from "../assets/images/avengers/avengers.jpg";
import avengers1Image from "../assets/images/avengers/avengers1.jpg";
import avengers2Image from "../assets/images/avengers/avengers2.jpg";
import avengers3Image from "../assets/images/avengers/avengers3.jpg";
import captamericaImage from "../assets/images/avengers/captamerica.jpg";
import captmarvelImage from "../assets/images/avengers/captmarvel.jpg";

const Avengers = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">AVENGERS MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="avengers">
            <Card className="movieImage">
              <Image src={avengersImage} alt="Avengers" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Avengers</Card.Title>
                  <Card.Text className="text-center">
                    Coming Soon on January 2023.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={avengers1Image}
                alt="Avengers Age of Ultron"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    Avengers Age of Ultron
                  </Card.Title>
                  <Card.Text className="text-center">
                    On Going at Theater.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={avengers2Image}
                alt="Avengers Infinity War"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    Avengers Infinity War
                  </Card.Title>
                  <Card.Text className="text-center">
                    On Going at Theater.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={avengers3Image}
                alt="Avengers End Game"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    Avengers End Game.
                  </Card.Title>
                  <Card.Text className="text-center">
                    Coming Soon on January 2023.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={captamericaImage}
                alt="Captain America"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    Captain America Civil War.
                  </Card.Title>
                  <Card.Text className="text-center">
                    Coming Soon January 2024.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={captmarvelImage}
                alt="Captain Marvel"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    Captain Marvel
                  </Card.Title>
                  <Card.Text className="text-center">
                    On Going at Theater.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Avengers;
