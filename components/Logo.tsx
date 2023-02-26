import React, {PureComponent} from "react";
import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './Logo.module.css';

const cx = classNames.bind(styles);

export default class Logo extends PureComponent {
    render() {
        const {...props} = this.props;

        return (
            <div className={cx('wrapper')} {...props}>
                <div className={cx('layer', 'cyan')}/>
                <div className={cx('layer', 'magenta')}/>
                <div className={cx('layer', 'yellow')}/>
                <div className={cx('layer', 'black')}/>
                <Image className={cx('image')} src="/img/logo.svg" alt='' width={512} height={512} />
            </div>
        );
    }
}