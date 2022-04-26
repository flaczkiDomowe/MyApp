Ext.define('MyApp.view.OrderForm', {
    extend: 'Ext.window.Window',
    xtype: 'orderform',

    requires: [
        'MyApp.view.OrderController',
        'Ext.form.Panel'
    ],
    controller: 'orderController',
    bodyPadding: 10,
    title: 'Tworzenie zamówienia',
    closable: true,
    autoShow: true,
    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'Name',
            itemId:'newOrderName',
            fieldLabel: 'Nazwa zamówwienia',
            allowBlank: false
        }]
    },
        buttons: [{
            text: 'Zatwierdź',
            formBind: true,
            listeners: {
                click: 'onOrderFormClick'
            }
        }]
});