class ScheduleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :status, :hour, :user_id

  belongs_to :user
end
