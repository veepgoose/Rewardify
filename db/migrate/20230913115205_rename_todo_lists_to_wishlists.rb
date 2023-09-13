class RenameTodoListsToWishlists < ActiveRecord::Migration[7.0]
  def change
    rename_table :todo_lists, :wishlists
  end
end
