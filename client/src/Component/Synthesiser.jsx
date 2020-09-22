import React, { Component } from 'react';
import * as Tone from 'tone';
import './Synthesiser.css';

class Synthesiser extends Component {
    
    handleOnDown = (e) => {
      e.stopPropagation();
      this.props.synth1.triggerAttack(e.target.id , Tone.now());
      Tone.start();
    }

    handleKeyDown = (e) => {
      let upperOctave = this.props.octave
      e = window.event;
      let k = e.keyCode;
	    switch(k){
        default:
          
        break;
        case 74:
          Tone.start()
          this.props.synth1.triggerAttackRelease(`C${upperOctave}`, "8n")
          break;
        case 74:
          Tone.start()
          this.props.synth1.triggerAttackRelease("B4", "8n")
          break;
          case 85:
          Tone.start()
          this.props.synth1.triggerAttackRelease("A#4", "8n")
          break;
          case 72:
          Tone.start()
          this.props.synth1.triggerAttackRelease("A4", "8n")
          break;
          case 74:
          Tone.start()
          this.props.synth1.triggerAttackRelease("B4", "8n")
          break;
          case 85:
          Tone.start()
          this.props.synth1.triggerAttackRelease("A#4", "8n")
          break;
          case 72:
          Tone.start()
          this.props.synth1.triggerAttackRelease("A4", "8n")
          break;
          case 74:
          Tone.start()
          this.props.synth1.triggerAttackRelease("B4", "8n")
          break;
          case 85:
          Tone.start()
          this.props.synth1.triggerAttackRelease("A#4", "8n")
          break;
          case 72:
          Tone.start()
          this.props.synth1.triggerAttackRelease("A4", "8n")
          break;
          case 74:
          Tone.start()
          this.props.synth1.triggerAttackRelease("B4", "8n")
          break;
          case 85:
          Tone.start()
          this.props.synth1.triggerAttackRelease("A#4", "8n")
          break;
          case 72:
          Tone.start()
          this.props.synth1.triggerAttackRelease("A4", "8n")
          break;
        }
    }
    
    handleOnLeave = (e) => {
      this.props.synth1.triggerRelease(e.target.id);
    }

    stopPropagation = (e) => e.stopPropagation();


  render() {
    var newOctave = Number(this.props.octave) + 1;
    
    return (
      <div className="synthesiser-notes" onKeyDown={this.handleKeyDown} tabIndex="0">
        <div id={"C" + newOctave} onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">C{newOctave}
        </div>
        <div id={"B"+ this.props.octave} onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave} className="white-note">B{this.props.octave}
          <div  id={"A#" + this.props.octave} onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="black-note">A#{this.props.octave}</div>
        </div>
        <div  id={"A" + this.props.octave} onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">A{this.props.octave}
          <div id={"G#" + this.props.octave} onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="black-note">G#{this.props.octave}</div>
        </div>
        <div  id={"G" + this.props.octave} onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">G{this.props.octave}
          <div id={"F#" + this.props.octave} onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="black-note">F#{this.props.octave}</div>
        </div>
        <div  id={"F" + this.props.octave} onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">F{this.props.octave}
        </div>
        <div id={"E" + this.props.octave} onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">E{this.props.octave}
          <div id={"D#" + this.props.octave} onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="black-note">D#{this.props.octave}</div>
        </div>
        <div  id={"D" + this.props.octave} onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">D{this.props.octave}
          <div id={"C#" + this.props.octave} onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="black-note">C#{this.props.octave}</div>
        </div>
        <div id={"C" + this.props.octave} onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">C{this.props.octave}
        </div>
        
        
      </div>
      
      
    );
  }
}

export default Synthesiser;