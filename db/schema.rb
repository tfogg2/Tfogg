# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170402234406) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ar_internal_metadata", id: false, force: true do |t|
    t.string   "key",        limit: nil, null: false
    t.string   "value",      limit: nil
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "categories", force: true do |t|
    t.string   "title",                 limit: nil
    t.string   "handle",                limit: nil
    t.string   "shopify_collection_id", limit: nil
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.string   "collection_id",         limit: nil
  end

  create_table "collections", force: true do |t|
    t.string   "shop_id",               limit: nil
    t.string   "title",                 limit: nil
    t.string   "shopify_collection_id", limit: nil
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
  end

  create_table "product_tags", force: true do |t|
    t.integer  "product_id"
    t.integer  "tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "product_tags", ["product_id"], name: "index_product_tags_on_product_id", using: :btree
  add_index "product_tags", ["tag_id"], name: "index_product_tags_on_tag_id", using: :btree

  create_table "product_types", force: true do |t|
    t.integer  "category_id"
    t.string   "title",       limit: nil
    t.string   "handle",      limit: nil
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  add_index "product_types", ["category_id"], name: "index_product_types_on_category_id", using: :btree

  create_table "products", force: true do |t|
    t.integer  "product_type_id"
    t.integer  "category_id"
    t.string   "shopify_product_id", limit: nil
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
  end

  add_index "products", ["category_id"], name: "index_products_on_category_id", using: :btree
  add_index "products", ["product_type_id"], name: "index_products_on_product_type_id", using: :btree

  create_table "shops", force: true do |t|
    t.string   "shopify_domain", limit: nil, null: false
    t.string   "shopify_token",  limit: nil, null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "shops", ["shopify_domain"], name: "index_shops_on_shopify_domain", unique: true, using: :btree

  create_table "tags", force: true do |t|
    t.integer  "product_type_id"
    t.string   "title",           limit: nil
    t.string   "handle",          limit: nil
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  add_index "tags", ["product_type_id"], name: "index_tags_on_product_type_id", using: :btree

end
