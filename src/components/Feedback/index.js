// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    feedBack: true,
  }

  onChangeResponse = () => {
    this.setState({feedBack: false})
  }

  mainPage = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="feedback-container">
        <h1 className="heading">
          How satisfied are you with our
          <br />
          customer support performance?
        </h1>
        <ul className="emoji-container">
          {emojis.map(emoji => (
            <li key={emoji.id} className="emojis-list">
              <button
                className="button"
                type="button"
                onClick={this.onChangeResponse}
              >
                <img
                  src={emoji.imageUrl}
                  className="emoji-image"
                  alt={emoji.name}
                />
                <p className="status">{emoji.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  feedbackPage = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="feedback-container">
        <img src={loveEmojiUrl} className="love-logo" alt="love emoji" />
        <h1 className="thank-text">Thank You!</h1>
        <p className="note">
          We will use your feedback to improve our customer support
          <br /> performance
        </p>
      </div>
    )
  }

  render() {
    const {feedBack} = this.state
    return (
      <div className="bg-container">
        {feedBack ? this.mainPage() : this.feedbackPage()}
      </div>
    )
  }
}

export default Feedback
