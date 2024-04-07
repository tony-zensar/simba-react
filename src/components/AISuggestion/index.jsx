import "./index.scss";
import ai_icon from "../../assets/icons/ai_icon.png";
import delete_icon from "../../assets/icons/delete_icon.png";
import { ButtonSmall } from "../button/Button";
import { AISummary } from "./AISummary";

export const AISuggestion = () => {
    return <section>
        <AISummary />
        <section className="aisuggestion">
            <div className="aisuggestion-header">
                <img className="aisuggestion-img" src={ai_icon} alt="AI Suggestions" />
                <h3 className="aisuggestion-title">AI Suggestions</h3>
            </div>
            <section className="aisuggestion-clause-cont aisuggestion-clause-cont-active">
                <h4 className="aisuggestion-clause-title">Missing clause title</h4>
                <p className="aisuggestion-clause-desc">This is an example description of the clauses suggested by AI that user missed in the contract. Upon clicking on accept this clause will be added into the contract, clicking on delete icon will remove this suggestion from the list of suggestions.</p>
                <div className="aisuggestion-clause-btn-cont">
                    <ButtonSmall label={"Add Clause"} icon={"Add"} />
                    <img className="aisuggestion-delete" src={delete_icon} alt="Delete" />
                </div>
            </section>
            <section className="aisuggestion-clause-cont">
                <h4 className="aisuggestion-clause-title">Missing clause title</h4>
            </section>
            <section className="aisuggestion-clause-cont">
                <h4 className="aisuggestion-clause-title">Missing clause title</h4>
            </section>
        </section>
    </section>
}
