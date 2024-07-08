import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Article } from "./article";

export const Skills = () => {
	const { t } = useTranslation();
    const [toggle, setToggle] = useState(false);

	return( 
        <Article tag={t('skills.tag')}>
            <div className="meta">
                <span className="item">28 Jun 2024</span>
                <span className="item">my_tech_skills.js</span>
            </div>

            <div className="content plain" id="skills">
                <span className="cover-link" onClick={() => setToggle(!toggle)}></span>
                <h1>{t('skills.title')}</h1>
                <img src="img/pc.webp" alt="Getting skills is not that beauty like a gif." />
                <table className="skills-table">
                    <thead>
                        <tr>
                            <th>{t('skills.advanced')}</th>
                            <th>{t('skills.intermediate')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>PHP</td>
                            <td>Python</td>
                        </tr>
                        <tr>
                            <td>Laravel</td>
                            <td>React</td>
                        </tr>
                        <tr>
                            <td>Node.js</td>
                            <td>Linux/Servers</td>
                        </tr>
                        <tr>
                            <td>JS/jQuery</td>
                            <td>Angular</td>
                        </tr>
                        <tr>
                            <td>Bootstrap</td>
                            <td>Tailwind</td>
                        </tr>
                        <tr>
                            <td>PostgreSQL</td>
                            <td>AWS</td>
                        </tr>
                        <tr>
                            <td>Rest API's</td>
                            <td>Postman</td>
                        </tr>
                        <tr>
                            <td>MySQL</td>
                            <td>Docker</td>
                        </tr>
                        <tr>
                            <td>{t('skills.english')}</td>
                            <td>{t('skills.englishtalk')}</td>
                        </tr>
                    </tbody>
                </table>
                {toggle && <p>{t('skills.more')}</p>}
                <span className="read-more">{t('skills.button')}</span>
                <span className="read-more" style={{display: "none"}}>{t('button-back')}</span>
            </div>
        </Article>
	);
};