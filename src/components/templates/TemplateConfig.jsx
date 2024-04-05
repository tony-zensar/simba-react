import List from '@mui/material/List';
import { coreTemplate } from '../../data/coreTemplate';
import { NameInput } from '../name-input/NameInput';
import { PageHeader } from '../page-utils/PageHeader';
import { Button } from '../index';
import { ClausesAndOptions } from '../ClausesAndOptions/ClausesAndOptions';
export const TemplateConfig = ({ closeHandler }) => {

    return <div>
        <PageHeader />
        {/* <button onClick={closeHandler}>Go Back</button> */}
        <div className='config-container'>
            <div className='config-header'>
                <NameInput />
                <div className='config-actions'>
                    <Button label="Review Contract" />
                    <Button variant='secondary' label="Save & Exit" />
                </div>
            </div>
            <div>
                <ClausesAndOptions />
            </div>
        </div>

    </div>
}