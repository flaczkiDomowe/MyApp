Ext.define('MyApp.view.OrderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.orderController',
    config: {
        stores: ['Orders'],
        refs: {
            orderName: '#newOrderName'
        }
    },
    requires: [
        'MyApp.store.Orders'
    ],
    onOrderFormClick: function() {
        console.log(Ext.getStore('Orders'));
        //console.log(this.orderName());
       var order = Ext.create('MyApp.model.Order', {
            ID  : '45',
            Name : 'Conan',
            DateCreated  : '2020-01-01',
            Status: 'Zaniechany',
            DateLast: '2020-12-02T12:20:20',
            History: [{
                ID: '10',
                Status: 'Zaniechany',
                Date: '2020-12-02T12:20:20'
            }]
        });

        this.getView().destroy();
        Ext.widget('background');

    }
});
