/**
 * Created with JetBrains WebStorm.
 * User: rohandalvi
 * Date: 6/20/13
 * Time: 12:33 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.Loader.setConfig({enabled:true});
Ext.application({
    name:'finalapp',
    appFolder:'app',
    controllers:[
        'Users'
    ],
    launch:function(){
        Ext.create('Ext.container.Viewport',{
            layout:'fit',
            items:{
                xtype:'userlist'
            }
        });
    }
});