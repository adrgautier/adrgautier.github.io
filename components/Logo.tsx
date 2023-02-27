import React, {PureComponent} from "react";
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
                <svg className={cx('image')} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                     viewBox="0 0 440 440" xmlSpace="preserve">
                    <path fill="#FFFFFF" d="M234.9,73c-0.8-6.9-7.7-13-14.9-13c-7.8,0-13.7,5.9-14.9,13.4c-11.5,70.2-44.8,155-105.1,227.2
                        c-2.1,2.5-3.2,5.8-3.2,9.3c0,8.3,6.7,15,15,15c3,0,5.7-1,8.1-2.4c65.6-38.8,139.4-41.5,194-31.2c0.7,0.1,1.5,0.2,2.3,0.2
                        c8.3,0,15-6.7,15-15c0-4.1-1.7-7.8-4.3-10.5C279.1,215.8,244.8,156,234.9,73z M220,250c-16.6,0-30-13.4-30-30s13.4-30,30-30
                        s30,13.4,30,30S236.6,250,220,250z"/>
                </svg>
            </div>
        );
    }
}