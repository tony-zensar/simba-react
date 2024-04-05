import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';
import { templateCategories } from '../../data/templateCategories';
import { Button } from '../button/Button';
import { CustomRadio } from '../radio/CustomRadio';

export const TemplateCategoryDialog = ({ open, closeHandler, showConfigHandler }) => {
    const [selectedIndex, setCategoryIndex] = useState(-1)
    return (
        <Dialog
            onClose={closeHandler}
            aria-labelledby="customized-dialog-title"
            open={open}
            maxWidth="684px"
            style={{ padding: 0 }}
        >
            <DialogContent style={{ padding: 0 }} >
                <div className='template-category'>
                    <h4 className='template-category-heading'>Create a Template</h4>
                    <div className='template-category-body'>
                        <div className='template-category-options'>
                            {templateCategories.map((category, index) => {
                                return <p className={`${selectedIndex === index ? 'active' : ""}`} key={category} onClick={() => setCategoryIndex(index)}>{category}</p>
                            })}


                        </div>
                        <div className='template-category-contract'>
                            <div style={{ display: "flex", flexDirection: "column", columnGap: "4px", marginBottom: "24px" }}>
                                <h4>Contractor</h4>
                                <CustomRadio name="contractor" value="mainContractor" label="Main contractor" />
                                <CustomRadio name="contractor" value="subContractor" label="Sub contractor" />
                            </div>
                            <div>
                                <h4>Contract Form</h4>
                                <CustomRadio name="contractForm" value="longForm" label="Long form" />
                                <CustomRadio name="contractForm" value="shortForm" label="Short form" />
                            </div>
                        </div >
                    </div>
                    <div className='template-category-actions'>
                        <Button onClickHandler={() => showConfigHandler(true)} label="Configure Contract" />
                        <Button onClickHandler={closeHandler} variant='secondary' label="Cancel" />
                    </div>
                </div>

            </DialogContent >
        </Dialog >

    );
}