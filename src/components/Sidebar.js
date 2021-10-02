import '../css/Sidebar.css';

function sidebar () {
    return (
        <div className="sidebar-container">
            <div className="sidebar-tab"><i className="fas fa-users"></i>Organizations</div>
            <div className="sidebar-tab"><i className="fas fa-globe-americas"></i>Maps</div>
        </div>
    );
}

export default sidebar;