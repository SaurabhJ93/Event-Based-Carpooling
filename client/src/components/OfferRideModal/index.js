import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


const OfferRide = (props) => {
    const [validated, setValidated] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    const sendOfferRide = async (form) => {

        const data = {
            eventId: props.eventId,
            username: props.userId,
            carModel: form.carModel.value,
            noOfSeats: form.noOfSeats.value,
            startTime: form.email.value,
            address1: form.address1.value,
            address2: form.address2.value,
            city: form.city.value,
            state: form.state.value,
            zipCode: form.zipCode.value
        }
        // const data = { eventId: props.eventId }
        console.log(`Data to be passed ${JSON.stringify(data)}`);

        await fetch('http://localhost:5000/offerRide', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((res) => {
                console.log('Data received is', res);
                if (res['response'] == 'Success') {
                    setShowToast(true);
                }
                else {
                    alert(res['response']);
                }
            }).catch(error => {
                alert('Error occured. Contact Admin.');
                props.onSubmit();
            });
    };

    const handleSubmit = event => {
        console.log('In Handle Submit');
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            console.log('In Show toast');
            sendOfferRide(form);
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    const hanldeToastClose = () => {
        console.log('Hit close toast!');
        setShowToast(false);
        props.onSubmit();
    };

    return (
        <div>
            <Modal show={props.show} onHide={props.onSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter following details to offer a ride</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group as={Row} controlId="formPlaintextCarModel">
                            <Form.Label column sm="3">
                                Car Model
                        </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" name="carModel" placeholder="Car Model" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formNoOfSeats">
                            <Form.Label column sm="6">
                                Number of seats available
                        </Form.Label>
                            <Col sm="6">
                                <Form.Control name="noOfSeats" as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formStartTime">
                            <Form.Label column sm="3">
                                Start Time
                        </Form.Label>
                            <Col sm="9">
                                {/* <TimePicker onChange={onTimeChange} name="startTime" start="10:00" end="21:00" step={30} /> */}

                                <DatePicker
                                    name="startTime"
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="h:mm aa"
                                />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formAddress1">
                            <Form.Label column sm="4">
                                Starting Address Line 1
                        </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" name="address1" placeholder="Address Line 1" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formAddress2">
                            <Form.Label column sm="4">
                                Line 2
                        </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" name="address2" placeholder="Address Line 2" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formCity">
                            <Form.Label column sm="3">
                                City
                        </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" name="city" placeholder="City" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formState">
                            <Form.Label column sm="3">
                                State
                        </Form.Label>
                            <Col sm="9">
                                <Form.Control name="state" as="select">
                                    <option value="">N/A</option>
                                    <option value="AK">Alaska</option>
                                    <option value="AL">Alabama</option>
                                    <option value="AR">Arkansas</option>
                                    <option value="AZ">Arizona</option>
                                    <option value="CA">California</option>
                                    <option value="CO">Colorado</option>
                                    <option value="CT">Connecticut</option>
                                    <option value="DC">District of Columbia</option>
                                    <option value="DE">Delaware</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="IA">Iowa</option>
                                    <option value="ID">Idaho</option>
                                    <option value="IL">Illinois</option>
                                    <option value="IN">Indiana</option>
                                    <option value="KS">Kansas</option>
                                    <option value="KY">Kentucky</option>
                                    <option value="LA">Louisiana</option>
                                    <option value="MA">Massachusetts</option>
                                    <option value="MD">Maryland</option>
                                    <option value="ME">Maine</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MN">Minnesota</option>
                                    <option value="MO">Missouri</option>
                                    <option value="MS">Mississippi</option>
                                    <option value="MT">Montana</option>
                                    <option value="NC">North Carolina</option>
                                    <option value="ND">North Dakota</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NH">New Hampshire</option>
                                    <option value="NJ">New Jersey</option>
                                    <option value="NM">New Mexico</option>
                                    <option value="NV">Nevada</option>
                                    <option value="NY">New York</option>
                                    <option value="OH">Ohio</option>
                                    <option value="OK">Oklahoma</option>
                                    <option value="OR">Oregon</option>
                                    <option value="PA">Pennsylvania</option>
                                    <option value="PR">Puerto Rico</option>
                                    <option value="RI">Rhode Island</option>
                                    <option value="SC">South Carolina</option>
                                    <option value="SD">South Dakota</option>
                                    <option value="TN">Tennessee</option>
                                    <option value="TX">Texas</option>
                                    <option value="UT">Utah</option>
                                    <option value="VA">Virginia</option>
                                    <option value="VT">Vermont</option>
                                    <option value="WA">Washington</option>
                                    <option value="WI">Wisconsin</option>
                                    <option value="WV">West Virginia</option>
                                    <option value="WY">Wyoming</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formZipCode">
                            <Form.Label column sm="3">
                                Zip Code
                        </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" name="zipCode" placeholder="Zip Code" minLength='5' maxLength='5' />
                                <Form.Control.Feedback type="invalid">
                                    Enter Zipcode of 5 characters.
                            </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Col xs={12} className="text-center">
                            <Button variant="primary" type="submit">
                                Save
                        </Button>
                        </Col>
                        <Col>
                            <Toast onClose={hanldeToastClose} show={showToast} delay={3000} autohide>
                                <Toast.Body>Data Saved! View it on your profile.</Toast.Body>
                            </Toast>
                        </Col>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default OfferRide;
