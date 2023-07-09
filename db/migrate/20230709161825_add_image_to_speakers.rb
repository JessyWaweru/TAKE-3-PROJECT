class AddImageToSpeakers < ActiveRecord::Migration[7.0]
  def change
    add_column :speakers, :image, :string
  end
end
