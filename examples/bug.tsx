import '../assets/index.less';
import './bug.less';
import cx from 'classnames';
import React from 'react';
import ResizeObserver from '../src';

type ItemType = number;
type ItemProps = {
    v: ItemType,
    hide?: boolean
}

function pResize() {
    console.log('resize in Parent');
}

function cResize(x: ItemType, o?: boolean) {
    console.log('resize in Child', x, o);
}

function Item(props: ItemProps) {
    const {v, hide} = props;
    return (
        <ResizeObserver onResize={() => cResize(v, hide)}>
            <div className={cx({'hidden': hide})}>{v}</div>
        </ResizeObserver>
    );
}

const roData = new Array(3).fill(undefined).map((_, idx) => idx);

function BugDemo() {
    return (
        <ResizeObserver onResize={pResize}>
            <div>
                {roData.map(v => <Item v={v} hide={true} key={v}/>)}
            </div>
        </ResizeObserver>
    );
}

export default BugDemo;
