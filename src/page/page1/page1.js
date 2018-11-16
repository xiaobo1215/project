import React, {Component} from 'react'; // 这两个模块必须引入

let name = '555';

import './test.less'
import {render} from 'react-dom';
import Hello from './mod/test';
import Test from './mod/ss';

render(<div> <Hello /> <Test /></div> , document.getElementById('root'));


