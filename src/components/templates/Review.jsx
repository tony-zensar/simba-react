import parse from 'html-react-parser';
import { checkContent } from '../../utils/commonFn';

export const Review = ({ data = [] }) => {
    return <div className="template-review">
        {data?.map(({ options }, id) =>
            options?.map(({ groupClauses, summary }) => {
                return <>
                    <div className="template-clause">{summary}</div>
                    {groupClauses?.map(({ content, label }) => {
                        return checkContent(content) ? <div key={label}>
                            <div className="template-subclause">{label}</div>
                            <div className="template-clause-content">{parse(content || "")}</div>
                        </div> : ""
                    })}

                </>

            }


            )


        )}

    </div >

}

