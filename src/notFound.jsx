import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';


const NotFound = () => {
    const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center h-screen font-poppins font-normal">
      <h1 className="text-4xl font-bold mb-4">{t("NotFound.title")}</h1>
      <p className="mb-8">{t("NotFound.desc")}</p>
      <Link to="/ZeroToOneCo" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
      {t("NotFound.btn")}
      </Link>
    </div>
  );
};

export default NotFound;
