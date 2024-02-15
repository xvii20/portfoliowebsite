import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useTranslation, initReactI18next } from 'react-i18next';

export default function Successpage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  return (
    <div className="successparentdiv">
      <div className="successwrapper">
        <div className="formsubmitted"> {t('formsubmitted')} </div>
        <div>
          <button
            className="tohomepagebutton"
            onClick={() => {
              navigate('/');
            }}
          >
            {' '}
            {t('goback')}{' '}
          </button>
        </div>
      </div>
    </div>
  );
}
