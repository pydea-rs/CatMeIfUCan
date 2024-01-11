import { Component } from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./classification_styles.css"; // Import your custom CSS file

class ClassificationCard extends Component {
    state = { imageSrc: null };

    // componentDidUpdate(prevState, prevProps) {
    //     if (prevProps.children !== this.props.children) {
    //         console.log("Updated ClassificationCard");
    //         console.log("Upldated ClassComp");
    //         this.setState({ image: this.props?.children[0]?.image });
    //     }
    // }
    componentDidMount() {
        console.log("Updated ClassificationCard");
        console.log("Upldated ClassComp");
        this.setState({ image: this.props?.children[0]?.image });
    }
    render() {
        const { image } = this.state;
        const { children: predictions } = this.props;

        return (
            <Row className="my-2 mx-1 classification-card">
                <Col xs={3} className="image-column">
                    <Image
                        src={image}
                        alt="Card Image"
                        width={256}
                        height={164}
                        rounded
                        className="img-fluid"
                    />
                </Col>
                <Col className="data-column">
                    {predictions.map((row, index) => (
                        <Row key={index} className="text-left data-row">
                            {row.classification} : {row.probability}%
                        </Row>
                    ))}
                </Col>
            </Row>
        );
    }
}

export default ClassificationCard;
