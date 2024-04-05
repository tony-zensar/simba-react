import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

export const TemplateCategoryDialog = ({ open, closeHandler, showTemplateConfig }) => {
    return (
        <Dialog
            onClose={closeHandler}
            aria-labelledby="customized-dialog-title"
            open={open}
            maxWidth="694px"
            style={{ padding: 0 }}
        >
            <DialogContent style={{ padding: 0 }} >
                <div className='template-category'>
                    <h4 className='template-category-heading'>Create a Template</h4>
                    <div className='template-category-body'>
                        <div className='template-category-options'>
                            <p className='active'>Facilities Management</p>
                            <p>Term Service</p>
                            <p>Supply</p>
                            <p>Engineering and Construction</p>
                            <p>Design Build and Operate</p>
                            <p>Alliance</p>
                            <p>Framework</p>

                        </div>
                        <div className='template-category-contract' >
                            <div style={{ display: "flex", flexDirection: "column", columnGap: "4px", marginBottom: "24px" }}>
                                <h4>Contractor</h4>
                                <div className='custom-radio'>
                                    <input type='radio' name="contractor" value="mainContractor" id="mainContractor" />
                                    <label for="mainContractor">Main contractor</label>
                                </div>

                                <div className='custom-radio'>
                                    <input type='radio' name="contractor" value="subContractor" id="subContractor" />
                                    <label for="subContractor">Sub contractor</label>
                                </div>
                            </div>
                            <div>
                                <h4>Contract Form</h4>
                                <div className='custom-radio'>
                                    <input type='radio' name="contractForm" value="longForm" id="longForm" />
                                    <label for="longForm">Long form</label>
                                </div>

                                <div className='custom-radio'>
                                    <input type='radio' name="contractForm" value="shortForm" id="shortForm" />
                                    <label for="shortForm">Short form</label>
                                </div>
                            </div>
                        </div >
                    </div>
                    <div className='template-category-actions'>
                        <button type='button' className='primaryButton' onClick={() => showTemplateConfig(true)}>
                            Configure Contract
                        </button>
                        <button type='button' className='secondaryButton' onClick={closeHandler}>
                            Cancel
                        </button>
                    </div>
                </div>

            </DialogContent >
        </Dialog >

    );
}