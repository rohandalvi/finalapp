/**
 * Created with JetBrains WebStorm.
 * User: rohandalvi
 * Date: 6/20/13
 * Time: 1:17 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('finalapp.view.user.Edit',{
    extend: 'Ext.window.Window',
    alias:'widget.useredit',
    title:'Sample widget',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [{
            xtype:'form',
            items:[{
                xtype: 'textfield',
                name:'name',
                ref:'name',
                fieldLabel:'Name',
                allowBlank: false
            },{
                xtype:'textfield',
                name:'email',
                ref:'email',
                fieldLabel:'email',
                allowBlank:false,
                vtype:'email'
            }]

        }];

        this.buttons = [{
            text:'Save',
            action:'save'
        },{
            text:'Cancel',
            scope:this,
            handler:this.close
        }];
        this.callParent(arguments);
    }
});