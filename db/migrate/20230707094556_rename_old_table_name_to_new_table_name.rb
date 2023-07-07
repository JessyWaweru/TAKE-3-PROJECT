class RenameOldTableNameToNewTableName < ActiveRecord::Migration[7.0]
  def change
    rename_table :events2, :events
  end
end
