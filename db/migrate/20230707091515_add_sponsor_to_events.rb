class AddSponsorToEvents < ActiveRecord::Migration[7.0]
  def change
    
      add_column :events, :sponsor_id, :integer
    
  end
end
