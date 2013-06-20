/**
 * Created with JetBrains WebStorm.
 * User: rohandalvi
 * Date: 6/20/13
 * Time: 12:49 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('finalapp.model.User',{
    extend:'Ext.data.Model',
    fields:[
        { name: 'id',
        type:'int'
        },
        {
            name:'name',
            type:'string'
        },
        {
            name:'email',
            type:'string'
        }
    ]
});