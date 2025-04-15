import { Container, Row, Col } from "react-bootstrap";
import Blog1 from "../../assets/images/1523699544907.png";
import Blog2 from "../../assets/images/peopleHandOver.jpg";
import Blog3 from "../../assets/images/b3_part.jpg";
import Escalator from "../../assets/images/Escalator.png";

// Section data
const sections = [
  {
    title: "Our Mission",
    text: "Our mission is to deliver top-notch solutions to our clients ensuring the highest level of satisfaction.",
    image: Blog1,
    layout: "left-text",
    bgClass: "bg-light",
    imageStyle: "w-[75%] h-auto rounded-[25px] mx-auto d-block",
  },
  {
    title: "Our Vision",
    text: "We envision a future where technology empowers people and transforms industries.",
    image: Blog2,
    layout: "right-text",
    bgClass: "",
    imageStyle: "w-[70%] h-auto rounded-[50px] mx-auto d-block shadow-md",
  },
  {
    title: "Our Values",
    text: "Integrity, innovation, and commitment to excellence define our core values.",
    image: Blog3,
    layout: "left-text",
    bgClass: "bg-light",
    imageStyle: "w-[70%] h-[250px] object-cover rounded-[20px] mx-auto d-block shadow-md",
  },
];

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Container
        fluid
        className="my-5 py-5 text-dark shadow-md bg-gradient-to-r from-[#A888B5] via-[#E4D2D8] to-[#F2F4F7]"
      >
        <Row className="align-items-center text-center">
          <Col md={6} className="px-5 text-md-start">
            <h1 className="display-4 text-gray-900">Welcome to Our Platform</h1>
            <p className="lead text-gray-700">
              We provide high-quality services to help you achieve your goals.
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img
              src={Escalator}
              alt="Hero"
              className="img-fluid w-[80%] h-auto rounded"
            />
          </Col>
        </Row>
      </Container>

      {/* Info Sections */}
      {sections.map((section, index) => (
        <Container
          key={index}
          fluid
          className={`my-5 py-5 ${section.bgClass} shadow-lg`}
        >
          <Row className="align-items-center text-center">
            {section.layout === "right-text" && (
              <Col md={6} className="d-flex justify-content-center">
                <img
                  src={section.image}
                  alt={section.title}
                  className={`img-fluid ${section.imageStyle}`}
                />
              </Col>
            )}

            <Col md={6} className="px-5 text-md-start">
              <h2>{section.title}</h2>
              <p>{section.text}</p>
            </Col>

            {section.layout === "left-text" && (
              <Col md={6} className="d-flex justify-content-center">
                <img
                  src={section.image}
                  alt={section.title}
                  className={`img-fluid ${section.imageStyle}`}
                />
              </Col>
            )}
          </Row>
        </Container>
      ))}
    </div>
  );
};

export default Home;
