var React = require('react'); // Import react
var Link = require('react-router').Link; // Get the links component for react router
var History = require('react-router').History; // Get the history component for react router

// TODO: The history mixin has been depreciated - updated
// TODO: Allow title to be updated
// TODO: hide/show back button when not necessary
// Render the site header
var Header = React.createClass({
    mixins: [History],
    render: function() {
        return (
            <header className="siteHeader">
                <nav className="siteHeaderNav">
                    <ul className="siteHeaderNavList">
                        <li className="siteHeaderNavItem">
                            <a className="siteHeaderNavLink fa fa-angle-left" onClick={this.history.goBack}><span className="siteHeaderNavItemTitle">Back</span></a>
                        </li>
                        <li className="siteHeaderNavItem">
                            <h1 className="siteHeaderNavItemTitle siteTitle">Remember when</h1>
                        </li>
                        <li className="siteHeaderNavItem">
                            <Link to="/add" className="siteHeaderNavLink fa fa-plus"><span className="siteHeaderNavItemTitle">Add</span></Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
});

// TODO: Create the sub menu
// Render the site footer
var Footer = React.createClass({
    render: function() {
        return (
            <footer className="siteFooter">
                <nav className="siteNav">
                    <ul className="siteNavList">
                        <li className="siteNavItem"><Link to="/" className="siteNavLink fa fa-home"><span className="siteNavItemTitle">Home</span></Link></li>
                        <li className="siteNavItem"><Link to="/friends" className="siteNavLink fa fa-users"><span className="siteNavItemTitle">Friends</span></Link></li>
                        <li className="siteNavItem"><Link to="/notifications" className="siteNavLink fa fa-bell"><span className="siteNavItemTitle">Notifications</span></Link></li>
                        <li className="siteNavItem"><Link to="/games" className="siteNavLink fa fa-gamepad"><span className="siteNavItemTitle">Memory Games</span></Link></li>
                        <li className="siteNavItem"><a className="siteNavLink fa fa-bars">
                            <span className="siteNavItemTitle">More</span></a>

                            <ul className="siteNavMoreList siteNavSubList">
                                <li className="siteNavItem"><Link to="/logout" className="siteNavLink"><span className="siteNavItemTitle">Log out</span></Link></li>
                                <li className="siteNavItem"><Link to="/profile" className="siteNavLink"><span className="siteNavItemTitle">Profile</span></Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </footer>
        )
    }
});

// Render whole page
var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Header></Header>
                <main className="main">{this.props.children}</main>
                <Footer></Footer>
            </div>
        );
    }
});

module.exports = Main; // Export the react class
