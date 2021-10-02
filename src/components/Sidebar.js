import '../css/Sidebar.css';

function sidebar (props) {
    return (
        <div className="sidebar-container">
            <div className="sidebar-tab"><i className="fas fa-users"></i>Organizations</div>
            <div className="sidebar-tab" onClick={ () => {props.render("map")}}><i className="fas fa-globe-americas"></i>Maps</div>
        </div>
    );
}

export default sidebar;