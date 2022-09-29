const EntitySchema = require('typeorm').EntitySchema;
const {employee} = require('../entity/employee')
const dept = new EntitySchema({
    name:'dept',
    columns:
    {
        dept_id:{
            primary:true,
            type:'int',
            generated:true,
        },
        dept_name:{
            type:'varchar',
        }
    },

    relations: {
        employee:{
              target:'employee',
              type:'one-to-many',
              joinColumn: true,
              joinTable: true,
              inverseSide: 'dept',
              cascade: true,
              eager: true,
              //nullable: false,
              referenceColumn: true,

        }

    }
})
module.exports ={dept}