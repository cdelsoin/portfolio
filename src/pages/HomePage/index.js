/** @jsx jsx */
import { jsx } from '@emotion/core';
import logo from './headshot.jpg';
import styles from './styles';

export function HomePage() {
    return (
        <div css={styles.container}>
            <div css={styles.bio}>
                <img src={logo} css={styles.headshot} alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        </div>
    );
}
