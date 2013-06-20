/**
 * Created with JetBrains WebStorm.
 * User: rohandalvi
 * Date: 6/20/13
 * Time: 1:23 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.require('Ext.window.MessageBox');
Ext.define('finalapp.Example.controller.Users',{
    extend:'Ext.app.Controller',
    store:['Users'],
    models:['User'],
    views:[
        'user.List',
        'user.Edit'
    ],
    refs:[{
        ref:'userList',
        selector:'userlist'
    }],
    init:function(){
        this.control({
            'userlist':{
                itemdblclick:this.edit
            },
            'userlist button[action=insert]':{
                click:this.insert
            },
            'userlist button[action=edit]':{
                click:this.edit
            },

            'userlist button[action=destroy]':{
                click:this.destroy
            },
            'useredit button[action=save]':{
                click:this.save
            }
        });
    },
    insert: function(grid,record){
              console.log('Insert here');
    },
    destroy: function(){

    },
    save:function(button){

    },
    edit:function(){
            //this.getUserList().store.load();
            var editWin = Ext.getWidget('useredit');
            if(records.length === 1){
                var records = this.getUserList().getSelectionModel().getSelection();
                var editForm = editWin.down('form');
                var record = records[0];
                    editForm.loadRecord(record);
            }else{
                console.log('only one record to be selected');
            }
    }
});
