import React, { memo } from 'react'

function Child(props) {
    // console.log("props in child", JSON.stringify(props));
    return (
        <div>Child</div>
    )
}
export default memo(Child);