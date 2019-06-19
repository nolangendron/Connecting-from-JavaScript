
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('milestones', function(table){
            table.bigInteger('id');
            table.string('description');
            table.date('data_achieved');
        })
        ]) 
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('milestones')
      ])
};
