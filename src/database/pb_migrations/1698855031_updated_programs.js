/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zgf42kg7x4vyp29")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nkn32rxe",
    "name": "applicationDeadline",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zgf42kg7x4vyp29")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nkn32rxe",
    "name": "applicationDeadline",
    "type": "date",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
