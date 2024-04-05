import List from '@mui/material/List';
import { coreTemplate } from '../../data/coreTemplate';
import { useState } from 'react';
export const TemplateConfig = ({ closeHandler }) => {
    const [open, setOpen] = useState(true);


    return <div>
        <button onClick={closeHandler}>Go Back</button>
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            aria-labelledby="nested-list-subheader"
            disableGutters
        >
            {coreTemplate.map(t => {
                return <div>
                    <div style={{ padding: "5px" }}>{t.section}</div>
                    <div style={{ padding: "5px", marginLeft: "20px" }}>
                        <p style={{ fontSize: "15px", textTransform: "capitalize" }}>{t.subSection}</p>
                        <div style={{ marginLeft: "20px" }}>
                            {t.options.map(o => {
                                return <div style={{ padding: "2px" }}>{o.label}</div>
                            })}
                        </div>

                    </div>
                </div>
            })}


        </List>

        <div></div>
    </div>
}