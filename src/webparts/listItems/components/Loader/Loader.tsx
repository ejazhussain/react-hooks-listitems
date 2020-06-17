import * as React from 'react';
import { useContext } from 'react';
import styles from '../RootComponent.module.scss';
import { css } from 'office-ui-fabric-react/lib/Utilities';
import { Label, Spinner, SpinnerSize } from 'office-ui-fabric-react';


export interface ILoaderProps {
    message?: string;
}
// Example formatting


const Loader: React.FC<ILoaderProps> = (props) => {

    return (
        <>
            <div className={styles.container}>
                <div className={css(styles.row, styles.column12)}>

                    <Label>{props.message}</Label>
                    <Spinner size={SpinnerSize.large} />
                </div>

            </div>
        </>

    );
};
export default Loader;