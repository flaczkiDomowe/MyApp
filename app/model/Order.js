Ext.define('MyApp.model.Order',{
    extend:'Ext.data.Model',
    alias:'model.order',
    fields:[
        {name:'ID'},
        {name:'Name'},
        {name:'DateCreated'},
        {name:'Status'},
        {name:'DateLast'},
        {name:'History'}
    ],
    hasMany: [
    {model: 'MyApp.model.Event',   name: 'History'}
],
    proxy: {
    type: 'memory',
        reader: {
        type: 'json',
            rootProperty: 'items'
    }
}
});