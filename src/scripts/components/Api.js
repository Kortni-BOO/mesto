export default class Api{
    constructor({address, token, groupId}){
        this._address = address;
        this._token = token;
        this._groupId = groupId;
    }

    getUserInformation() {
        return fetch(`${this._address}/v1/${this._groupId}/users/me`, {
            headers: {
                authorization: this._token
            }
        })
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                return Promise.reject(`Error ${response.status}`)
            })
    }

    editUserInformation(data) {
        return fetch(`${this._address}/v1/${this._groupId}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                about: data.about,
                //avatar: data.avatar,
            })
        })
        .then(result => result.ok ? result.json() : Promise.reject(`Ошибка ${result.status}`))

    }

    getInitialCards() {
        return fetch(`${this._address}/v1/${this._groupId}/cards`, {
            headers: {
                authorization: this._token
            }
        })
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                return Promise.reject(`Ошибка ${response.status}`)  
            })
    }
    addCard(data) {
        return fetch(`${this._address}/v1/${this._groupId}/cards`, {
            method: 'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                link: data.link,
            })
        })
        .then(result => result.ok ? result.json() : Promise.reject(`Ошибка ${result.status}`))

    }
    removeCard(id) {
        return fetch(`${this._address}/v1/${this._groupId}/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json',
            }
        })
            .then(result => result.ok ? result.json() : Promise.reject(`Ошибка ${result.status}`))
    }

    editAvatarUser(data) {
        return fetch(`${this._address}/v1/${this._groupId}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                avatar: data.avatar,
            })
        })    
            .then(result => result.ok ? result.json() : Promise.reject(`Ошибка ${result.status}`))
        
    }

    removeLike(id) {
        return fetch(`${this._address}/v1/${this._groupId}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json',
            }
        })
        .then(result => result.ok ? result.json() : Promise.reject(`Ошибка ${result.status}`))
        
        
    }

    addLike(id) {
        return fetch(`${this._address}/v1/${this._groupId}/cards/likes/${id}`, {
            method: 'PUT',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json',
            }
        })
        .then(result => result.ok ? result.json() : Promise.reject(`Ошибка ${result.status}`))
    }
}