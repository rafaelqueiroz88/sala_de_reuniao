require 'rails_helper'

RSpec.describe "Users", type: :request do

  url = 'http://localhost:3000'

  User.new(name: 'Rafael', email: 'rafael.qdc88@gmail.com', occupation: 'Dev', password: '12', password_confirmation: '12')

  let(:valid_attributes) do
    {
      'email' => 'rafael.qdc88@gmail.com',
      'password' => '12'
    }
  end

  # use for testing invalid address
  let(:invalid_attributes_email) do
    {
      'email' => 'rafael.qdc@gmail.com',
      'password' => '12'
    }
  end

  # use for testing invalids
  let(:invalid_attributes) do
    {
      'id' => 'a',
      'email' => 'rafael.qdc@gmail.com'
    }
  end

  # testing login authentications expecting successful attempts
  describe 'POST /api/v1/login successful' do
    it 'renders a successful response from login attempt' do
      user = User.new(valid_attributes)
      post "#{url}/api/v1/login"

      expect(response).to be_successful
    end
  end

  # testing login authentications expecting failure
  describe 'POST /api/v1/login w/o existing email' do
    it 'renders a not success response from login attempt' do
      user = User.new(invalid_attributes_email)
      post "#{url}/api/v1/login"

      expect(response).to have_http_status(208)
    end
  end

  # testing login authentications expecting failure
  describe 'POST /api/v1/login invalid attributes' do
    it 'renders a not success response from login attempt' do
      user = User.new(invalid_attributes)
      post "#{url}/api/v1/login"

      expect(response).to have_http_status(208)
    end
  end
end