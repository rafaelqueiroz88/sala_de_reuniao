class User < ApplicationRecord

    has_secure_password

    # validations
    validates :name, presence: true
    validates :email, presence: true
    validates :password, presence: true
    validates :occupation, presence: true

    validates_uniqueness_of :email

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