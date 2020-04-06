import React from 'react';
import classes from './AnswerList.css';
import AnswerItem from "./AnswerItem/Answeritem";

const AnswerList = props => {
    return(
        <ul className={classes.AnswerList}>
            {props.answers.map((answer, index) => {
                return(
                    <AnswerItem
                        answer={answer}
                        key={index}
                        onAnswerClick={props.onAnswerClick}
                        state={props.state ? props.state[answer.id] : null}
                    />
                );
            })}
        </ul>
    )
};

export default AnswerList;