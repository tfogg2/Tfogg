class AddNameToContact < ActiveRecord::Migration
  def change
  	add_column :contacts, :name, :string
  	add_column :contacts, :email, :email_address
  	add_column :contacts, :message, :string
  end
end
