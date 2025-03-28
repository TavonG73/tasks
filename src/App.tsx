/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";
function App(): JSX.Element {
    return (
        <div>
            <h1>Tavon Website</h1>
            <img
                src="https://www.google.com/search?q=lebron+jamestbm=ischved=2ahUKEwjF4Jem8aX6AhWbtXIEHQx1DxcQ2-cCegQIABAA#imgrc=lSggYxaBapjIUM"
                alt="Photo of Lebron James"
            />
            <ol>
                <li> Russell Westbrook</li>
                <li> Lebron James</li>
                <li> Anthony Davis</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>First column.</Col>
                    <Col>
                        Second Column. Completing tasks not represented in tests
                        part 1
                    </Col>
                </Row>
            </Container>
            <div className="App">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript
                </header>
                Hello World
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload.
                    <hr></hr>
                    <CheckAnswer expectedAnswer="42"></CheckAnswer>
                    <hr></hr>
                    <GiveAttempts></GiveAttempts>
                    <hr></hr>
                    <EditMode></EditMode>
                    <hr></hr>
                    <ChangeColor></ChangeColor>
                    <hr></hr>
                    <MultipleChoiceQuestion
                        options={["a", "b", "c"]}
                        expectedAnswer="b"
                    ></MultipleChoiceQuestion>
                    <hr></hr>
                    {/* <DoubleHalf></DoubleHalf> */}
                    <hr></hr>
                    <ChooseTeam></ChooseTeam>
                    <hr></hr>
                    <ColoredBox></ColoredBox>
                    <hr></hr>
                    <ShoveBox></ShoveBox>
                    <hr></hr>
                    <Counter></Counter>
                    <hr />
                    <RevealAnswer></RevealAnswer>
                    <hr />
                    <StartAttempt></StartAttempt>
                    <hr />
                    <TwoDice></TwoDice>
                    <hr />
                    <ChangeType></ChangeType>
                    <hr />
                    <CycleHoliday></CycleHoliday>
                </p>
            </div>
        </div>
    );
}
export default App;
