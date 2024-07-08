import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Article } from "./article";

export const Experiences = () => {
	const { t } = useTranslation();
    const [toggle, setToggle] = useState(false);

	return( 
        <Article tag={t('experiences.tag1')}>
            <div className="meta">
                <span className="item">28 jun 2024</span>
                <span className="item">{t('experiences.tag2')}</span>
            </div>

            <div className="content plain" id="experiences">
                <span className="cover-link" onClick={() => setToggle(!toggle)}></span>
                <h1>{t('experiences.title')}</h1>
                <img src="img/work.webp" alt="Put a monkey to write code infinitely, some day he will do a hello world." />
                <p>{t('experiences.school')}</p>
                <ul>
                    <li>{t('experiences.ifc')}</li>
                </ul>	
                <p>{t('experiences.jobs')}</p>
                <ul>
                    <li>{t('experiences.ipm')}</li>
                    <li>{t('experiences.nxfacil')}</li>
                </ul>
                {toggle && <p>{t('experiences.more')}</p>}
                <span className="read-more">{t('experiences.button')}</span>
                <span className="read-more" style={{display: "none"}}>{t('button-back')}</span>
            </div>
        </Article>
	);
};