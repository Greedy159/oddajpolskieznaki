import { useState, Fragment } from "react";
import classes from "./Form.module.css";
import { FormControl, FormGroup, InputGroup, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import React from "react";
import Modal from "../UI/Modal";

const Formx = (props) => {
  const [show, setShow] = useState(false);

  const [collectedTitle, setCollectedTitle] = useState("");
  const [collectedAuthor, setCollectedAuthor] = useState("");
  const [collectedDescription, setCollectedDescription] = useState("");
  const [collectedPrice, setCollectedPrice] = useState("");
  const [collectedCategory, setCollectedCategory] = useState("");
  const [collectedPicture, setCollectedPicture] = useState("");
  const [collectedAgeRestriction, setCollectedAgeRestriction] = useState("");
  const [collectedRating, setCollectedRating] = useState("");

  const titleHandler = (event) => {
    setCollectedTitle(event.target.value);
  };
  const authorHandler = (event) => {
    setCollectedAuthor(event.target.value);
  };
  const descriptionHandler = (event) => {
    setCollectedDescription(event.target.value);
  };
  const priceHandler = (event) => {
    setCollectedPrice(event.target.value);
  };
  const categoryHandler = (event) => {
    setCollectedCategory(event.target.value);
  };
  const pictureHandler = (event) => {
    setCollectedPicture(event.target.value);
  };
  const ageRestrictionHandler = (event) => {
    setCollectedAgeRestriction(event.target.value);
  };
  const ratingHandler = (event) => {
    setCollectedRating(event.target.value);
  };

  const [errorArray1, setErrorArray1] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    const errorArray = [];

    const regexTestTitle = /[A-Za-z0-9]/;
    if (!regexTestTitle.test(collectedTitle)) {
      errorArray.push("Invalid Title Input.");
    }
    const regexTestCategory = /[a-z]/;
    if (!regexTestCategory.test(collectedCategory)) {
      errorArray.push("Invalid Category Input.");
    }
    const regexTestAgeRestriction = /[0-9]/;
    if (!regexTestAgeRestriction.test(collectedAgeRestriction)) {
      errorArray.push("Invalid Age Restriction Input.");
    }
    if (collectedAgeRestriction === 0) {
      setCollectedAgeRestriction("No Restriction.");
    }
    if (collectedAgeRestriction > 18) {
      errorArray.push("Max Age Restriction is 18+");
    }
    if (collectedDescription.length > 300) {
      errorArray.push("Max Description length is 300 characters.");
    }
    const regexTestAuthor = /[A-Za-z]/;
    if (!regexTestAuthor.test(collectedAuthor)) {
      errorArray.push("Invalid Author Input.");
    }
    const regexTestPrice = /[0-9]/;
    if (!regexTestPrice.test(collectedPrice)) {
      errorArray.push("Invalid Price Input.");
    }
    const regexTestRating = /[0-9]/;
    if (!regexTestRating.test(collectedRating)) {
      errorArray.push("Invalid Rating Input.");
    }
    const regexTestURL =
      /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/;
    if (!regexTestURL.test(collectedPicture)) {
      errorArray.push("Invalid Image URL.");
    }
    setErrorArray1(errorArray);
    if (errorArray.length > 0) {
      setShow(true);
      return;
    }

    const newBookData = {
      title: collectedTitle,
      rating: collectedRating,
      price: collectedPrice,
      picture: collectedPicture,
      description: collectedDescription,
      category: collectedCategory,
      author: collectedAuthor,
      ageRestriction: collectedAgeRestriction,
    };

    setCollectedTitle("");
    setCollectedRating("");
    setCollectedPrice("");
    setCollectedPicture("");
    setCollectedDescription("");
    setCollectedCategory("");
    setCollectedAuthor("");
    setCollectedAgeRestriction("");

    props.addHandler(newBookData);
  };

  return (
    <Fragment>
      <Modal show={show} setShow={setShow} errorArray={errorArray1} />
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
                  value={collectedTitle}
                />
              </InputGroup>
              <InputGroup className="p-3">
                <InputGroup.Text bsPrefix={classes.custom2}>
                  Category
                </InputGroup.Text>
                <Form.Select
                  bsPrefix={classes.custom1}
                  aria-label="Default select example"
                  onChange={categoryHandler}
                  defaultValue=""
                >
                  <option value="" disabled>
                    {"Select category"}
                  </option>
                  <option value="Action">Action</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Documentary">Documentary</option>
                  <option value="Drama">Drama</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Horror">Horror</option>
                  <option value="Mystery">Mystery</option>
                  <option value="Romance">Romance</option>
                  <option value="Sci-fi">Sci-fi</option>
                  <option value="Thriller">Thriller</option>
                  <option value="TWestern">Western</option>
                </Form.Select>
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
                  value={collectedAgeRestriction}
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
                  value={collectedDescription}
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
                  value={collectedAuthor}
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
                  value={collectedPrice}
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
                  value={collectedRating}
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
                  value={collectedPicture}
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
