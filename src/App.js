import "./App.css";
import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { BsLinkedin, BsGithub, BsMailbox2 } from "react-icons/bs";

const H5 = styled.h4`
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    font-size: calc(48px + 2vmin);
    margin: 20px;
`;

function App() {
    const linkedInUrl = "https://www.linkedin.com/in/khangerel-ganzorig/";
    const githubUrl = "https://github.com/Khangerel";
    const resumeUrl =
        "https://resume-ganzokhan.s3.us-east-2.amazonaws.com/Khangerel_Ganzorig-Resume.pdf";
    const email = "ganzokhan@gmail.com";
    return (
        <div className="App">
            <header className="App-header">
                <H5>Khangerel Ganzorig</H5>
                <p style={{ margin: 5, color: "grey" }}>
                    Software Engineer | Full Stack Developer
                </p>
                <p style={{ margin: 5, color: "grey" }}>
                    Please feel free to contact me!
                </p>
                <button
                    className="App-button"
                    onClick={(e) => {
                        e.preventDefault();
                        const link = document.createElement("a");
                        link.href = `${resumeUrl}`;
                        link.target = "_self";
                        link.style.display = "none";
                        document.body.appendChild(link);
                        setTimeout(() => {
                          link.click();
                          document.body.removeChild(link);
                        }, 0);
                    }}
                >
                    Resume
                </button>
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "row",
                    }}
                >
                    <Col key={1} xs={6} md={4} lg={3}>
                        <button
                            className="Social-button"
                            onClick={() => window.open(linkedInUrl, "_blank")}
                        >
                            <BsLinkedin size={"2.5vh"} color="rgb(55, 85, 136)"/>
                        </button>
                    </Col>
                    <Col key={2} xs={6} md={4} lg={3}>
                        <button
                            className="Social-button"
                            onClick={() => window.open(githubUrl, "_blank")}
                        >
                            <BsGithub size={"2.5vh"} color="rgb(55, 85, 136)"/>
                        </button>
                    </Col>
                    <Col key={3} xs={6} md={4} lg={3}>
                        <button
                            className="Social-button"
                            onClick={() => window.open(`mailto:${email}`)}
                        >
                            <BsMailbox2 size={"2.5vh"} color="rgb(55, 85, 136)"/>
                        </button>
                    </Col>
                </Row>
            </header>
        </div>
    );
}

export default App;
