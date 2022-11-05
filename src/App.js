import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: "",
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }
  
  render() {
    return (
      <div className='App'>
        <h1 className='title'>Markdown Previewer</h1>
        <div className='container'>
          <div className='editor'>
            <h2 className='editor-title'>Editor</h2>
            <div className='editor-container'>
              <textarea className='input' value={this.state.markdown}></textarea>
            </div>
          </div>
          <div className='previewer'>
            <h2 className='previewer-title'>Previewer</h2>
            <div className='previewer-container'>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
