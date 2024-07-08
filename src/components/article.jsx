import React, { useState } from 'react'
import Draggable from 'react-draggable';

export const Article = ({children, tag}) => {
    const nodeRef = React.useRef(null);
    const [index, setIndex] = useState(1);

	return( 
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} tabIndex={1} className="article-wrap ui-draggable ui-draggable-handle" style={{zIndex: index}} onFocus={() => setIndex(2)} onBlur={() => setIndex(1)}>
                <article className="simple">
                    <div tabIndex="1" className="header">
                        <span className="category">{tag}</span>
                        <div className="buttons">
                            <button className="minimise"><span></span></button>
                            <button className="expand"><span></span></button>
                            <button className="close"><span></span></button>
                        </div>
                    </div>
                    {children}
                </article>
            </div>
        </Draggable>
    );
}