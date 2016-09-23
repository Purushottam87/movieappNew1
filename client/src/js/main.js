var React=require("react");
var ReactDom=require("react-dom");
var {hashHistory,Route,Router,IndexRoute}=require("react-router");
var Navbar=require("./component/Navbar");
var batchform=require("./component/batchform");

var MainComponent=React.createClass({
render:function(){
  return(
    <div>
    <Navbar/>

      <br/><br/>

{this.props.children}
    </div>
  );
}
});
ReactDom.render(
  <Router history={hashHistory}>
              <Route path="/" component={MainComponent}>
                <IndexRoute component={batchform}/>
                <Route path="/batchform" component={batchform}/>
              </Route>
  </Router>,document.getElementById("app"));
