Ext.define('MyApp.store.Orders',{
extend:'Ext.data.Store',
    alias:'store.orders',
    model:'MyApp.model.Order',
    autoload:true,
    data:[
        {
            "ID": "254",
            "Name": "Sample 1",
            "DateCreated": "2020-12-01",
            "Status": "Status three",
            "DateLast": "2020-12-04T13:15:10",
            "History": [
                {
                    "ID": "123",
                    "DocID": 254,
                    "Status": "Status one",
                    "Date": "2020-12-01T11:00:00"
                },
                {
                    "ID": "124",
                    "DocID": 254,
                    "Status": "Status two",
                    "Date": "2020-12-02T12:00:00"
                },
                {
                    "ID": "125",
                    "DocID": 254,
                    "Status": "Status three",
                    "Date": "2020-12-04T13:15:10"
                }
            ]
        },
        {
            "ID": "255",
            "Name": "Sample 2",
            "DateCreated": "2020-12-02",
            "Status": "Status one",
            "DateLast": "2020-12-02T12:20:20",
            "History": [
                {
                    "ID": "126",
                    "DocID": 255,
                    "Status": "Status one",
                    "Date": "2020-12-02T12:20:20"
                }
            ]
        }
    ]
});
