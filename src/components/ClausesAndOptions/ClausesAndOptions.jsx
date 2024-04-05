import { useRef } from "react";
import "./clauses-options.scss"

export const ClausesAndOptions = ({ options }) => {

    const inputRef = useRef([]);



    const change = (idx, type) => {
        let item = inputRef.current[idx]
        item.classList.add("active");


    }


    return <div className="template-option-groups">
        <div style={{ width: "100%" }}>
            <div className="template-options level-1">
                <p ref={el => inputRef.current[0] = el} onClick={() => change(0, "main")}>Core Clause</p>
                <div className="template-options level-2">
                    <p ref={el => inputRef.current[1] = el} onClick={() => change(1, "secondary")}>General</p>
                    <div className="template-options level-3">
                        <p ref={el => inputRef.current[2] = el} onClick={() => change(2, "tertiary")}>Actionsd</p>
                        <p>Actions</p>
                        <p>Actions</p>
                        <p>Actions</p>
                    </div>
                </div>

            </div>
            <div className="divider" />
        </div>
        <div style={{ width: "100%" }}>
            <div className="template-options level-1">
                <p ref={el => inputRef.current[0] = el} onClick={() => change(0, "main")}>Core Clause</p>
                <div className="template-options level-2">
                    <p ref={el => inputRef.current[1] = el} onClick={() => change(1, "secondary")}>General</p>
                    <div className="template-options level-3">
                        <p ref={el => inputRef.current[2] = el} onClick={() => change(2, "tertiary")}>Actionsd</p>
                        <p>Actions</p>
                        <p>Actions</p>
                        <p>Actions</p>
                    </div>
                </div>

            </div>
            {/* <div className="divider" /> */}
        </div>










    </div>

}