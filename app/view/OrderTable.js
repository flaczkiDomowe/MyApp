Ext.define('MyApp.view.OrderTable',{
   extend:'Ext.grid.Panel',
    xtype:'orderTable',
    title:'Lista zamówień',
    store:{type:'orders'},
    height:800,
    plugins:['rowediting'],
    columns:[
        {text:'ID',dataIndex:'ID'},
        {text:'Nazwa',dataIndex:'Name',editor:'textfield'},
        {text:'Data utworzenia',dataIndex:'DateCreated',width:200},
        {text:'Status',dataIndex:'Status'},
        {text:'Data ostatniego statusu',dataIndex:'DateLast',width: 200},
        {
            text: 'Historia', width: 200,
            renderer: function(value, meta, record) {
                var id = Ext.id();
                Ext.defer(function(){
                    new Ext.Button({
                        text: 'Pokaż',
                        handler : function(btn, e){
                           showHistory(record);
                        }
                    }).render(document.body, id);
                },50);
                return Ext.String.format('<div id="{0}"></div>', id);
            }
        },
        {
            text: 'Usuń', width: 100,
            renderer: function(value, meta, record) {
                var id = Ext.id();
                Ext.defer(function(){
                    new Ext.Button({
                        text: 'Usuń',
                        handler : function(btn, e){
                            deleteRecord(record);
                        }
                    }).render(document.body, id);
                },50);
                return Ext.String.format('<div id="{0}"></div>', id);
            }
        }
    ]

});

function showHistory (record){
    console.log(record.data.ID);
}
function deleteRecord (record){
    console.log(record.data.ID);
}