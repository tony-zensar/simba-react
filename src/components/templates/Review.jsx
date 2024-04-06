import parse from 'html-react-parser';

export const Review = ({ data = [] }) => {
    return <div className="template-review">
        {data.map(({ options }, id) =>
            options.map(({ groupClauses }) =>
                groupClauses.map(({ clauses }) => {
                    return <>
                        <div className="template-clause">{++id}</div>
                        {clauses.map(({ content }, index) => {
                            return <>
                                <div className="template-subclause">{id}.{index}</div>
                                <div className="template-clause-content">Content</div>
                            </>
                        })}
                    </>
                })

            ))}





    </div >

}

