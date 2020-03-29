/** @jsx jsx */
import { jsx } from '@emotion/core';
import logo from './headshot.jpg';
import styles from './styles';

export function HomePage() {
    return (
        <div css={styles.container}>
            <div css={styles.bio}>
                <img src={logo} css={styles.headshot} alt="logo" />
                <div>
                    <p css={styles.bioText}>
                        I'm Cliff Delsoin, a software engineer based out of Boston, MA specializing in React and React
                        Native application development. If you'd like to get in touch feel free to check out my{' '}
                        <a href="https://www.linkedin.com/in/cliffdelsoin/">LinkedIn</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
