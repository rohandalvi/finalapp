/**
 * Created with JetBrains WebStorm.
 * User: rohandalvi
 * Date: 6/20/13
 * Time: 1:17 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('finalapp.view.user.List',{
    extend:'Ext.grid.Panel',
    alias:'widget.userlist',
    store:'Users',
    title:'This is a list',
    selModel:{mode:'MULTI'},
    tbar:[{
           text:'Include',
           action:'insert',
            iconCls:'add'
    },{
            text:'Exclude',
            action:'destroy',
            iconCls:'delete'
    }],
    columns:[
        {header:'ID',dataIndex:'id',flex:1},
        {header:'Name',dataIndex:'name',flex:1},
        {header:'Email',dataIndex:'email',flex:1}
    ],
    dockedItems:[{
        xtype:'pagingtoolbar',
        store:'Users',
        dock:'bottom',
        displayInfo:true
    }]
});