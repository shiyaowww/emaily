const keys = require('../../config/keys');

module.exports = () => {
  return `
    <html>
      <body>
        <div style = 'text-aligmn: center;'>
          <h3>I'd like your input!</h3>
          <p>Please ansert the following question: </p>
          <p>${survey.body}</p>
          <div>
            <a href='${keys.redirectDomain}'>Yes</a>
          </div>
          <div>
            <a href='${keys.redirectDomain}'>No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
