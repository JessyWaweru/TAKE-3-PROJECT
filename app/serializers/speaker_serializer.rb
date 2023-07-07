class SpeakerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :event_id, :organisation, :job_title
  belongs_to :event
end
