import axios from 'axios'

const CLIENT_URL = 'http://localhost:8081/'
const LIST_CLIENT = `${CLIENT_URL}/Clients`

class ClientService {

    retrieveAllClients() {
        return axios.get(`${LIST_CLIENT}`);
    }
    createClient(client){
        return axios.post(`${CLIENT_URL}/addClients`, client)
    }

    deleteClient(id){
        return axios.delete(`${CLIENT_URL}/${id}`)
    }
}
export default new ClientService()