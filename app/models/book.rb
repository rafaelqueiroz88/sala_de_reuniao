class Book < ApplicationRecord

  belongs_to :user

  before_create :slugify

  def slugify
    puzzle = rand(10000...99999)
    self.slug = "#{title.parameterize}-#{puzzle}"
  end

  def get_name
    books.name
  end
end