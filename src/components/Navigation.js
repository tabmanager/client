import React from 'react';

class Navigation extends React.Component {
    render(){
        return(
            <div className="navigation-wrapper">
                <i class="fas fa-cog"></i>
                <i class="fas fa-users"></i>
                <i class="fas fa-sign-out-alt"></i>
            </div>
        )
    }
}

export default Navigation