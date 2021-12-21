import React, { Component } from 'react';
import ClientService from '../services/ClientService';

class ListClients extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clients: [],
            message: null
        }
        this.refreshClients = this.refreshClients.bind(this)
       
        this.addClient=this.addClient.bind(this)
    }

    componentDidMount() {
        this.refreshClients();
    }

    removeClient= (e) => {
        console.log(e)
        ClientService.deleteClient();

    }

    refreshClients() {
        ClientService.retrieveAllClients()//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ clients: response.data })
                }
            )
    }
    addClient(){
        this.props.history.push('/addClients')
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Liste des clients</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addClient}>Ajouter un client</button>

                </div>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="row">
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>nom de la société</th>
                                <th>Personne Contact</th>
                                <th>Numero de téléphone</th>
                                <th>Email</th>
                                <th>Actions</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                        {
                                this.state.clients.map(
                                    client =>
                                        <tr key={client.id}>
                                            <td>{client.id}</td>
                                            <td>{client.nom_societe}</td>
                                            <td>{client.personne_contact}</td>
                                            <td>{client.tél}</td>
                                            <td>{client.mail}</td>
                                            <div class="d-flex p-2">
                                                <button class="btn btn-success btn-block">edit</button>
                                                <button class="btn btn-danger btn-block" onClick={this.removeClient()}>Delete</button>
                                            </div>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListClients