import Sidebar from '../../Sidebar/Sidebar'
import SingleBlog from '../../SingleBlog/SingleBlog'
import './single.css'

export default function Single() {
    return (
        <div className="single">
            <SingleBlog/>
            <Sidebar/>
        </div>
    )
}
