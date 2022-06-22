import React from 'react';
import Screen from '../screen/Screen';
import Paper from '../screen/Paper';
import { useTranslation } from 'react-i18next';

const WasNotFound = () => {
	const { t } = useTranslation('common');
	return (
		<Screen title={t('WasNotFound.title')}>
			<Paper>
				<p>{ t('WasNotFound.text') }</p>
			</Paper>
		</Screen>
	);
};

export default WasNotFound;
