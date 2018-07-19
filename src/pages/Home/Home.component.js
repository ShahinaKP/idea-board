import React from 'react';
import PropTypes from 'prop-types';
import { WidthProvider, Responsive } from 'react-grid-layout';

import Styled from './styled';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class HomeComp extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ideas:
        [
          {
            title: 'A new cake recipe',
            body: 'Made of chocolate',
          },
          {
            title: 'A twitter client idea',
            body: 'Only for replying to mentions and DMs',
          },
          {
            title: 'A novel set in Italy',
            body: 'A mafia crime drama starring Berlusconi',
          },
          {
            title: 'Card game design',
            body: 'Like Uno but involves drinking',
          },
        ],
      items: [0, 1, 2, 3].map((i, key, list) => ({
        i: i.toString(),
        x: i * 2,
        y: 0,
        w: 2,
        h: 2,
        add: i === (list.length - 1).toString(),
        title: '',
        body: '',
      })),
      newCounter: 0,
    };
  }

  componentDidMount() {
    const newItemArr = [...this.state.items];
    newItemArr.forEach((item, index) => {
      item.title = this.state.ideas[index].title;
      item.body = this.state.ideas[index].body;
    });
    this.setState({
      items: [...newItemArr],
    });
  }

  createElement(el) {
    const removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer',
    };
    const i = el.add ? '+' : el.i;
    return (
      <div key={i} data-grid={el}>
        {el.add ? (
          <span
            className="add text"
            onClick={this.onAddItem}
            title='You can add an item by clicking here, too.'
          >
            Add +
          </span>
        ) : (
          <div>
            <span className="text-title">{el.title}</span>
            <p className="text-body">{el.body}</p>
          </div>
        )}
        <span
          className='remove'
          style={removeStyle}
          onClick={this.onRemoveItem.bind(this, i)}
        >
          x
        </span>
      </div>
    );
  }

  onAddItem = () => {
    /*eslint no-console: 0*/
    console.log('adding', 'n' + this.state.newCounter);
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: 'n' + this.state.newCounter,
        x: (this.state.items.length * 2) % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2,
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1,
    });
  }

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols,
    });
  }

  onLayoutChange = (layout) => {
    this.setState({ layout: layout });
  }

  onRemoveItem = (id) => {
    console.log('removing');
    this.setState({
      items: this.state.items.filter(({ i }) => i !== id),
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onAddItem}>Add Item</button>
        <Styled>
          <ResponsiveReactGridLayout
            onLayoutChange={this.onLayoutChange}
            onBreakpointChange={this.onBreakpointChange}
          >
            { this.state.items.map(el => this.createElement(el)) }
          </ResponsiveReactGridLayout>
        </Styled>
      </div>
    );
  }
}

HomeComp.propTypes = {
  className: PropTypes.string,
  cols: PropTypes.object,
  rowHeight: PropTypes.number,
};
HomeComp.defaultProps = {
  className: 'layout',
  cols: {
    lg: 12, md: 10, sm: 6, xs: 4, xxs: 2,
  },
  rowHeight: 100,
};
