import React, { Component } from 'react';
import ClientService from '../services/ClientService';
class CreateClient extends Component {
  constructor(props) {
        super(props);
        this.state ={
            nom_societe: '',
            personne_contact: '',
            tél: "",
            mail: "",
        }
        
        this.saveClient = this.saveClient.bind(this);
        this.changenomHandler=this.changenomHandler.bind(this);
        this.changepersonneHandler=this.changepersonneHandler.bind(this);
        this.changetelHandler=this.changetelHandler.bind(this);
        this.changemailHandler=this.changemailHandler.bind(this);

    }

    saveClient = (e) => {
        e.preventDefault();
        let client ={nom_societe:this.state.nom_societe, personne_contact:this.state.personne_contact, tél:this.state.tél, mail:this.state.mail};
        console.log('client =>'+ JSON.stringify(client));
        ClientService.createClient(client);

    }
    
    changenomHandler=(event)=>{
        this.setState({nom_societe:event.target.value})
    }
    changepersonneHandler=(event)=>{
        this.setState({personne_contact:event.target.value})
    }
    changetelHandler=(event)=>{
        this.setState({tél:event.target.value})
    }
    changemailHandler=(event)=>{
        this.setState({mail:event.target.value})
    }

    

    cancel(){
        this.props.history.push('/');
    }

    render() {

        return (
            <div>
                <div className = 'container'>
                    <div className = 'row'>
                        <div className = 'card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className = "text-center">Ajouter un Client</h3>
                            <div className = "cart-body ">
                                <form>
                                    <div className = "form-group">
                                        <label> Nom de la société:</label>
                                        <input placeholder="" name="nom_societe" id="nom"  className="form-control" value={this.state.nom_societe} onChange={this.changenomHandler} required/>
                                      
                                    
                                    </div>
                                    <div className = "form-group">
                                        <label> Personne à contacter:</label>
                                        <input placeholder="" name="personne_contact" id="prenom"  className="form-control" value={this.state.personne_contact} onChange={this.changepersonneHandler} required/>
                                        
                                    
                                    </div>
                                    <div className = "form-group">
                                        <label> Numero de télephone:</label>
                                        <input placeholder="" name="tél" id="cni" className="form-control" value={this.state.tél} onChange={this.changetelHandler} required/>
                                      
                                    </div>
                                    <div className = "form-group">
                                        <label> Email:</label>
                                        <input placeholder="" name="mail" id="email"  className="form-control" type="email" value={this.state.mail} onChange={this.changemailHandler} required/>
                                    
                                    
                                    </div>
                 
                                    <button className="btn btn-success" onClick={this.saveClient}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                   
                        
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}



export default CreateClient;