class User < ApplicationRecord

    has_many :schedules

    before_create :slugify

    def slugify
        puzzle = rand(10000...99999)
        self.slug = "#{name.parameterize}-#{puzzle}"
    end

    def get_name
        users.name
    end
end