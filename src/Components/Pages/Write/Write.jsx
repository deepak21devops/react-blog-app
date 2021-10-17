import './write.css'
export default function Write() {
    return (
        <div className="write">
            <div className="writeContainer">
                <form className="writeGroup">
                    <img className="writeImg" src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    <div className="writeContent">
                        <label htmlFor="fileInput">
                        <i class="uploadIcon fas fa-plus"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}></input>

                        <input className="inputTitle" type="text" placeholder="Title" autoFocus={true}></input>
                    </div>

                    <div className="writeContent">
                        <textarea className="inputText" placeholder="Tell Your Story..."></textarea>
                        <button className="btnPushlish">Publish</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}
