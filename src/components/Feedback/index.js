// Write your React code here.
import './index.css'

import {Component} from 'react'

class Feedback extends Component {
  state = {isTrue: false}

  clickBut = () => {
    this.setState({isTrue: true})
  }

  HeartCard = () => {
    const {resources} = this.props

    const {loveEmojiUrl} = resources

    return (
      <div className="HCard">
        <img src={loveEmojiUrl} className="HImg" alt="love emoji" />
        <h1 className="heading">Thank You!</h1>
        <p className="para">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  FeedCard = () => {
    const {resources} = this.props
    const {emojis} = resources
    // const {id, name, imageUrl} = emojis

    return (
      <div className="FCard">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="List">
          {emojis.map(Each => (
            <li key={Each.id}>
              <button onClick={this.clickBut} type="button" className="btn">
                <img src={Each.imageUrl} alt={Each.name} className="HImg" />
                <br />
                <p className="para">{Each.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isTrue} = this.state

    return (
      <div className="container">
        <div className="card-con">
          {isTrue ? this.HeartCard() : this.FeedCard()}
        </div>
      </div>
    )
  }
}
export default Feedback
