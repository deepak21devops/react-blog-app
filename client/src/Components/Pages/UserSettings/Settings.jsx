import Sidebar from '../../Sidebar/Sidebar'
import './settings.css'

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="titleLg">Update your Account</span>
                    <span className="titlesm">Delete Account</span>
                </div>
                <span className="profiletitle">Profile Picture</span>
                <form className="userSettings">
                    <div className="settingsProfile">
                        <img src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                        <label htmlFor="fileInput">
                            <i class="ppUpdate fas fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }}></input>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Deepak"></input>

                    <label>Email</label>
                    <input type="text" placeholder="deepak123@gmail.com"></input>

                    <label>Password</label>
                    <input type="password"></input>
                    <button className="settingUpdate">Update</button>
                </form>


            </div>

            <Sidebar />
        </div>

    )
}
