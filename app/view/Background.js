Ext.define('MyApp.view.Background',{
    extend: 'Ext.container.Container',
    xtype:'background',
    layout:'column',
    items: [{
        columnWidth: 0.80,
        xtype:'orderTable'
    },{
        columnWidth: 0.20,
        xtype:'actionBar'
    }]
});
