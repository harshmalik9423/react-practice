import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
class DishDetail extends Component {

    componentDidMount() {
        console.log("DishDetailComponent componentDidMount Called");
    }

    componentDidUpdate() {
        console.log("DishDetailComponent updated");
    }

    renderDish(dish) {
        if (dish !== null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return <div></div>;
        }
    }
    renderComment(comments) {
        if (comments !== null) {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((comment) => {
                            return (
                                <div className="container">
                                    <li>{comment.comment}</li>
                                    <li>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            );
        } else {
            return <div></div>;
        }
    }

    render() {
        const { dish } = this.props;
        const { comments } = dish;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">{this.renderDish(dish)}</div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComment(comments)}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;