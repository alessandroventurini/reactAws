import React, {Component} from 'react';
import axios from 'axios';


class TestLambda extends Component{

    state = {
        frase: '',
        result:''
    }

    onChange = (key,value) =>{
        this.setState({[key]:value});
    }

    search = () =>{
        console.log("call in corso: ", this.state.frase);
        const api = "https://j3355374jf.execute-api.us-west-2.amazonaws.com/staging";
        const data = { "frase" : this.state.frase}
        axios
            .post(api,data)
            .then((response)=>{
                console.log(response);
            })
            .catch((error) =>{
                console.error(error);
            })
    }

    render() {
        return(
            <div className='container center_div'>
                <h1>TEST LAMBDA</h1>
                    <div className='input-group mb-3'>
                        <span className="input-group-text">Frase da cercare:</span>
                        <input type="text" className='form-control' placeholder={'Inserisci qui'} onChange={event => this.onChange('frase',event.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Risultato</span>
                        <textarea disabled className='form-control' value={this.state.result} onChange={event => this.onChange('result',event.target.value)}/>
                    </div>
                    <button className='btn btn-dark' onClick={this.search}>Cerca</button>
            </div>
        )
    }

}

export default TestLambda;