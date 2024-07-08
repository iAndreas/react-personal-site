import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Article } from "./article";

export const About = () => {
	const { t } = useTranslation();
    const [toggle, setToggle] = useState(false);

	return( 
        <Article tag={t('about.tag')}>
            <div className="meta">
                <span className="item">28 Jun 2024</span>
                <span className="item">whoami</span>
                <span className="item">hello world</span>
            </div>

            <div className="content plain" id="aboutme">
                <span className="cover-link" onClick={() =>  {setToggle(!toggle)}}></span>
                <h1>{t('about.title')}</h1>
                <img src="img/journey.webp" alt="Walking through this magic tech journey." />
                <p>{t('about.text')}</p>
                {toggle && <p>{t('about.more')}</p>}
                <span className="read-more">{t('about.button')}</span>
                <span className="read-more" style={{display: "none"}}>{t('button-back')}</span>
            </div>
        </Article>
	);
};