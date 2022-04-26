Ext.define('MyApp.model.Event',{
    extend:'Ext.data.Model',
    alias:'model.event',
    fields:[
        {name:'ID'},
        {name:'Status'},
        {name:'Date'}
    ],
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'History'
        }
    }
});