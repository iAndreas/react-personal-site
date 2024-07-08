import { useTranslation } from 'react-i18next';
import React from 'react';

export const Navigation = () => {
	const { t, i18n } = useTranslation();
 
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	}
	
	var cvPage = i18n.language === 'en-US' ? '#1' : '#2'; 
	return( 
		<nav id="menu" className="navbar navbar-default navbar-fixed-top">
			<div className="links">
				<span className="icon" target="_blank" rel="noopener noreferrer"><img src="img/globe.png" alt='' /><span>Website</span></span>
				<a className="icon" href="https://github.com/iAndreas" target="_blank" rel="noopener noreferrer"><img src="img/github.webp" alt='' /><span>Github</span></a>
				<a className="icon" href="https://www.linkedin.com/in/andr%C3%A9-gon%C3%A7alves-269347149/" target="_blank" rel="noopener noreferrer"><img src="img/linkedin.webp" alt='' /><span>Linkedin</span></a>
				<a className="icon" href={"https://www.canva.com/design/DADqSdsxnq8/Bd6p-93_rFDFhmmGiren8A/view?utm_content=DADqSdsxnq8&utm_campaign=designshare&utm_medium=link&utm_source=editor" + cvPage} target="_blank" rel="noopener noreferrer"><img src="img/rss.png" alt='' /><span>{t('navigation.curriculum')}</span></a>
			</div>
			<div className="languages">
				<span className="icon" href="" onClick={() => changeLanguage('en-US')}><img src="img/eua.png" alt='' /><span>{t('navigation.english')}</span></span>
				<span className="icon" href="" onClick={() => changeLanguage('pt-BR')}><img src="img/brasil.png" alt='' /><span>{t('navigation.portuguese')}</span></span>
			</div>
		</nav>
	);
};