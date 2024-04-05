import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export const TemplateCategoryDialog = ({ open, closeHandler, showTemplateConfig }) => {



    return (

        <BootstrapDialog
            onClose={closeHandler}
            aria-labelledby="customized-dialog-title"
            open={open}
            fullWidth

        >

            <DialogContent >
                <div className='template-category'>
                    <h4>Create a template</h4>
                    <div style={{ display: "flex" }}>
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
                            <table>
                                <th>Contractor</th>
                                <th>Contract form</th>

                                <tbody>
                                    <tr>
                                        <td> <label><input type='radio' name="contractor" value="mainContractor" />Main contractor</label> </td>
                                        <td> <label><input type='radio' name="contractForm" value="longForm" />Long form</label> </td>

                                    </tr>
                                    <tr>
                                        <td> <label><input type='radio' name="contractor" value="subContractor" />Sub contractor</label> </td>
                                        <td> <label><input type='radio' name="contractForm" value="shortForm" />Short form</label> </td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className='template-category-actions'>
                    <button type='button' onClick={() => showTemplateConfig(true)}>
                        Configure Template
                    </button>

                    <button type='button' onClick={closeHandler}>
                        Cancel
                    </button>
                </div>


            </DialogContent>


        </BootstrapDialog>

    );
}