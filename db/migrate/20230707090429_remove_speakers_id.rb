class RemoveSpeakersId < ActiveRecord::Migration[7.0]
  
  def change
    remove_column :events, :speaker_id
  end

end
