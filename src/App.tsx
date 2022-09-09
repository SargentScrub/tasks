import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript: Chitraksh Bhatt
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World.</p>
            <h1>Task 3</h1>
            <Container>
                <Row>
                    <Col>
                        <img
                            src="https://www.sherdog.com/image_crop/200/300/_images/fighter/20220331075843_Khamzat_Chimaev_ff.JPG"
                            alt="Khamzat Chimaev, a UFC fighter"
                        />
                        <p>Khamzat Chimaev, a UFC fighter</p>
                        <div
                            style={{
                                border: "5px solid purple",
                                height: "100px",
                                width: "500px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <p>
                            Khamzat Chimaev Facts:
                            <ol>
                                <li>Welterweight UFC fighter</li>
                                <li>Undefeated at both 170 and 185 lbs </li>
                                <li>
                                    Missed weight by 7.5 lbs for his upcoming
                                    bout
                                </li>
                            </ol>
                        </p>
                        <div
                            style={{
                                border: "5px solid purple",
                                height: "100px",
                                width: "500px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
