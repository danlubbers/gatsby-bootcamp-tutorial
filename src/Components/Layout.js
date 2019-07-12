import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../styles/index.scss';

import LayoutStyles from './Layout.module.scss'

const Layout = (props) => {
    return (
        <div className={LayoutStyles.container}> 
            <div className={LayoutStyles.content}>
                <Header />
                    {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout