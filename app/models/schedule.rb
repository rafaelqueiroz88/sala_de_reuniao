class Schedule < ApplicationRecord
  
  belongs_to :user

  before_create :slugify

  now = Date.today
  monday = (now - now.wday) + 1
  
  scope :search_week, -> { where("DATE(hour) >= ?", monday) }

  def slugify
    puzzle = rand(10000...99999)
    self.slug = "#{title.parameterize}-#{puzzle}"
  end

  def get_name
    schedules.name
  end
end
