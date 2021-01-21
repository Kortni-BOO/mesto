export default class UserInfo {
    constructor(name, job, avatar, id) {
        this._name = name;
        this._job = job;
        this._avatar = avatar;
        this._id = id;
    }
    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._job.textContent,
            //avatar: this._avatar,
            id: this._id
        }

    }
    setUserAvatar(avatar) {
        this._avatar.style.backgroundImage = `url(${avatar})`;
        
    }
    setUserInfo(name, about, avatar, id) {
        if(name) {
            this._name.textContent = name;
        }
        if(about) {
            this._job.textContent = about;
        }
        if(avatar) {
            this.setUserAvatar(avatar);
        }
        if(id) {
            this._id = id;
        }
    }
}