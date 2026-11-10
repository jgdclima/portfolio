import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';


class Tabs extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  }

  constructor(props) {
    super(props);

    const validChildren = this.getValidChildren(props.children);
    this.state = {
      activeTab: validChildren.length > 0 && validChildren[0].props ? validChildren[0].props.label : '',
    };
  }

  getValidChildren(children) {
    return React.Children.toArray(children).filter(
      (child) =>
        child &&
        child.props &&
        child.props.label &&
        !child.props.placeholder &&
        !child.props.isPlaceholder
    );
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    const validChildren = this.getValidChildren(children);

    return (
      <div className="tabs">
        <ol className="tab-list">
          {validChildren.map((child) => {
            const { label, hierarchy } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
                hierarchy={hierarchy}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {validChildren.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
