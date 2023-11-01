/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qzu6ot87ve4h7tv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xdamy5ph",
    "name": "currency",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "TRY",
        "USD",
        "EUR"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qzu6ot87ve4h7tv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xdamy5ph",
    "name": "currency",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "TRY",
        "USD"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
