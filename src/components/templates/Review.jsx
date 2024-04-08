import parse from 'html-react-parser';

export const Review = ({ data = [] }) => {
    return <div className="template-review">
        {data.map(({ options }, id) =>
            options?.map(({ groupClauses, summary }) => {
                return <>
                    <div className="template-clause">{summary}</div>
                    {groupClauses?.map(({ clauses, label }) => {
                        return <>
                            <div className="template-subclause">{label}</div>
                            {clauses?.map(({ content }, index) => {
                                return <>
                                    <div className="template-clause-content">{parse(content)}</div>
                                </>
                            })}
                        </>
                    })}
                </>

            }


            )


        )}

    </div >

}

