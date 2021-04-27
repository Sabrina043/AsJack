import React from "react";

class StartGame extends React.Component {
  render() {
    return (

      // Ce bout de code permet de lancer le jeux avec le bouton start
      <div className='game'>
        <h1>Black Jack</h1>
        <div>
          <button type="button" className="btn btn-outline-warning rounded-pill" style={{ height: '100px', width: '200px', fontSize: '2em' }} onClick={this.props.startGame}>Start</button>
        </div>
      </div>
    );
  }
}

export default StartGame;
