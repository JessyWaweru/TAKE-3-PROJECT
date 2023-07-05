class AddSpeakerIdToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, :speaker_id, :integer
  end
end
