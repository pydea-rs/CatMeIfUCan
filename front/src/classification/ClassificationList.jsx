import { Component } from "react";
import api from "../api";
import { Col, Container, Row } from "react-bootstrap";
import ClassificationCard from "./ClassificationCard";

class ClassificationList extends Component {
    state = {
        predictions: [],
    };

    async componentDidMount() {
        const { children: IDs } = this.props,
            predictions = [];

        console.log("ClassifixationList Updated...");
        for (const id of IDs) {
            const { status, data } = await api.getClassifications(id);
            if (status === 200) {
                predictions.push(data);
            }
        }
        this.setState({ predictions });
    }
    // async componentDidUpdate(prevState, prevProps) {
    //     const { children: IDs } = this.props,
    //         predictions = [];
    //     if (prevProps.children !== IDs) {
    //         console.log("ClassifixationList Updated...");
    //         for (const id of IDs) {
    //             const { status, data } = await api.getClassifications(id);
    //             if (status === 200) {
    //                 predictions.push(data);
    //             }
    //         }
    //         this.setState({ predictions });
    //     }
    // }
    render() {
        return (
            <Container>
                <Row>
                    {this.state?.predictions.map((entity, index) => (
                        <ClassificationCard key={index}>
                            {entity}
                        </ClassificationCard>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default ClassificationList;
