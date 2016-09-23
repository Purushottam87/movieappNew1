var React=require("react");
var ReactDOM=require("react-dom")
var batchform=require("./batchform.js")

var batchformparent=React.createClass({

     render:function(){
      console.log(this.props.data);
          var result = this.props.data.map(function(add) {
        return (

          <batchform  add1={add}/>


        );
      });
       return(
           <div>
           <h2>All Batches</h2>
           {result}
           </div>

       );
   }

})
module.exports=batchformparent;
