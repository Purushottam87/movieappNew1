var React =require('react');
var NavLink=require("./NavLink");


var Navbar=React.createClass({
  render:function(){
    return(

    <div className="container">

      <ul className="nav navbar-nav">
      <li><NavLink to="/batchform">New Batch</NavLink></li>
      <li><NavLink to="#">View Batch</NavLink></li>
      </ul>

    </div>
    )
  }
});
module.exports = Navbar;
