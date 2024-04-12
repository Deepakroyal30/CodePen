import React, { Component } from "react";

import "./Compiler.css";

export default class Compiler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: localStorage.getItem('html') || '',
      css: localStorage.getItem('css') || '',
      js: localStorage.getItem('js') || '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    localStorage.setItem(name, value);
  };

  render() {
    const { html, css, js } = this.state;

    return (
      <div className="compiler-container">
        <div className="editor-container">
          <div className="editor">
            <h3>HTML</h3>
            <textarea
              name="html"
              value={html}
              onChange={this.handleInputChange}
              className="editor-textarea"
              rows="10"
            ></textarea>
          </div>
          <div className="editor">
            <h3>CSS</h3>
            <textarea
              name="css"
              value={css}
              onChange={this.handleInputChange}
              className="editor-textarea"
              rows="10"
            ></textarea>
          </div>
          <div className="editor">
            <h3>JavaScript</h3>
            <textarea
              name="js"
              value={js}
              onChange={this.handleInputChange}
              className="editor-textarea"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div className="output-container">
          <h3>Output</h3>
          <iframe
            title="output"
            srcDoc={`<html><head><style>${css}</style></head><body>${html}<script>${js}</script></body></html>`}
            className="output-iframe"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    );
  }
}
