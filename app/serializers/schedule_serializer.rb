class ScheduleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :status, :hour, :slug, :user_id

  belongs_to :user
end
