Ext.define('MyApp.view.ActionBar',{
    extend:'Ext.panel.Panel',
    xtype:'actionBar',
    items:[
        {
            xtype:'button',text:'Stwórz zamówienie',
            handler : function() {

                showCreatingOrderForm();
            }
        }
    ]
});

function showCreatingOrderForm(){
    Ext.widget('orderform');
}