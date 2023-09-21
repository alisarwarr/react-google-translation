import { Component } from 'react';
import './index.css'

class GoogleTranslate extends Component {
  componentDidMount() {
    // Ensure the googleTranslateElementInit function is available globally
    window.googleTranslateElementInit = this.googleTranslateElementInit;

    // Load the Google Translate script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  googleTranslateElementInit() {
    // Initialize the Google Translate widget
    new window.google.translate.TranslateElement(
      { pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT },
      'google_translate_element'
    );
  }

  render() {
    return <div id="google_translate_element"></div>;
  }
}

export default GoogleTranslate;