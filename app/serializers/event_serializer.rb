class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :location, :age_limit, :image, :capacity, :date, :event_planner_contact, :event_planner_name, :price
  belongs_to :user
  has_many :speakers
end
