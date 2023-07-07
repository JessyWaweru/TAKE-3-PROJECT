class Event < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true
  validates :location, presence: true
  validates :age_limit, presence: true
  validates :capacity, numericality: { greater_than: 0 }
  validates :date, presence: true
  has_many :attendees
  belongs_to :sponsor
  has_many :speakers, dependent: :destroy
  belongs_to :user
  #belongs_to :speaker


end
