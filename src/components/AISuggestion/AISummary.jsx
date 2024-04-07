import "./index.scss";
import ai_icon from "../../assets/icons/ai_icon.png";

export const AISummary = () => {
    return <section className="aisummary">
        <div className="aisummary-header">
            <img className="aisummary-img" src={ai_icon} alt="AI Suggestions" />
            <h3 className="aisummary-title">AI Suggestions</h3>
        </div>
        <section className="aisummary-clause-cont">
            <p className="aisummary-clause-desc">This text outlines various terms and concepts related to a contractual agreement, likely in the context of construction or project management. Here's what it all means:</p>
        </section>
        <section className="aisummary-clause-cont">
            <h4 className="aisummary-clause-title">Accepted Programme</h4>
            <p className="aisummary-clause-desc">This refers to the agreed-upon project schedule, subject to change if accepted by the Project Manager.</p>
        </section>
        <section className="aisummary-clause-cont">
            <h4 className="aisummary-clause-title">Completion</h4>
            <p className="aisummary-clause-desc">The stage where all work outlined in the contract must be finished, along with the rectification of any notified defects.</p>
        </section>
        <section className="aisummary-clause-cont">
            <h4 className="aisummary-clause-title">Completion Date</h4>
            <p className="aisummary-clause-desc">The initially agreed-upon deadline for project completion.</p>
        </section>
        <section className="aisummary-clause-cont">
            <h4 className="aisummary-clause-title">Contract Date</h4>
            <p className="aisummary-clause-desc">The date when the contract officially comes into effect.</p>
        </section>
        <section className="aisummary-clause-cont">
            <h4 className="aisummary-clause-title">Corrupt Act</h4>
            <p className="aisummary-clause-desc">Any unethical or illegal behaviour related to the contract, including bribery or abuse of power.</p>
        </section>
        <section className="aisummary-clause-cont">
            <h4 className="aisummary-clause-title">Defect</h4>
            <p className="aisummary-clause-desc">Any flaw or deviation from the contract specifications or legal requirements.</p>
        </section>
        <section className="aisummary-clause-cont">
            <h4 className="aisummary-clause-title">Defects Certificate</h4>
            <p className="aisummary-clause-desc">This refers to the agreed-upon project schedule, subject to change if accepted by the Project Manager.</p>
        </section>
    </section>
}
