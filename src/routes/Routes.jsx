import { useState } from 'react';
import { NavContent, NavItems } from "../components/index";

export const Routes = () => {
    const [activeTabName, setActiveTabName] = useState("myContracts");

    return <div className='routes'>
        <NavItems tabChangeHandler={(tab) => setActiveTabName(tab)} activeTabName={activeTabName} />
        <NavContent activeTabName={activeTabName} />

    </div>





}

