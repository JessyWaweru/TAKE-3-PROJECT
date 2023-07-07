class CreateEvents2 < ActiveRecord::Migration[7.0]
  def change
    create_table :events2 do |t|
      
        t.string :title
        t.string :image
        t.string :description
        t.string :location
        t.string :age_limit
        t.integer :capacity
        t.integer :user_id
        t.integer :sponsor_id
        t.datetime :date
        t.timestamps

      
    end
  end
end
