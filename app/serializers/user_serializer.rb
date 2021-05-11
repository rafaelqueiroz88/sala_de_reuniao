class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :occupation

  has_many :schedules
end
