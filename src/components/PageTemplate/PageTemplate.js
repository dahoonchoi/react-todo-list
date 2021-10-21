import React from "react";
import style from './PageTemplate.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(style)


const PageTemplate = ({children}) =>{
    return (
        <div className={cx('page-template')}>
            <h1>일정관리</h1>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
    )
}

export default PageTemplate;