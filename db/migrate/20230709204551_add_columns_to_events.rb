class AddColumnsToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :price, :integer
    add_column :events, :event_planner_name, :string
    add_column :events, :event_planner_contact, :integer
  end
end
