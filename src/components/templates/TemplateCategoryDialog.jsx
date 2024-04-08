import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useDispatch, useSelector } from 'react-redux';
import { setNewTemplate } from '../../store/actionCreators';
import { Button } from '../button/Button';
import { CustomRadio } from '../radio/CustomRadio';


export const TemplateCategoryDialog = ({ open, closeHandler, showConfigHandler }) => {
    const { templateCategories, newTemplate } = useSelector(state => state.templatesReducer)
    const { category } = newTemplate
    const dispatch = useDispatch()

    const categoryHandler = (key, value) => {
        let cat = { ...category, [key]: value }
        dispatch(setNewTemplate('category', cat))

    }

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
                            {templateCategories.map(({ id, title }) => {
                                return <p className={`${category?.id === id ? 'active' : ""}`} key={id} onClick={() => categoryHandler('id', id)}>{title}</p>
                            })}
                        </div>
                        <div className='template-category-contract'>
                            <div className='template-category-contract-cont'>
                                <h4>Contractor</h4>
                                <CustomRadio name="contractor" value="mainContractor" label="Main contractor" onChange={(e) => categoryHandler('contractor', e.target.value)} />
                                <CustomRadio name="contractor" value="subContractor" label="Sub contractor" onChange={(e) => categoryHandler('contractor', e.target.value)} />
                            </div>
                            <div className='template-category-contract-cont'>
                                <h4>Contract Form</h4>
                                <CustomRadio name="contractForm" value="longForm" label="Long form" onChange={(e) => categoryHandler('form', e.target.value)} />
                                <CustomRadio name="contractForm" value="shortForm" label="Short form" onChange={(e) => categoryHandler('form', e.target.value)} />
                            </div>
                        </div >
                    </div>
                    <div className='template-category-actions'>
                        <Button onClickHandler={() => showConfigHandler(true)} label="Configure Contract" />
                        <Button onClickHandler={closeHandler} variant='secondary' label="Cancel" />
                    </div>
                </div>
            </DialogContent>
        </Dialog >

    );
}