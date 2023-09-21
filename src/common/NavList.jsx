import React from 'react'

const noop = () => { };
export default function NavList({ items = [], onClick = noop }) {

    return (
        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
            {
                items.map((item, idx) => (
                    <li className="nav-item" key={`item-${idx}`}>
                        <a
                            class={`nav-link ${item.active ? 'active' : ''}`}
                            id="home-tab"
                            data-toggle="tab"
                            href="javascript:void(0);"
                            role="tab"
                            aria-selected={item.active}
                            onClick={() => item.active ? noop() : onClick(item.value)}
                        >{item.label}</a>
                    </li>
                ))
            }
        </ul>
    )
}
