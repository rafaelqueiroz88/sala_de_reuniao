class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :status, :hour, :user_id
end
