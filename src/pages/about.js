import * as React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => {
    return (
        <main>
            <title>About</title>
            <nav>
                <Link to='/'>
                    Home
                </Link>
                &nbsp;| About
            </nav>
            <h1>About me</h1>
            <p>I'm building a Gatsby blog</p>
        </main>
    );
};

export default AboutPage;