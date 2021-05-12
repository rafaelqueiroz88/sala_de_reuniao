class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :occupation, :slug

  has_many :schedules
end
