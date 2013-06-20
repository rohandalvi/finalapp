/**
 * Created with JetBrains WebStorm.
 * User: rohandalvi
 * Date: 6/20/13
 * Time: 12:51 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('finalapp.store.Users',{
    extend:'Ext.data.Store',
    model:'finalapp.model.User',
    autoLoad:true,
    remoteSort:false,
    proxy:{
        simpleSortMode:true,
        type:'ajax',
        api:{
            read:'app/data/php/Users.php?action=fetchAll'
        },
        actionMethods:{
            read:'POST'
        },
        reader:{
            type:'json',
            root:'data',
            successProperty:'success'
        }
    }

});