import {Component} from 'react'

import {
  MultiLangGreetingBgCont,
  MultiLangGreetingHead,
  MultiLangGreetingUl,
  MultiLangGreetingLitem,
  MultiLangGreetingBtn,
  MultiLangGreetingImg,
} from './styledComponents'

class MultiLangGreeting extends Component {
  state = {activeLan: 'English'}

  getImage = () => {
    const {languageGreetingsList} = this.props
    const {activeLan} = this.state
    const activeObj = languageGreetingsList.filter(
      eachobj => eachobj.buttonText === activeLan,
    )
    return (
      <MultiLangGreetingImg
        src={activeObj[0].imageUrl}
        alt={activeObj[0].imageAltText}
      />
    )
  }

  onClickedLan = event => {
    // console.log(event.target.textContent)
    this.setState({activeLan: event.target.textContent})
  }

  render() {
    const {languageGreetingsList} = this.props
    const {activeLan} = this.state
    return (
      <MultiLangGreetingBgCont>
        <MultiLangGreetingHead>Multilingual Greetings</MultiLangGreetingHead>
        <MultiLangGreetingUl>
          {languageGreetingsList.map(eachobj => (
            <MultiLangGreetingLitem key={eachobj.id}>
              <MultiLangGreetingBtn
                type="button"
                active={
                  activeLan === eachobj.buttonText ? '#db1c48' : 'transparent'
                }
                activecolor={
                  activeLan === eachobj.buttonText ? '#ffffff' : '#db1c48'
                }
                onClick={this.onClickedLan}
              >
                {eachobj.buttonText}
              </MultiLangGreetingBtn>
            </MultiLangGreetingLitem>
          ))}
        </MultiLangGreetingUl>
        {this.getImage()}
      </MultiLangGreetingBgCont>
    )
  }
}

export default MultiLangGreeting
