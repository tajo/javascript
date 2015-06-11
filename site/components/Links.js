import React from 'react';
import './Links.less';
import {Articles} from '../Constants';

export default class Links {

  render() {
    return (
      <div className="links">
        {Articles[this.props.page].prev &&
          <div style={{float: 'left'}}>
            ◀{' '}
            <a href={Articles[Articles[this.props.page].prev].location} target="_self">
              {Articles[Articles[this.props.page].prev].title}
            </a>
          </div>
        }

        {Articles[this.props.page].next &&
          <div style={{float: 'right'}}>
            <a href={Articles[Articles[this.props.page].next].location} target="_self">
              {Articles[Articles[this.props.page].next].title}
            </a>
            {' '}▶
          </div>
        }
      </div>
    );
  }

}
