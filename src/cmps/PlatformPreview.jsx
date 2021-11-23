import React from 'react'

function PlatformPreview({platform}) {
    return (
        <div className="platform-preview flex row center">
            <div className="platform-image" style={{backgroundImage:`url(${platform.image})`}}></div>
            <span>{platform.name}</span>
        </div>
    )
}

export default PlatformPreview
