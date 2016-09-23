var React=require('react');
var ReactDOM=require('react-dom');
var batchform=React.createClass({
  getInitialState:function(){
    return ({data:[],url:"http://localhost:8081/movie/favmovie"})
  },
    CreateaddAjax:function()
    {
      console.log(this.state.data);
      $.ajax({
        url: this.state.url,
        dataType: 'json',
        type: 'POST',
        data: this.props.add1,
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
render:function(){
  return(
    <div className="content">
     <div className="row" >
          <div className="col-sm-12" >
          <a href="#myModal" role="button"ClassName="btn btn-warning" data-toggle="modal">Create Batch</a>
              <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button className="close" data-dismiss="modal">x</button>
                      <h4 className="modal-title">Create Your Batch</h4>
                    </div>
                    <div className="modal-body">
                      <form className="form-horizontal">
                        <div className="form-group">
                          <label className="col-lg-2 control-label" id="Batch Name">Batch Name</label>
                          <label className="col-lg-2 control-label" id="Batch Type">Batch Type</label>
                          <label className="col-lg-2 control-label" id="Location">Location</label>
                          <label className="col-lg-2 control-label" id="Number of Participants">Number of Participants</label>
                          <label className="col-lg-2 control-label" id="Start Date">Start Date</label>
                          <label className="col-lg-2 control-label" id="End Date">End Date</label>
                          <div className="col-lg-10">
                            <input className="form-control" id="Batch Name" placeholder="Enter Batch Name" type="text"/>
                            <input className="form-control" id="Batch Type" placeholder="Enter Batch Type" type="text"/>
                            <input className="form-control" id="Location" placeholder="Location" type="text"/>
                            <input className="form-control" id="Number of Participants" placeholder="Number of Participants" type="text"/>
                              <input className="form-control" id="Start Date" placeholder="Start Date" type="text"/>
                                <input className="form-control" id="End Date" placeholder="End Date" type="text"/>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="col-lg-12">
                          <button className="btn btn-success pull-right" type="submit" onClick={this.CreateaddAjax}>Create Batch</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
      </div>

  )

  }

})
module.exports=batchform;
