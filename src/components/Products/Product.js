import classes from "./Product.module.css";
import Accordion from "react-bootstrap/accordion";
import CloseButton from "react-bootstrap/CloseButton";
import ReactStars from "react-rating-stars-component";

const Product = (props) => {

  const removeHandler = () => {
    let title = props.title
    props.removeHandler(title)
  };

  return (
    <li>
      <div className={classes.card}>
        <div className={classes.test}>
          <img
            src={props.img}
            alt=""
          ></img>
        </div>
        <div className={classes.test2}>
          <header>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.image}>
            <div className={classes.middiv}>
              <h4>By: {props.author}</h4>
              <div className={classes.details}>
                <p>Category: {props.category}</p>
                <p>Age: {props.age}</p>
                <span className={classes.p1}>
                  Rating: {props.rating}
                  <ReactStars
                    count={10}
                    size={24}
                    value={Number(props.rating)}
                    edit={false}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#fdb226d8"
                  />
                </span>
              </div>
              <p className={classes.price}>Price: ${props.price}</p>
            </div>
            <div className={classes.description}>
              <Accordion className={classes.accordion}>
                <Accordion.Item eventKey="0" className={classes.accordion}>
                  <Accordion.Header className={classes.accordion}>
                    Description
                  </Accordion.Header>
                  <Accordion.Body className={classes.accordion}>
                    {props.description}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
        <div className={classes.closeButton}>
          <CloseButton onClick={removeHandler}/>
        </div>
      </div>
    </li>
  );
};

export default Product;
