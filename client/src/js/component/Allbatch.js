var React =require('react');
var batchform=require('./batchform.js');
var AllFavMovie =React.createClass({

  getInitialState: function(){
  return ({data:[]})

  },


  //showResult Method
  showResult: function(response) {

    this.setState({
      data: response
    });
  },
  //ajax call to get data from server
  getDataFromServer:function(){
    $.ajax({
      type:"GET",
      dataType:"json",
      url:"http://localhost:8081/movie/Fav",
      success: function(response) {
        this.showResult(response);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

componentDidMount:function(){
  this.getDataFromServer();
},

  render:function(){
    console.log(this.state.data);
      var result = this.state.data.map(function(add) {
      return (
        <DisplayDu  add1={add}/>

      );
    });
    return(
     <div>
     <h2>My Collection</h2>
      {result}

     </div>


    )
  }
});
module.exports=AllFavMovie;
