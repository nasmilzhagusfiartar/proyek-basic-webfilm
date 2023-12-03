import { Card, Container, Row, Col, Image } from "react-bootstrap";
import miImage from "../assets/images/trending/mi.jpg";
import jsImage from "../assets/images/trending/js.jpg";
import jwImage from "../assets/images/trending/jw.jpg";
import titanicImage from "../assets/images/trending/titanic.jpg";
import transformersImage from "../assets/images/trending/transformers.jpg";
import warriorsImage from "../assets/images/trending/warriors.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image
                src={miImage}
                alt="Mission Impossible Movie"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    Mission Impossible
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
              <Image src={jsImage} alt="Jurrasic Park" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Jurrasic Park</Card.Title>
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
              <Image src={jwImage} alt="Jurassic World" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    Jurassic World
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
              <Image src={titanicImage} alt="Titanic" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Titanic.</Card.Title>
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
                src={transformersImage}
                alt="Transformers"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    Transformers Age of Extinction
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
                src={warriorsImage}
                alt="The Warriors"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">The Warriors</Card.Title>
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

export default Trending;
