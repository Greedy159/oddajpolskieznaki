import { useState, Fragment } from "react";
import classes from "./Form.module.css";
import { FormControl, FormGroup, InputGroup, Row, Col } from "react-bootstrap";
import React from "react";
import Modal from "../UI/Modal";

const Formx = (props) => {
  const [show, setShow] = useState(true);
  const [collectedData, setCollectedData] = useState({
    enteredTitle: "",
    enteredAuthor: "",
    enteredDescription: "",
    enteredPrice: "",
    enteredCategory: "",
    enteredPicture: "",
    enteredAgeRestriction: "",
    enteredRating: "",
  });

  const titleHandler = (event) => {
    setCollectedData({
      ...collectedData,
      enteredTitle: event.target.value,
    });
  };
  const authorHandler = (event) => {
    setCollectedData({
      ...collectedData,
      enteredAuthor: event.target.value,
    });
  };
  const descriptionHandler = (event) => {
    setCollectedData({
      ...collectedData,
      enteredDescription: event.target.value,
    });
  };
  const priceHandler = (event) => {
    setCollectedData({
      ...collectedData,
      enteredPrice: event.target.value,
    });
  };
  const categoryHandler = (event) => {
    setCollectedData({
      ...collectedData,
      enteredCategory: event.target.value,
    });
  };
  const pictureHandler = (event) => {
    setCollectedData({
      ...collectedData,
      enteredPicture: event.target.value,
    });
  };
  const ageRestrictionHandler = (event) => {
    setCollectedData({
      ...collectedData,
      enteredAgeRestriction: event.target.value,
    });
  };
  const ratingHandler = (event) => {
    setCollectedData({
      ...collectedData,
      enteredRating: event.target.value
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newBookData = {
      title: collectedData.enteredTitle,
      rating: (+collectedData.enteredRating).toFixed(2),
      price: (+collectedData.enteredPrice).toFixed(2),
      picture: collectedData.enteredPicture,
      description: collectedData.enteredDescription,
      category: collectedData.enteredCategory,
      author: collectedData.enteredAuthor,
      ageRestriction: collectedData.enteredAgeRestriction,
    };
    setCollectedData({
      enteredTitle: "",
      enteredAuthor: "",
      enteredDescription: "",
      enteredPrice: "",
      enteredCategory: "",
      enteredPicture: "",
      enteredAgeRestriction: "",
      enteredRating: "",
    });
    props.addHandler(newBookData);
    setShow(true)
  };

  // const testRegex = /^a/
  // console.log(testRegex.test("abcd"))
  // regex101

  return (<Fragment>
    <Modal show={show} setShow={setShow}/>
    <form className={classes.form} onSubmit={submitHandler}>
      <h1>Add a new book:</h1>
      <FormGroup>
        <Row>
          <Col>
            <InputGroup className="p-3">
              <InputGroup.Text bsPrefix={classes.custom2}>
                Title
              </InputGroup.Text>
              <FormControl
                bsPrefix={classes.custom1}
                placeholder=" Title "
                onChange={titleHandler}
                value={collectedData.enteredTitle}
              />
            </InputGroup>
            <InputGroup className="p-3">
              <InputGroup.Text bsPrefix={classes.custom2}>
                Category
              </InputGroup.Text>
              <FormControl
                bsPrefix={classes.custom1}
                placeholder=" ex. Horror "
                onChange={categoryHandler}
                value={collectedData.enteredCategory}
              />
            </InputGroup>
            <InputGroup className="p-3">
              <InputGroup.Text bsPrefix={classes.custom2}>
                Age Restriction
              </InputGroup.Text>
              <FormControl
                bsPrefix={classes.custom1}
                type="number"
                placeholder=" ex. 18 "
                onChange={ageRestrictionHandler}
                value={collectedData.enteredAgeRestriction}
              />
            </InputGroup>
            <InputGroup className="p-3">
              <InputGroup.Text bsPrefix={classes.custom2}>
                Description
              </InputGroup.Text>
              <FormControl
                bsPrefix={classes.textarea}
                as="textarea"
                aria-label="With textarea"
                onChange={descriptionHandler}
                value={collectedData.enteredDescription}
              />
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="p-3">
              <InputGroup.Text bsPrefix={classes.custom2}>
                Author
              </InputGroup.Text>
              <FormControl
                bsPrefix={classes.custom1}
                placeholder=" Author's full name "
                onChange={authorHandler}
                value={collectedData.enteredAuthor}
              />
            </InputGroup>
            <InputGroup className="p-3">
              <InputGroup.Text bsPrefix={classes.custom2}>
                Price $
              </InputGroup.Text>
              <FormControl
                bsPrefix={classes.custom1}
                placeholder=" ex. 29.99 "
                onChange={priceHandler}
                value={collectedData.enteredPrice}
              />
            </InputGroup>
            <InputGroup className="p-3">
              <InputGroup.Text bsPrefix={classes.custom2}>
                Rating
              </InputGroup.Text>
              <FormControl
                bsPrefix={classes.custom1}
                placeholder=" ex. 9.11 "
                onChange={ratingHandler}
                value={collectedData.enteredRating}
              />
            </InputGroup>
            <InputGroup className="p-3">
              <InputGroup.Text bsPrefix={classes.custom2}>
                Image URL
              </InputGroup.Text>
              <FormControl
                bsPrefix={classes.custom1}
                placeholder=" ex. https://your.link.com/s1E3Imhc0A.jpeg "
                onChange={pictureHandler}
                value={collectedData.enteredPicture}
              />
            </InputGroup>
            <button type="submit">Submit</button>
            <button>Cancel</button>
          </Col>
        </Row>
      </FormGroup>
    </form>
    </Fragment>
  );
};

export default Formx;
