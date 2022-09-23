import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result(props) {
    const { id } = useParams();
    const location = useLocation();
    const { state } = location;
    const { qna } = state;

    const { loading, error, answers } = useAnswers(id);

    function calculateScore() {
        let score = 0;

        answers.forEach((question, index1) => {
            let correctIndexes = [];
            let checkedIndexes = [];

            question.options.forEach((option, index2) => {
                if (option.correct) correctIndexes.push(index2);
                if (qna[index1].options[index2].checked) {
                    checkedIndexes.push(index2);
                    option.checked = true;
                }
            });

            if (_.isEqual(correctIndexes, checkedIndexes)) {
                score += 5;
            }
        });
        return score;
    }

    let userScore = calculateScore();

    return (
        <>
            {error && <div>There was an error!</div>}
            {loading && <div>Loading...</div>}
            {answers && answers.length > 0 && (
                <>
                    <Summary score={userScore} noq={answers.length} />
                    <Analysis answers={answers} />
                </>
            )}
        </>
    );
}
