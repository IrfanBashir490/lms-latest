import React, { useState, Fragment } from 'react';
import './ActivityTimeline.css';
import { Row, Col } from 'react-bootstrap';

const ActivityTimeline = (props) => {
    const [evenChildren, setEvenChildren] = useState([]);
    const [oddChildren, setOddChildren] = useState([]);

    const handleChildren = () => {
        props.children.map((child, index) => {
            if (index % 2 === 0) {
                const newChild = Object.assign({}, child, {
                    ...child,
                    props: {
                        ...child.props,
                        pos: "left"
                    }
                })
                evenChildren.push(newChild)
            } else {
                const newChild = Object.assign({}, child, {
                    ...child,
                    props: {
                        ...child.props,
                        pos: "right"
                    }
                })
                oddChildren.push(newChild)
            }
        })
    }

    return (
        <Fragment>
            {handleChildren()}
            <Row style={{ marginLeft: "0", marginRight: "0" }}>
                <Col style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    {evenChildren.map((child, index) => (
                        <div key={index} className="timeline_row">
                            <div className="timeline_col">
                                <span className="timeline_day">{child.props.day}</span>
                                <span className="timeline_date">{child.props.date}</span>
                            </div>
                            {child}
                        </div>
                    ))}
                </Col>
                <Col style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                    {oddChildren.map((child, index) => (
                        <div key={index} className="timeline_row">
                            {child}
                            <div className="timeline_col">
                                <span className="timeline_day">{child.props.day}</span>
                                <span className="timeline_date">{child.props.date}</span>
                            </div>
                        </div>
                    ))}
                </Col>
            </Row>
        </Fragment>
    )
}

export default ActivityTimeline