import React from 'react';
import { Helmet } from 'react-helmet-async';

const CustomTitle = ({title, children}) => {
    return (
        <div>
            <Helmet>
                <title>{title} - KeyBoard Mania</title>
            </Helmet>
            {children}
        </div>
    );
};

export default CustomTitle;