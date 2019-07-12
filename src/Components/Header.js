import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
// import './Header.module.scss';

// Using CSS Modules to Scope the styles to the specific component
import HeaderStyles from './Header.module.scss';

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    
    return (
        <header className={HeaderStyles.header}>
            <h1><Link className={HeaderStyles.title} to="/">{data.site.siteMetadata.title}</Link></h1>
            <nav>
                <ul className={HeaderStyles.navList}>
                    <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/"><li>Home</li></Link>
                    <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/about"><li>About</li></Link>
                    <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/blog"><li>Blog</li></Link>
                    <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/contact"><li>Contact</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;