import React, { useContext } from 'react';
import { storeContext } from '../App';
import PlatformPreview from './PlatformPreview';
import { PLATFORMS_COUNT_TO_SHOW } from '../services/constatnsService';

function PlatformList() {
    const { state } = useContext(storeContext);
    const { platforms } = state;

    const elPlatforms = platforms.slice(0, PLATFORMS_COUNT_TO_SHOW).map((p) => {
        return (<PlatformPreview platform={p} />)
    })

    return (
        <div className="platforms-container flex row center wrap">
            {elPlatforms}
        </div>
    )
}

export default PlatformList
