import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'Home', href: 'intro' },
        { content: 'Our Story', href: 'one' },
        { content: 'Ceremony & Reception', href: 'two' },
        { content: 'Places to stay', href: 'three' },
        { content: 'Getting around', href: 'four' },
        { content: 'Wedding FAQs', href: 'five' },
        { content: 'RSVP', href: 'six' },
      ],
    };
  }

  render() {
    const { tabs } = this.state;
    return (
      <section id="sidebar" className={this.state.active && 'active'} onClick={ () => this.setState({active: !this.state.active})}>
        <div className="overlay"></div>
        <div className="inner">
          <nav className="navigation">
          <button aria-expanded="false" aria-controls="menu">
            <svg id="i-menu" aria-label="Menu" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.25%">
              <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"></path>
            </svg>
          </button>
            <Scrollspy
              items={tabs.map(s => s.href)}
              currentClassName="active"
              offset={-300}
            >
              {tabs.map((tab, i) => {
                const { href, content } = tab;
                return (
                  <li key={href}>
                    <Scroll type="id" element={href}>
                      <a href={`#${href}`}>{content}</a>
                    </Scroll>
                  </li>
                );
              })}
            </Scrollspy>
          </nav>
        </div>
      </section>
    );
  }
}

export default Sidebar;
