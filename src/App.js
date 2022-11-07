import React, { Component } from 'react'
import './App.css'
import { marked } from 'marked'
import { BsArrowsFullscreen } from 'react-icons/bs'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: ""
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown })
  }

  render() {
    return (
      <div className='App'>
        <h1 className='title'>Markdown Previewer</h1>
        <div className='container'>
          <div className='editor'>
            <div className='editor-title-container'>
              <h2 className='editor-title'>Editor</h2>
              <div className='fullscreen'>
                <BsArrowsFullscreen />
              </div>
            </div>
            <div className='editor-container'>
              <textarea 
                className='input' 
                rows='20'
                value={this.state.markdown} 
                onChange={(e) => {this.updateMarkdown(e.target.value);}}>
              </textarea>
            </div>
          </div>
          <div className='previewer'>
          <div className='previewer-title-container'>
              <h2 className='previewer-title'>Previewer</h2>
              <div className='fullscreen'>
                <BsArrowsFullscreen />
              </div>
            </div>
            <div className='previewer-container' dangerouslySetInnerHTML={{ 
              __html: marked(this.state.markdown),
              }}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
