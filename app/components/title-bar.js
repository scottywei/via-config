import React, {Component} from 'react';
import styles from './title-bar.css';

export const Title = {
  KEYS: 'Keys',
  LIGHTING: 'Lighting'
};

export class TitleBar extends Component {
  isDetected() {
    console.log(this.props.getKeyboard());
    return !!this.props.getKeyboard();
  }

  getKeyboardName() {
    const keyboard = this.props.getKeyboard();
    return (keyboard && keyboard.name) || 'M60A';
  }

  render() {
    const {selectedTitle} = this.props;
    const titles = [Title.KEYS, Title.LIGHTING];

    return (
      <div className={styles.titleBarContainer}>
        <div className={styles.titles}>
          {this.isDetected() ? (
            [
              <div className={styles.kbName}>{this.getKeyboardName()}</div>,
              titles.map(title => (
                <div
                  onClick={_ => this.props.setSelectedTitle(title)}
                  className={[
                    title === selectedTitle && styles.selected,
                    styles.title
                  ].join(' ')}
                >
                  {title}
                </div>
              ))
            ]
          ) : (
            <div className={[styles.kbName, styles.kbDisconnected].join(' ')}>
              No kb detected
            </div>
          )}
        </div>
      </div>
    );
  }
}